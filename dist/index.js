(()=>{"use strict";const e="https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/bwkANb7WQHsP46ADhdAE/scores",t=async()=>await fetch(e);let n=1;const c=async e=>{const a=document.querySelector(".table-body"),s=document.querySelector(".pagination"),o=function(e=1,t,n){const c=t*(e-=1);return n.slice(c,c+t)}(n,5,e);a.innerHTML="",o.forEach((e=>{const t=document.createElement("tr");t.className="tr-row",t.innerHTML=`<td>${e.user} : ${e.score}</td>`,a.appendChild(t)})),function(e,a){a.innerHTML="";for(let s=1;s<=e;s+=1){const e=document.createElement("li");e.className="p-item rounded-circle text-center d-flex justify-content-center",e.id=s,n==e.id&&(e.classList.add("bg-primary"),e.classList.add("p-active")),e.addEventListener("click",(async()=>{n=e.id;const a=await t(),{result:s}=await a.json();c(s)})),e.innerHTML=`${s}`,a.appendChild(e)}}(Math.ceil(e.length/5),s)};const a=document.querySelector("form"),s=document.querySelector(".inputName"),o=document.querySelector(".inputScore");document.querySelector(".refrech").addEventListener("click",(async()=>{const e=await t(),{result:n}=await e.json();c(n)})),a.addEventListener("submit",(async t=>{t.preventDefault();(async t=>{(await fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})).json()})({user:s.value,score:o.value})})),window.onload=async()=>{const e=await t(),{result:n}=await e.json();c(n)}})();