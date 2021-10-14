import { EMunicipios } from '../constants';
import { sanitizeData, buildSql, normalizeEnumValue } from '../helpers';
import { Municipios } from '../interfaces';

export class MunicipiosProvider {
  build = (data: string[]): Municipios => {
    const code = sanitizeData(data[EMunicipios.CODIGO]) as string;
    const description = sanitizeData(data[EMunicipios.DESCRICAO]) as string
    return {
      valor: normalizeEnumValue(`${description}_${code}`),
      descricao: `${code} - ${description}`,
    };
  }

  buildInsertQuery = (data: Municipios): string => {
    return buildSql<Municipios>('INSERT INTO', 'EMunicipios', data);
  }

  getSql = (data: string[]): string => {
    const payload = this.build(data);
    return this.buildInsertQuery(payload);
  }
}
