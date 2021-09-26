import { EEstabelecimentos } from '../constants';
import { sanitizeData, buildSql } from '../helpers';
import { Estabelecimentos } from '../interfaces';

export class EstabelecimentosProvider {
  build = (data: string[]): Estabelecimentos => {
    return {
      cnpjBasico: sanitizeData(data[EEstabelecimentos.CNPJ_BASICO]) as string,
      cnpjOrdem: sanitizeData(data[EEstabelecimentos.CNPJ_ORDEM]) as string,
      cnpjDv: sanitizeData(data[EEstabelecimentos.CNPJ_DV]) as string,
      identificador: sanitizeData(data[EEstabelecimentos.IDENTIFICADOR]) as string,
      situacaoCadastral: sanitizeData(data[EEstabelecimentos.SITUACAO_CADASTRAL]) as string,
      dataSituacaoCadastral: sanitizeData(data[EEstabelecimentos.DATA_SITUACAO_CADASTRAL]) as string,
      motivoSituacaoCadastral: sanitizeData(data[EEstabelecimentos.MOTIVO_SITUACAO_CADASTRAL]) as string,
      nomeCidadeExterior: sanitizeData(data[EEstabelecimentos.NOME_DA_CIDADE_NO_EXTERIOR]) as string,
      pais: sanitizeData(data[EEstabelecimentos.PAIS]) as string,
      dataInicioAtividade: sanitizeData(data[EEstabelecimentos.DATA_DE_INICIO_ATIVIDADE]) as string,
      CnaePrincipal: sanitizeData(data[EEstabelecimentos.CNAE_FISCAL_PRINCIPAL]) as string,
      CnaeSegundario: sanitizeData(data[EEstabelecimentos.CNAE_FISCAL_SECUNDARIA]) as string,
      tipoLogradouro: sanitizeData(data[EEstabelecimentos.TIPO_DE_LOGRADOURO]) as string,
      logradouro: sanitizeData(data[EEstabelecimentos.LOGRADOURO]) as string,
      numero: sanitizeData(data[EEstabelecimentos.NUMERO]) as string,
      complemento: sanitizeData(data[EEstabelecimentos.COMPLEMENTO]) as string,
      bairro: sanitizeData(data[EEstabelecimentos.BAIRRO]) as string,
      cep: sanitizeData(data[EEstabelecimentos.CEP]) as string,
      uf: sanitizeData(data[EEstabelecimentos.UF]) as string,
      municipio: sanitizeData(data[EEstabelecimentos.MUNICIPIO]) as string,
      ddd1: sanitizeData(data[EEstabelecimentos.DDD_1]) as string,
      telefone1: sanitizeData(data[EEstabelecimentos.TELEFONE_1]) as string,
      ddd2: sanitizeData(data[EEstabelecimentos.DDD_2]) as string,
      telefone2: sanitizeData(data[EEstabelecimentos.TELEFONE_2]) as string,
      dddFax: sanitizeData(data[EEstabelecimentos.DDD_FAX]) as string,
      fax: sanitizeData(data[EEstabelecimentos.FAX]) as string,
      email: sanitizeData(data[EEstabelecimentos.CORREIO_ELETRONICO]) as string,
      situacaoEspecial: sanitizeData(data[EEstabelecimentos.SITUACAO_ESPECIAL]) as string,
      dataSituacaoEspecial: sanitizeData(data[EEstabelecimentos.DATA_DA_SITUACAO_ESPECIAL]) as string,
    };
  }

  buildInsertQuery = (data: Estabelecimentos): string => {
    return buildSql<Estabelecimentos>('INSERT INTO', 'Estabelecimentos', data);
  }

  getSql = (data: string[]) => {
    const payload = this.build(data);
    return this.buildInsertQuery(payload);
  }
}
