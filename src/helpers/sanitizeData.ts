export const sanitizeData = (data: string): string | null => {
    const newData = data.trim();
    return newData !== '' ? newData : null;
};
