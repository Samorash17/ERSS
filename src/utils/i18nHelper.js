export const getLocalizedData = (data, language) => {
  if (!data) return '';
  if (typeof data === 'string') return data;
  return data[language] || data['en'] || '';
};
