export const display = (data) => {
  const tableBody = document.querySelector('.table-body');
  tableBody.innerHTML = '';
  data.forEach((player) => {
    const tr = document.createElement('tr');
    tr.innerHTML = `<td>${player.playerName} : ${player.score}</td>`;
    tableBody.appendChild(tr);
  });
};

export default display();
