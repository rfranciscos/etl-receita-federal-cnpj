import { ENaturezasJuridicas } from '../constants';
import { sanitizeData, buildSql, normalizeEnumValue } from '../helpers';
import { NaturezasJuridicas } from '../interfaces';

export class NaturezasJuridicasProvider {
  build = (data: string[]): NaturezasJuridicas => {
    const codigo = sanitizeData(data[ENaturezasJuridicas.CODIGO]) as string;
    const descricao = sanitizeData(data[ENaturezasJuridicas.DESCRICAO]) as string;
    return {
      valor: normalizeEnumValue(descricao),
      descricao: `${codigo} - ${descricao}`,
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
