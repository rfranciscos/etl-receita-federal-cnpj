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

  readLineAsync = (inputFunction: (data: string[]) => string, prefix: string, insertsNumber?: number): void => {
    let data = [] as string[];
    this.rl.on('line', (line) => {
      const query = inputFunction(line.split('";"'));
      data.push(query);
      this.numberOfLines++;
      if (this.numberOfLines === (insertsNumber || 10000)) {
        saveFile(`${prefix}-${this.cycle}.sql`, data.join(''))
        this.cycle += 1;
        this.numberOfLines = 0;
        data = [];
      }
    });
    this.rl.on('close', () => {
      if (this.numberOfLines !== (insertsNumber || 10000)) {
        saveFile(`${prefix}-${this.cycle}.sql`, data.join(''))
        this.cycle += 1;
        this.numberOfLines = 0;
        data = [];
        console.log(this.cycle * (insertsNumber || 10000) + this.numberOfLines)
      }
  });
  }

  readLineWithMultiplesEntitiesAsync = (inputFunction: (data: string[]) => { type: string, data: string }[], prefix: string, insertsNumber?: number): void => {
    let data = {} as { [key: string]: string[]};
    this.rl.on('line', (line) => {
      const query = inputFunction(line.split('";"'));
      query.forEach(item => {
        if (!data[item.type]) data[item.type] = []
        data[item.type].push(item.data)
      })
      this.numberOfLines++;
      if (this.numberOfLines === (insertsNumber || 10000)) {
        Object.keys(data).forEach(item => {
          saveFile(`${prefix}-${item}-${this.cycle}.sql`, data[item].join(''))
        })
        this.cycle += 1;
        this.numberOfLines = 0;
        data = {};
      }
    });
    this.rl.on('close', () => {
      if (this.numberOfLines !== (insertsNumber || 10000)) {
        Object.keys(data).forEach(item => {
          saveFile(`${prefix}-${this.cycle}.sql`, data[item].join(''))
        })
        this.cycle += 1;
        this.numberOfLines = 0;
        data = {};
        console.log(this.cycle * (insertsNumber || 10000) + this.numberOfLines)
      }
    });
  }
}
