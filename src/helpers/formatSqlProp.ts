export const formatSqlProp = (input: string | number | null) => {
  if (!input) return null;
  if (typeof input === 'number') return input;
  return `'${input}'`;
};
