export const sanitizeData = (data: string, type?: 'string' | 'number'): string | number | null => {
    const newData = data.trim().replace(/'/g, '\'\'').replace(/^"|"$/g, '');
    if (newData === '' || newData === '"') return type === 'number' ? 0 : null;
    return type === 'number' ? parseFloat(newData) : newData;
};
