// import '../sass/style.scss';
// import getResponse, { display, getScores } from './data';

const form = document.querySelector('form');
const inputName = document.querySelector('.inputName');
const inputScore = document.querySelector('.inputScore');
const refrech = document.querySelector('.refrech');

const display = (data) => {
  const tableBody = document.querySelector('.table-body');
  tableBody.innerHTML = '';
  data.forEach((player) => {
    const tr = document.createElement('tr');
    tr.innerHTML = `<td>${player.user} : ${player.score}</td>`;
    tableBody.appendChild(tr);
  });
};

const paginationUl = document.querySelector('.pagination');
let current = 1;
function pages(pages, paginationUl) {
  paginationUl.innerHTML = '';
  for (let i = 1; i <= pages; i += 1) {
    const paginationLi = document.createElement('li');
    paginationLi.className =
      'p-item rounded-circle text-center d-flex justify-content-center';
    paginationLi.id = i;
    if (current === paginationLi.id) {
      paginationLi.classList.add('bg-primary');
      paginationLi.classList.add('p-active');
    } else {
      paginationLi.classList.remove('active');
    }
    // eslint-disable-next-line no-loop-func
    paginationLi.addEventListener('click', () => {
      current = paginationLi.id;
    });
    paginationLi.innerHTML = `<a class='p-link' href='#'>${i}
    </a>`;
    paginationUl.appendChild(paginationLi);
  }
}

// form data
const API =
  'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/bwkANb7WQHsP46ADhdAE/scores';

const getScores = async () => {
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
// form data

refrech.addEventListener('click', async () => {
  const result = await getScores();
  const { result: data } = await result.json();
  display(data);
});

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const newPlayer = {
    user: inputName.value,
    score: inputScore.value,
  };
  getResponse(newPlayer);
});

window.onload = async () => {
  const result = await getScores();
  const { result: data } = await result.json();
  display(data);
  pages(6, paginationUl);
};
