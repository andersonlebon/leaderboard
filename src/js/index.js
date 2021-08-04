import '../sass/style.scss';
import getResponse, { display } from './data';

const form = document.querySelector('form');
const inputName = document.querySelector('.inputName');
const inputScore = document.querySelector('.inputScore');
const refrech = document.querySelector('.refrech');

refrech.addEventListener('click', async () => {
  const result = await getScores();
  const { result: data } = await result.json();
  display(data);
});
async function getScores() {
  const result = await fetch(
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/zaEndvNXcETRUSYvVVNr/scores'
  );
  return result;
}

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const newPlayer = {
    user: inputName.value,
    score: inputScore.value,
  };
  const message = await getResponse(newPlayer);
  console.log(message);
});
