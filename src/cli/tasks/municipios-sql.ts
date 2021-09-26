import { ReceitaFederal } from "../..";

export const description =
  'Receives a file path and build all rows in a insert query of Municipios';
export const usage = 'npm run bin municipios-sql';
export const variables = {
  path: 'inform a file path'
};
export const flags = {
  '--help, -h': 'Shows this help'
};
export const example = `$ npm run bin municipios-sql`;
 
export const execute = () => {
  const receita = new ReceitaFederal('/home/renan/dev/personal/etl-receita-federal-cnpj/data/F.K03200$Z.D10911.MUNICCSV')
  receita.municipios();
};
