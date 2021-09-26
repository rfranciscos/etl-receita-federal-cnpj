export const sanitizeData = <T>(data: string, type?: 'string' | 'number') => {
    const newData = data.trim().replace(/'/g, '\'\'').replace(/^"|"$/g, '');
    if (newData === '' || newData === '"') return null;
    return type === 'number' ? +newData : newData;
};
