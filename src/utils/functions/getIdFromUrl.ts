export const getIdFromUrl = (url: string) => {
  const match = url.match(/\/pokemon\/(\d+)\/?$/);
  return match ? match[1] : undefined;
};
