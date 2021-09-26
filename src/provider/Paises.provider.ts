import { EPaises } from '../constants';
import { sanitizeData, buildSql } from '../helpers';
import { Paises } from '../interfaces';

export class PaisesProvider {
    build = (data: string[]): Paises => {
      return {
        code: sanitizeData(data[EPaises.CODIGO]) as string,
        description: sanitizeData(data[EPaises.DESCRICAO]) as string,
      };
    }

    buildInsertQuery = (data: Paises): string => {
      return buildSql<Paises>('INSERT INTO', 'Paises', data);
    }

    getSql = (data: string[]) => {
      const payload = this.build(data);
      return this.buildInsertQuery(payload)
    }
  }
