import fs from 'fs';
import readline from 'readline';
import { ReceitaFederalProvider } from './provider';

export class ReceitaFederal {
  inStream: fs.ReadStream;
  rl: readline.Interface;

  constructor(path: string) {
    this.inStream = fs.createReadStream(path);
    this.rl = readline.createInterface(this.inStream);
  }

  execute = async () => {
    let cycle = 1;
    let numberOfLines = 0;
    let data = [] as string[];
    const receitaFederalProvider = new ReceitaFederalProvider();
  
    this.rl.on('line', async (line) => {
      if (line.substr(0,1) === '1') {
        const pessoaJuridica = receitaFederalProvider.buildPessoaJuridica(line);
        const query = receitaFederalProvider.buildPessoaJuridicaInsertQuery(pessoaJuridica);
        data.push(query);
        numberOfLines++;
        if (numberOfLines === 10000) {
          fs.writeFile(`./output/insert-cnpj-${cycle}.sql`, data.join(''), err => console.log(err))
          cycle += 1;
          numberOfLines = 0;
          data = [];
        }
      }
    });
  
    this.rl.on('close', () => {
        console.log(numberOfLines);
    });
  }
}
