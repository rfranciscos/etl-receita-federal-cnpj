import { IDbEnum } from '../interfaces';

export const findEnumValue = (code: string, enumData: IDbEnum[]): string => {
  const data = enumData.find(item => item.descricao.includes(code))
  if (!data) return 'UNDEFINED'
  return data.valor
};
