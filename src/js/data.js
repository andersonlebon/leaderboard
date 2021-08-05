const API =
  'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/bwkANb7WQHsP46ADhdAE/scores';

export const getScores = async () => {
  const result = await fetch(API);
  return result;
};

const sendPostRequest = async (url, newData) => {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newData),
  });
  return response.json();
};

const getResponse = async (newUser) => {
  const data = await sendPostRequest(API, newUser);
  const newData = await data;
  return newData;
};

export default getResponse;
