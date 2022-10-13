const names=document.getElementById('name');
const phone=document.getElementById('phone');
const email=document.getElementById('email');
const address=document.getElementById('addr');
const btn=document.getElementById('btn');
const display=document.getElementById('display');


btn.addEventListener('click',e=>{


e.preventDefault();

let paragraph = document.createElement('p');
paragraph.classList.add('style');
paragraph.innerText = names.value;
display.appendChild(paragraph);

paragraph.addEventListener('click',e=>{

    let ul=document.createElement('ul');

    let li1=document.createElement('li');
    
    li1.innerHTML=`<li>${addr.value}</li>  <li>${email.value}</li>  <li>${phone.value}</li> `;
    ul.appendChild(li1);

    e.target.appendChild(ul)

})


})



