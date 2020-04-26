export class Speaker {
  sayHi(name: string): string {
    if (!name) return 'Hi, unknown person!';
    return `Hi, ${name}!`;
  }
}
