import { EMunicipios } from '../constants';
import { sanitizeData, buildSql } from '../helpers';
import { Paises } from '../interfaces';

export class MunicipiosProvider {
  build = (data: string[]): Paises => {
    return {
      code: sanitizeData(data[EMunicipios.CODIGO]) as string,
      description: sanitizeData(data[EMunicipios.DESCRICAO]) as string,
    };
  }

  buildInsertQuery = (data: Paises): string => {
    return buildSql<Paises>('INSERT INTO', 'Municipios', data);
  }

  getSql = (data: string[]) => {
    const payload = this.build(data);
    return this.buildInsertQuery(payload);
  }
}
