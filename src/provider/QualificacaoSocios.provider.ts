import { EQualificacaoSocios } from '../constants';
import { sanitizeData, buildSql } from '../helpers';
import { QualificacaoSocios } from '../interfaces';

export class QualificacaoSociosProvider {
  build = (data: string[]): QualificacaoSocios => {
    return {
      id: sanitizeData(data[EQualificacaoSocios.CODIGO]) as string,
      description: sanitizeData(data[EQualificacaoSocios.DESCRICAO]) as string,
    };
  }

  buildInsertQuery = (data: QualificacaoSocios): string => {
    return buildSql<QualificacaoSocios>('INSERT INTO', 'QualificacaoSocios', data);
  }

  getSql = (data: string[]) => {
    const payload = this.build(data);
    return this.buildInsertQuery(payload);
  }
}
