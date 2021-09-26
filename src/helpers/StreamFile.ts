import fs from 'fs';
import readline from 'readline';

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
        fs.writeFile(`./output/${prefix}-${this.cycle}.sql`, data.join(''), err => console.log(err));
        this.cycle += 1;
        this.numberOfLines = 0;
        data = [];
      }
    });
    this.rl.on('close', () => {
      console.log(this.numberOfLines);
      if (this.numberOfLines !== 10000) {
        fs.writeFile(`./output/${prefix}-${this.cycle}.sql`, data.join(''), err => console.log(err));
        this.cycle += 1;
        this.numberOfLines = 0;
        data = [];
      }
  });
  }
}
