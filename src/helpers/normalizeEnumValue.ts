export const normalizeEnumValue = (data: string): string => {
  return data
    .toUpperCase()
    .replace(/[ -]/g,"_")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
};
