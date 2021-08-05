import '../sass/style.scss';
import sendPostRequest, { getScores } from './data';
import { display } from './pagination';

const form = document.querySelector('form');
const inputName = document.querySelector('.inputName');
const inputScore = document.querySelector('.inputScore');
const refrech = document.querySelector('.refrech');

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
  sendPostRequest(newPlayer);
});

window.onload = async () => {
  const result = await getScores();
  const { result: data } = await result.json();
  display(data);
};
