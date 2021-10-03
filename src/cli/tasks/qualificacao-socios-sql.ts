import { ReceitaFederal } from '../..';
import path from 'path';

export const description =
  'Receives a file path and build all rows in a insert query of QualificacaoSocios';
export const usage = 'npm run bin receita';
export const variables = {
  path: 'inform a file path'
};
export const flags = {
  '--help, -h': 'Shows this help'
};
export const example = `$ npm run bin qualificacao-socios-sql`;

export const execute = (): void => {
  const receita = new ReceitaFederal(`${path.join(__dirname, '../../..')}/data/F.K03200$Z.D10911.QUALSCSV`);
  receita.qualificacaoSocios();
};
