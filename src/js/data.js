const API =
  'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/bwkANb7WQHsP46ADhdAE/scores';

export const getScores = async () => {
  const result = await fetch(API);
  return result;
};

const sendPostRequest = async (newData) => {
  const response = await fetch(API, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newData),
  });
  return response.json();
};

export default sendPostRequest;
