// import fetch from 'node-fetch';

export const serverFetchData = async (url: string) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Server HTTP error! status: ${response.status}`);
  }
  return response.json();
};