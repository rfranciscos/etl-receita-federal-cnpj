import { ReceitaFederal } from '../..';

export const description =
  'Receives a file path and build all rows in a insert query of Socios';
export const usage = 'npm run bin socios-sql';
export const variables = {
  path: 'inform a file path'
};
export const flags = {
  '--help, -h': 'Shows this help'
};
export const example = `$ npm run bin socios-sql`;

export const execute = (): void => {
  const receita = new ReceitaFederal('/home/renan/dev/personal/etl-receita-federal-cnpj/data/K3241.K03200Y0.D10911.SOCIOCSV');
  receita.socios();
};
