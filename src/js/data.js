export const display = (data) => {
  const tableBody = document.querySelector('.table-body');
  tableBody.innerHTML = '';
  data.forEach((player) => {
    const tr = document.createElement('tr');
    tr.innerHTML = `<td>${player.playerName} : ${player.score}</td>`;
    tableBody.appendChild(tr);
  });
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
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/zaEndvNXcETRUSYvVVNr/scores',
    newUser
  );
  const newData = await data;
  return newData;
};

export default getResponse;
