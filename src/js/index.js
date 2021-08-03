import '../sass/style.scss';

const data = [
  { playerName: 'player1', score: 18 },
  { playerName: 'player2', score: 1 },
  { playerName: 'player3', score: 18 },
  { playerName: 'player4', score: 199 },
  { playerName: 'player5', score: 18 },
];

function display(data) {
  const tableBody = document.querySelector('.table-body');
  tableBody.innerHTML = '';
  data.forEach((player) => {
    const tr = document.createElement('tr');
    tr.innerHTML = `<td>${player.playerName} : ${player.score}</td>`;
    tableBody.appendChild(tr);
  });
}

display(data);

const form = document.querySelector('form');
const inputName = document.querySelector('.inputName');
const inputScore = document.querySelector('.inputScore');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const newPlayer = {
    playerName: inputName.value,
    score: inputScore.value,
  };
  data.push(newPlayer);
  display(data);
});
