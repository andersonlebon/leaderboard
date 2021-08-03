import '../sass/style.scss';
import { display, data } from './data';

const form = document.querySelector('form');
const inputName = document.querySelector('.inputName');
const inputScore = document.querySelector('.inputScore');

display(data);

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const newPlayer = {
    playerName: inputName.value,
    score: inputScore.value,
  };
  data.push(newPlayer);
  display(data);
});
