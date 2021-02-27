import fs from 'fs';
import readline from 'readline';
import stream from 'stream';
import { ReceitaFederalProvider } from './provider';

export class ReceitaFederal {
  inStream: fs.ReadStream;
  outStream: stream;
  rl: readline.Interface;

  constructor(path: string) {
    this.inStream = fs.createReadStream(path);
    this.outStream = new stream();
    this.rl = readline.createInterface(this.inStream, this.outStream as any);
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
