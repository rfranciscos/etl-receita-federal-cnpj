import { sanitizeData, buildSql } from '../helpers';
import { QualificacaoSocios } from '../interfaces';

export class QualificacaoSociosProvider {
    build = (data: string[]): QualificacaoSocios => {
      return {
        code: sanitizeData(data[0]),
        description: sanitizeData(data[0]),
      };
    }

    buildInsertQuery = (data: QualificacaoSocios): string => {
      return buildSql<QualificacaoSocios>('INSERT INTO', 'QualificacaoSocios', data);
    }
  }
