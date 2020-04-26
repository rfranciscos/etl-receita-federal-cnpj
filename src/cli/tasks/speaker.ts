import { Speaker } from "../..";

export const description =
  'Receives a name and says hi to the person.';
export const usage = 'npm run bin say-hi <name>';
export const variables = {
  name: 'A name. Any name.'
};
export const flags = {
  '--help, -h': 'Shows this help'
};
export const example = `$ npm run bin say-hi Mr. Crowley
 
$ Hi, Mr. Crowley!`;
 
export const execute = (args: string[]) => {
  const name = args.join(' ');
  const speaker = new Speaker().sayHi(name);
  console.log(``);
  console.log(speaker);
};
