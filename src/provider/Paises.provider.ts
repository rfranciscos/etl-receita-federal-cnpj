import { EPaises } from '../constants';
import { sanitizeData, buildSql, normalizeEnumValue } from '../helpers';
import { Paises } from '../interfaces';

export class PaisesProvider {
  build = (data: string[]): Paises => {
    const code = sanitizeData(data[EPaises.CODIGO]) as string;
    const description = sanitizeData(data[EPaises.DESCRICAO]) as string;
    return {
      valor: `CODE_${code}`,
      descricao: `${code} - ${description}`,
    };
  }

  buildInsertQuery = (data: Paises): string => {
    return buildSql<Paises>('INSERT INTO', 'EPaises', data);
  }

  getSql = (data: string[]): string => {
    const payload = this.build(data);
    return this.buildInsertQuery(payload);
  }
}
