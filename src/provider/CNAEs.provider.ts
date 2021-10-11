import { ECNAEs } from '../constants';
import { sanitizeData, buildSql } from '../helpers';
import { Cnaes } from '../interfaces';

export class CNAEsProvider {
  build = (data: string[]): Cnaes => {
    const code = sanitizeData(data[ECNAEs.CODIGO]) as string
    const description = sanitizeData(data[ECNAEs.DESCRICAO]) as string
    return {
      valor: code,
      descricao: `${code} - ${description}`,
    };
  }

  buildInsertQuery = (data: Cnaes): string => {
    return buildSql<Cnaes>('INSERT INTO', 'ECNAEs', data);
  }

  getSql = (data: string[]): string => {
    const payload = this.build(data);
    return this.buildInsertQuery(payload);
  }
}
