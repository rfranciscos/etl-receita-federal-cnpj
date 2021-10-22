import { EEmpresas } from '../constants';
import { sanitizeData, buildSql, findEnumValue } from '../helpers';
import { Empresas, IDbEnum } from '../interfaces';
import { uuid } from 'uuidv4';

export class EmpresasProvider {
  naturezasJuridicas: IDbEnum[]
  qualificacoesSocios: IDbEnum[]
  portesEmpresas: IDbEnum[]

  constructor(naturezasJuridicas, qualificacoesSocios, portesEmpresas) {
    this.naturezasJuridicas = naturezasJuridicas;
    this.qualificacoesSocios = qualificacoesSocios
    this.portesEmpresas = portesEmpresas
  }

  build = (data: string[]): Empresas => {
    return {
      id: uuid(),
      prefixoCnpj: sanitizeData(data[EEmpresas.CNPJ_BASICO]) as string,
      razaoSocial: sanitizeData(data[EEmpresas.RAZAO_SOCIAL_NOME_EMPRESARIAL]) as string,
      naturezaJuridica: findEnumValue(sanitizeData(data[EEmpresas.NATUREZA_JURIDICA]) as string, this.naturezasJuridicas) as string,
      qualificacaoResponsavel: findEnumValue(sanitizeData(data[EEmpresas.QUALIFICACAO_DO_RESPONSAVEL]) as string, this.qualificacoesSocios) as string,
      capitalSocial: sanitizeData(data[EEmpresas.CAPITAL_SOCIAL_DA_EMPRESA], 'number') as number,
      porte: findEnumValue(sanitizeData(data[EEmpresas.PORTE_DA_EMPRESA]) as string, this.portesEmpresas) as string,
      enteFederativoResponsavel: sanitizeData(data[EEmpresas.ENTE_FEDERATIVO_RESPONSAVEL]) as string,
    };
  }

  buildInsertQuery = (data: Empresas): string => {
    return buildSql<Empresas>('INSERT INTO', 'Empresas', data);
  }

  getSql = (data: string[]): string => {
    const payload = this.build(data);
    return this.buildInsertQuery(payload);
  }
}
