import { ENaturezasJuridicas } from '../constants';
import { sanitizeData, buildSql, normalizeEnumValue } from '../helpers';
import { NaturezasJuridicas } from '../interfaces';

export class NaturezasJuridicasProvider {
  build = (data: string[]): NaturezasJuridicas => {
    const code = sanitizeData(data[ENaturezasJuridicas.CODIGO]) as string;
    const description = sanitizeData(data[ENaturezasJuridicas.DESCRICAO]) as string;
    return {
      valor: normalizeEnumValue(`${description}_${code}`),
      descricao: `${code} - ${description}`,
    };
  }

  buildInsertQuery = (data: NaturezasJuridicas): string => {
    return buildSql<NaturezasJuridicas>('INSERT INTO', 'ENaturezasJuridicas', data);
  }

  getSql = (data: string[]): string => {
    const payload = this.build(data);
    return this.buildInsertQuery(payload);
  }
}
