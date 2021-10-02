export const formatSqlProp = (input: string | number | null): string | number => {
  if (!input) return 'NULL';
  if (typeof input === 'number') return input;
  return `'${input}'`;
};
