import { IDbEnum } from '../interfaces';

export const findEnumValue = (code: string, enumData: IDbEnum[], nullable?: boolean): string | null => {
  const complementDigit = code?.length === 1 ? '0' : ''
  const data = enumData.find(item => item.valor === `CODE_${complementDigit}${code}`)
  if (!data && nullable) return null
  if (!data) return 'UNDEFINED'
  return data.valor
};
