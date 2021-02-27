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
    let numberOfLines = 0;
    const receitaFederalProvider = new ReceitaFederalProvider();
  
    this.rl.on('line', async (line) => {
      if (line.substr(0,1) === '1') {
        // if (numberOfLines < 10) {
          const input = receitaFederalProvider.buildPessoaJuridica(line)
          // console.log(input);
        // }
      }
      numberOfLines++
    });
  
    this.rl.on('close', () => {
        console.log(numberOfLines);
    });
  }
}
