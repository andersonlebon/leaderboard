export const display = (data) => {
  const tableBody = document.querySelector('.table-body');
  tableBody.innerHTML = '';
  data.forEach((player) => {
    const tr = document.createElement('tr');
    tr.innerHTML = `<td>${player.user} : ${player.score}</td>`;
    tableBody.appendChild(tr);
  });
};

export const getScores = async () => {
  const result = await fetch(
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/bwkANb7WQHsP46ADhdAE/scores',
  );
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
  const data = await sendPostRequest(
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/bwkANb7WQHsP46ADhdAE/scores',
    newUser,
  );
  const newData = await data;
  return newData;
};

export default getResponse;
