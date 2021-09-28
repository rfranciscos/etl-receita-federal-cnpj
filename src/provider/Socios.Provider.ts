import { ESocios } from '../constants';
import { sanitizeData, buildSql } from '../helpers';
import { Socios } from '../interfaces';

export class SociosProvider {
  build = (data: string[]): Socios => {
    return {
      cnpjBasico: sanitizeData(data[ESocios.CNPJ_BASICO]) as string,
      identificadorSocioId: sanitizeData(data[ESocios.IDENTIFICADOR_DE_SOCIO]) as string,
      nomeSocio: sanitizeData(data[ESocios.NOME_DO_SOCIO]) as string,
      cnpjCpf: sanitizeData(data[ESocios.CNPJ_CPF_DO_SOCIO]) as string,
      qualificacaoId: sanitizeData(data[ESocios.QUALIFICACAO_DO_SOCIO]) as string,
      inicioSociedade: sanitizeData(data[ESocios.DATA_DE_ENTRADA_SOCIEDADE]) as string,
      paisId: sanitizeData(data[ESocios.PAIS]) as string,
      representanteLegal: sanitizeData(data[ESocios.REPRESENTANTE_LEGAL]) as string,
      nomeRepresentante: sanitizeData(data[ESocios.NOME_DO_REPRESENTANTE]) as string,
      qualificacaoRepresentanteId: sanitizeData(data[ESocios.QUALIFICACAO_DO_REPRESENTANTE_LEGAL]) as string,
      faixaEtariaId: sanitizeData(data[ESocios.FAIXA_ETARIA]) as string,
    };
  }

  buildInsertQuery = (data: Socios): string => {
    return buildSql<Socios>('INSERT INTO', 'Socios', data);
  }

  getSql = (data: string[]) => {
    const payload = this.build(data);
    return this.buildInsertQuery(payload);
  }
}
