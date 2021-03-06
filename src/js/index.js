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
  const success = document.querySelector('.success');
  success.innerHTML = '';
});

form.addEventListener('submit', async (e) => {
  try {
    e.preventDefault();
    const newPlayer = {
      user: inputName.value,
      score: inputScore.value,
    };
    const response = await sendPostRequest(newPlayer);
    const { result } = await response;
    const success = document.querySelector('.success');

    success.innerHTML = result
      ? `<i class="fa fa-check-circle-o"></i>  
      Sent successfuly`
      : `<span class="text-danger"> <i class="fa fa-times-circle"></i> 
        Error incorrect user</span>`;
    setTimeout(() => {
      success.innerHTML = '';
    }, 2000);
    inputScore.value = '';
    inputName.value = '';
  } catch (error) {
    const success = document.querySelector('.success');
    success.innerHTML = `<span class="text-danger"> <i class="fa fa-times-circle"></i> 
        ${error}</span>`;
    setTimeout(() => {
      success.innerHTML = '';
    }, 3000);
  }
});

window.onload = async () => {
  const result = await getScores();
  const { result: data } = await result.json();
  display(data);
};
