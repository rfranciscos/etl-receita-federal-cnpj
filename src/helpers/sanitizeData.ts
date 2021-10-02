export const sanitizeData = (data: string, type?: 'string' | 'number'): string | number | null => {
    const newData = data.trim().replace(/'/g, '\'\'').replace(/^"|"$/g, '');
    if (newData === '' || newData === '"') return null;
    return type === 'number' ? +newData : newData;
};
