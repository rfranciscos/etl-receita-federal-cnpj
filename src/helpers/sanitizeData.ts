export const sanitizeData = <T>(data: string, type?: 'string' | 'number') => {
    const newData = data.trim().substring(1, data.length - 1);
    if (newData === '') return null;
    return type === 'number' ? +newData : newData;
};
