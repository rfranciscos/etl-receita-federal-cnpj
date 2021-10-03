import { EQualificacaoSocios } from '../constants';
import { sanitizeData, buildSql, normalizeEnumValue } from '../helpers';
import { QualificacaoSocios } from '../interfaces';

export class QualificacaoSociosProvider {
  build = (data: string[]): QualificacaoSocios => {
    const codigo = sanitizeData(data[EQualificacaoSocios.CODIGO]) as string;
    const descricao = sanitizeData(data[EQualificacaoSocios.DESCRICAO]) as string;
    return {
      valor: normalizeEnumValue(descricao),
      descricao: `${codigo} - ${descricao}`,
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
