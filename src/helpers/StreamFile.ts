import fs from 'fs';
import readline from 'readline';
import { saveFile } from '.';

export class StreamFile {
  inStream: fs.ReadStream;
  rl: readline.Interface;
  cycle: number;
  numberOfLines: number;

  constructor(path: string) {
    this.inStream = fs.createReadStream(path, { encoding: 'binary' });
    this.rl = readline.createInterface(this.inStream);
    this.cycle = 0;
    this.numberOfLines = 0;
  }

  readLineAsync = (inputFunction, prefix) => {
    let data = [] as any[];
    this.rl.on('line', (line) => {
      const query = inputFunction(line.split('";"'));
      data.push(query);
      this.numberOfLines++;
      if (this.numberOfLines === 10000) {
        saveFile(`${prefix}-${this.cycle}.sql`, data.join(''))
        this.cycle += 1;
        this.numberOfLines = 0;
        data = [];
      }
    });
    this.rl.on('close', () => {
      if (this.numberOfLines !== 10000) {
        saveFile(`${prefix}-${this.cycle}.sql`, data.join(''))
        this.cycle += 1;
        this.numberOfLines = 0;
        data = [];
        console.log(this.cycle * 10000 + this.numberOfLines)
      }
  });
  }
}
