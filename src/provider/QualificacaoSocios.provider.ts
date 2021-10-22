import { EQualificacaoSocios } from '../constants';
import { sanitizeData, buildSql, normalizeEnumValue } from '../helpers';
import { QualificacaoSocios } from '../interfaces';

export class QualificacaoSociosProvider {
  build = (data: string[]): QualificacaoSocios => {
    const code = sanitizeData(data[EQualificacaoSocios.CODIGO]) as string;
    const description = sanitizeData(data[EQualificacaoSocios.DESCRICAO]) as string;
    return {
      valor: `CODE_${code}`,
      descricao: `${code} - ${description}`,
    };
  }

  buildInsertQuery = (data: QualificacaoSocios): string => {
    return buildSql<QualificacaoSocios>('INSERT INTO', 'EQualificacaoSocios', data);
  }

  getSql = (data: string[]): string => {
    const payload = this.build(data);
    return this.buildInsertQuery(payload);
  }
}
