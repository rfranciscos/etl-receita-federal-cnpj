import { ReceitaFederal } from '../..';

export const description =
  'Receives a file path and build all rows in a insert query of NaturezasJuridicas';
export const usage = 'npm run bin naturezas-juridicas-sql';
export const variables = {
  path: 'inform a file path'
};
export const flags = {
  '--help, -h': 'Shows this help'
};
export const example = `$ npm run bin naturezas-juridicas-sql`;

export const execute = (): void => {
  const receita = new ReceitaFederal('/home/renan/dev/personal/etl-receita-federal-cnpj/data/F.K03200$Z.D10911.NATJUCSV');
  receita.naturezasJuridicas();
};
