import '../sass/style.scss';
import getResponse, { getScores } from './data';
import paginate, { display } from './pagination';

const form = document.querySelector('form');
const inputName = document.querySelector('.inputName');
const inputScore = document.querySelector('.inputScore');
const refrech = document.querySelector('.refrech');

refrech.addEventListener('click', async () => {
  const result = await getScores();
  const { result: data } = await result.json();
  const paginatedItems = paginate(1, 4, data);
  display(paginatedItems);
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
};
