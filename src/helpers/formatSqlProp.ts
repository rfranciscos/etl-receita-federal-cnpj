export const formatSqlProp = (input: string | number | null) => {
  if (!input) return 'NULL';
  if (typeof input === 'number') return input;
  return `'${input}'`;
};
