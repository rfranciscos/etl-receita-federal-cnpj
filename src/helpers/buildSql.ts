import { formatSqlProp } from './formatSqlProp';

export const buildSql = <T>(operation: 'INSERT INTO' | 'UPDATE', table: string, data: T) => {
  if (typeof data !== 'object') throw Error('Data must be a object =/');
  const keys = Object.keys(data);
  const values = Object.values(data).map(value => formatSqlProp(value));
  return `${operation} PUBLIC."${table}" (${keys.join('", "')}) VALUES (${values.join(', ')});\n`;
};
