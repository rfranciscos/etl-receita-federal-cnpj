import fs from 'fs';
import path  from 'path';

const ensureDirectoryExistence = (filePath: string) => {
  const dirname = path.dirname(filePath);
  if (fs.existsSync(dirname)) {
    return true;
  }
  ensureDirectoryExistence(dirname);
  fs.mkdirSync(dirname);
}

export const saveFile = (nameFile: string, data: string): void => {
  const pathFile = `./temp/${nameFile}.sql`
  ensureDirectoryExistence(pathFile)
  return fs.writeFile(pathFile, data, err => err ? console.log(err): null);
}
