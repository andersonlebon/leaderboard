export const data = [
  { playerName: 'player1', score: 18 },
  { playerName: 'player2', score: 1 },
  { playerName: 'player3', score: 18 },
  { playerName: 'player4', score: 199 },
  { playerName: 'player5', score: 18 },
];

export const display = (data) => {
  const tableBody = document.querySelector('.table-body');
  tableBody.innerHTML = '';
  data.forEach((player) => {
    const tr = document.createElement('tr');
    tr.innerHTML = `<td>${player.playerName} : ${player.score}</td>`;
    tableBody.appendChild(tr);
  });
};
