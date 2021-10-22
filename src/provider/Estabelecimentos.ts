import { EEstabelecimentos } from '../constants';
import { sanitizeData, buildSql, findEnumValue } from '../helpers';
import {
  IDbEnum,
  IEndereco, IPessoa,
  IPessoaJuridica,
  IPessoaJuridicaAtividades,
  IPessoaJuridicaContatos
} from '../interfaces';
import { uuid } from 'uuidv4';

export class EstabelecimentosProvider {
  tipoPessoaJuridica: IDbEnum[]
  tipoSituacao: IDbEnum[]
  tipoMotivoSituacao: IDbEnum[]
  tipoPais: IDbEnum[]

  constructor(tipoPessoaJuridica, tipoSituacao, tipoMotivoSituacao, tipoPais) {
    this.tipoPessoaJuridica = tipoPessoaJuridica;
    this.tipoSituacao = tipoSituacao
    this.tipoMotivoSituacao = tipoMotivoSituacao
    this.tipoPais = tipoPais
  }

  buildEndereco = (data: string[]): IEndereco => {
    return {
      id: uuid(),
      tipo: sanitizeData(data[EEstabelecimentos.TIPO_DE_LOGRADOURO]) as string,
      logradouro: sanitizeData(data[EEstabelecimentos.LOGRADOURO]) as string,
      numero: sanitizeData(data[EEstabelecimentos.NUMERO]) as string,
      complemento: sanitizeData(data[EEstabelecimentos.COMPLEMENTO]) as string,
      bairro: sanitizeData(data[EEstabelecimentos.BAIRRO]) as string,
      cep: sanitizeData(data[EEstabelecimentos.CEP]) as string,
      uf: sanitizeData(data[EEstabelecimentos.UF]) as string,
      municipio: sanitizeData(data[EEstabelecimentos.MUNICIPIO]) as string,
    }
  }

  buildPessoaJuridica = (data: string[], enderecoId: string): IPessoaJuridica => {
    const cnpjBasico = sanitizeData(data[EEstabelecimentos.CNPJ_BASICO]) as string;
    const cnpjOrdem = sanitizeData(data[EEstabelecimentos.CNPJ_ORDEM]) as string;
    const cnpjDv = sanitizeData(data[EEstabelecimentos.CNPJ_DV]) as string;
    return {
      id: uuid(),
      cnpj: `${cnpjBasico}${cnpjOrdem}${cnpjDv}`,
      tipo: findEnumValue(sanitizeData(data[EEstabelecimentos.IDENTIFICADOR]) as string, this.tipoPessoaJuridica) as string,
      situacao: findEnumValue(sanitizeData(data[EEstabelecimentos.SITUACAO_CADASTRAL]) as string, this.tipoSituacao) as string,
      dataSituacao: sanitizeData(data[EEstabelecimentos.DATA_SITUACAO_CADASTRAL], 'date') as string,
      motivoSituacao: findEnumValue(sanitizeData(data[EEstabelecimentos.MOTIVO_SITUACAO_CADASTRAL]) as string, this.tipoMotivoSituacao) as string,
      cidadeExterior: sanitizeData(data[EEstabelecimentos.NOME_DA_CIDADE_NO_EXTERIOR]) as string,
      pais: findEnumValue(sanitizeData(data[EEstabelecimentos.PAIS]) as string, this.tipoPais, true) as string,
      dataInicioAtividade: sanitizeData(data[EEstabelecimentos.DATA_DE_INICIO_ATIVIDADE], 'date') as string,
      situacaoEspecial: sanitizeData(data[EEstabelecimentos.SITUACAO_ESPECIAL]) as string,
      dataSituacaoEspecial: sanitizeData(data[EEstabelecimentos.DATA_DA_SITUACAO_ESPECIAL], 'date') as string,
      enderecoId,
      prefixoCnpj: cnpjBasico,
      nomeFantasia: sanitizeData(data[EEstabelecimentos.NOME_FANTASIA]) as string
    };
  }

