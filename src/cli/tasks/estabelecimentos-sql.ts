import { ReceitaFederal } from '../..';
import path from 'path';

export const description =
  'Receives a file path and build all rows in a insert query of Estabelecimentos';
export const usage = 'npm run bin estabelecimentos-sql';
export const variables = {
  path: 'inform a file path'
};
export const flags = {
  '--help, -h': 'Shows this help'
};
export const example = `$ npm run bin estabelecimentos-sql`;

export const execute = async (): Promise<void> => {
  const receita = new ReceitaFederal(`${path.join(__dirname, '../../..')}/data/K3241.K03200Y0.D10911.ESTABELE`);
  await receita.estabelecimentos();
};
