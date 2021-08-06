/* eslint-disable no-use-before-define */
import { getScores } from './data';

let current = 1;

export const display = async (data) => {
  const tableBody = document.querySelector('.table-body');
  const paginationUl = document.querySelector('.pagination');
  const paginatedItems = paginate(current, 5, data);

  tableBody.innerHTML = '';
  paginatedItems.forEach((player) => {
    const tr = document.createElement('tr');
    tr.className = 'tr-row';
    tr.innerHTML = `<td class="d-flex align-items-center"> <span class="user-icon"><i class="fa fa-user-circle"></i></span>${player.user} : ${player.score}</td>`;
    tableBody.appendChild(tr);
  });

  const paginationSize = Math.ceil(data.length / 5);
  pages(paginationSize, paginationUl);
};

export function pages(pages, paginationUl) {
  paginationUl.innerHTML = '';
  for (let i = 1; i <= pages; i += 1) {
    const paginationLi = document.createElement('li');
    paginationLi.className =
      'p-item rounded-circle text-center d-flex justify-content-center';
    paginationLi.id = i;
    // eslint-disable-next-line eqeqeq
    if (current == paginationLi.id) {
      paginationLi.classList.add('bg-primary');
      paginationLi.classList.add('p-active');
    }
    // eslint-disable-next-line no-loop-func
    paginationLi.addEventListener('click', async () => {
      current = paginationLi.id;
      const result = await getScores();
      const { result: data } = await result.json();
      display(data);
    });
    paginationLi.innerHTML = `${i}`;
    paginationUl.appendChild(paginationLi);
  }
}

function paginate(currentPage = 1, rows, array) {
  currentPage -= 1;
  const loopStart = rows * currentPage;
  const paginatedItems = array.slice(loopStart, loopStart + rows);
  return paginatedItems;
}

export default paginate;