  buildContatos = (data: string[], pessoaJuridicaId: string): { data: IPessoaJuridicaContatos, type: string }[] => {
    const contatos = [] as IPessoaJuridicaContatos[]
    const telefone1 = sanitizeData(data[EEstabelecimentos.DDD_1]) as string;
    const ddd1 = sanitizeData(data[EEstabelecimentos.TELEFONE_1]) as string;
    const telefone2 = sanitizeData(data[EEstabelecimentos.DDD_2]) as string;
    const ddd2 = sanitizeData(data[EEstabelecimentos.TELEFONE_2]) as string;
    const fax = sanitizeData(data[EEstabelecimentos.FAX]) as string;
    const dddFax = sanitizeData(data[EEstabelecimentos.DDD_FAX]) as string;
    const email = sanitizeData(data[EEstabelecimentos.CORREIO_ELETRONICO]) as string
    if (telefone1) {
      contatos.push({
        id: uuid(),
        tipo: 'TELEFONE',
        valor: `${ddd1}${telefone1}`,
        pessoaJuridicaId
      })
    }
    if (telefone2) {
      contatos.push({
        id: uuid(),
        tipo: 'TELEFONE',
        valor: `${ddd2}${telefone2}`,
        pessoaJuridicaId
      })
    }
    if (fax) {
      contatos.push({
        id: uuid(),
        tipo: 'FAX',
        valor: `${dddFax}${fax}`,
        pessoaJuridicaId
      })
    }
    if (email) {
      contatos.push({
        id: uuid(),
        tipo: 'EMAIL',
        valor: email,
        pessoaJuridicaId
      })
    }
    return contatos.map(item => ({ data: item, type:'PessoaJuridicaContatos' }));
  }

  buildAtividades = (data: string[], pessoaJuridicaId: string): { data: IPessoaJuridicaAtividades, type: string }[] => {
    const atividades = [] as IPessoaJuridicaAtividades[];
    const atividadePrincipal = sanitizeData(data[EEstabelecimentos.CNAE_FISCAL_PRINCIPAL]) as string;
    const atividadesSegundarias = (sanitizeData(data[EEstabelecimentos.CNAE_FISCAL_SECUNDARIA]) as string)?.split(',');

    atividades.push({
      id: uuid(),
      pessoaJuridicaId,
      atividade: atividadePrincipal,
      tipo: 'PRINCIPAL'
    })
    atividadesSegundarias?.forEach(atividade => {
      if (atividade) {
        atividades.push({
          id: uuid(),
          pessoaJuridicaId,
          atividade,
          tipo: 'SEGUNDARIA'
        })
      }
    })
    return atividades.map(item => ({ data: item, type:'PessoaJuridicaAtividades' }));
  }

  buildPessoa = (pessoaJuridicaId: string): IPessoa => {
    return {
      id: uuid(),
      tipo: 'JURIDICA',
      pessoaJuridicaId
    }
  }

  build = (data: string[]) => {
    const endereco = this.buildEndereco(data);
    const pessoaJuridica = this.buildPessoaJuridica(data, endereco.id);
    const contatos = this.buildContatos(data, pessoaJuridica.id);
    const atividades = this.buildAtividades(data, pessoaJuridica.id);
    const pessoa = this.buildPessoa(pessoaJuridica.id);
    return [
      {data: endereco, type:'Enderecos'},
      {data: pessoaJuridica, type:'PessoaJuridica'},
      {data: pessoa, type:'Pessoas'},
      ...contatos,
      ...atividades
    ]
  }


  buildInsertQuery = (data: any, type: string): string => {
    return buildSql<any>('INSERT INTO', type, data);
  }

  getSql = (data: string[]): { type: string, data: string }[] => {
    const payload = this.build(data) as any;
    return payload.map(item => {
      return {
        type: item.type,
        data: this.buildInsertQuery(item.data, item.type)
      }
    });
  }
}


