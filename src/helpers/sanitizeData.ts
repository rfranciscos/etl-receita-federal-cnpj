export const sanitizeData = (data: string, type?: 'string' | 'number' | 'date'): string | number | null => {
    const newData = data.trim().replace(/'/g, '\'\'').replace(/^"|"$/g, '');
    if (newData === '' || newData === '"') return type === 'number' ? 0 : null;
    if (type === 'date') {
        const day = data.substr(6, 2);
        const month = data.substr(4, 2);
        const year = data.substr(0, 4);
        return `${year}-${month}-${day}`;
    }
    return type === 'number' ? parseFloat(newData) : newData;
};
