(()=>{"use strict";const e=[{playerName:"player1",score:18},{playerName:"player2",score:1},{playerName:"player3",score:18},{playerName:"player4",score:199},{playerName:"player5",score:18}],r=e=>{const r=document.querySelector(".table-body");r.innerHTML="",e.forEach((e=>{const a=document.createElement("tr");a.innerHTML=`<td>${e.playerName} : ${e.score}</td>`,r.appendChild(a)}))},a=document.querySelector("form"),t=document.querySelector(".inputName"),c=document.querySelector(".inputScore");r(e),a.addEventListener("submit",(a=>{a.preventDefault();const o={playerName:t.value,score:c.value};e.push(o),r(e)}))})();