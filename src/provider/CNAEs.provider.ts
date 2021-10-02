import { ECNAEs } from '../constants';
import { sanitizeData, buildSql } from '../helpers';
import { Cnaes } from '../interfaces';

export class CNAEsProvider {
  build = (data: string[]): Cnaes => {
    return {
      id: sanitizeData(data[ECNAEs.CODIGO]) as string,
      description: sanitizeData(data[ECNAEs.DESCRICAO]) as string,
    };
  }

  buildInsertQuery = (data: Cnaes): string => {
    return buildSql<Cnaes>('INSERT INTO', 'CNAEs', data);
  }

  getSql = (data: string[]): string => {
    const payload = this.build(data);
    return this.buildInsertQuery(payload);
  }
}
