import { ENaturezasJuridicas } from '../constants';
import { sanitizeData, buildSql } from '../helpers';
import { NaturezasJuridicas } from '../interfaces';

export class NaturezasJuridicasProvider {
  build = (data: string[]): NaturezasJuridicas => {
    return {
      code: sanitizeData(data[ENaturezasJuridicas.CODIGO]) as string,
      description: sanitizeData(data[ENaturezasJuridicas.DESCRICAO]) as string,
    };
  }

  buildInsertQuery = (data: NaturezasJuridicas): string => {
    return buildSql<NaturezasJuridicas>('INSERT INTO', 'NaturezasJuridicas', data);
  }

  getSql = (data: string[]) => {
    const payload = this.build(data);
    return this.buildInsertQuery(payload);
  }
}
