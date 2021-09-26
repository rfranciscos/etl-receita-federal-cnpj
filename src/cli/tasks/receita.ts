import { ReceitaFederal } from '../..';

export const description =
  'Receives a file path and build all rows in a insert query of PessoaJuridica';
export const usage = 'npm run bin receita';
export const variables = {
  path: 'inform a file path'
};
export const flags = {
  '--help, -h': 'Shows this help'
};
export const example = `$ npm run bin receita`;
 
export const execute = (args: string[]) => {
  const name = args.join(' ');
  const receita = new ReceitaFederal('/home/renan/dev/personal/etl-receita-federal-cnpj/data/K3241.K03200Y0.D10814.EMPRECSV');
  receita.qualificacaoSocios();
};
