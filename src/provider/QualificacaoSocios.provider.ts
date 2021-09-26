import { sanitizeData, buildSql } from '../helpers';
import { QualificacaoSocios } from '../interfaces';

export class QualificacaoSociosProvider {
    build = (data: string[]): QualificacaoSocios => {
      return {
        code: sanitizeData(data[0]) as string,
        description: sanitizeData(data[1]) as string,
      };
    }

    buildInsertQuery = (data: QualificacaoSocios): string => {
      return buildSql<QualificacaoSocios>('INSERT INTO', 'QualificacaoSocios', data);
    }

    getSql = (data: string[]) => {
      const payload = this.build(data);
      return this.buildInsertQuery(payload)
    }
  }
