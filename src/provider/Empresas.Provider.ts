import { EEmpresas } from '../constants';
import { sanitizeData, buildSql } from '../helpers';
import { Empresas } from '../interfaces';

export class EmpresasProvider {
  build = (data: string[]): Empresas => {
    return {
      cnpjBasico: sanitizeData(data[EEmpresas.CNPJ_BASICO]) as string,
      razaoSocial: sanitizeData(data[EEmpresas.RAZAO_SOCIAL_NOME_EMPRESARIAL]) as string,
      naturezaJuridicaId: sanitizeData(data[EEmpresas.NATUREZA_JURIDICA]) as string,
      qualificacaoResponsavelId: sanitizeData(data[EEmpresas.QUALIFICACAO_DO_RESPONSAVEL]) as string,
      capitalSocial: sanitizeData(data[EEmpresas.CAPITAL_SOCIAL_DA_EMPRESA]) as string,
      porteId: sanitizeData(data[EEmpresas.PORTE_DA_EMPRESA]) as string,
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
