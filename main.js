// Pegar modal element
const modal = document.querySelector('#simpleModal');
const modalPkbVue = document.querySelector('#modalPkb-vue');
const modalPkbAngular = document.querySelector('#modalPkb-angular');
const modalPkbReact = document.querySelector('#modalPkb-react');
const closePkb = document.querySelector('.closePkb');

const pokeClass = document.querySelector('.pokeClass');
const pokeText = document.querySelector('.pokeText');
const pokeImg = document.querySelector('.poke-img');
const botãoEscolha = document.querySelector('.botãoEscolha');

let pokeClip = "";

//Ouvir click
modalPkbVue.addEventListener('click', openVue);
modalPkbAngular.addEventListener('click', openAngular);
modalPkbReact.addEventListener('click', openReact);
closePkb.addEventListener('click', closeModal);

//Função de abrir e fechar o modal

function openModal() {
  modal.style.display = 'flex';
}
function closeModal() {
  modal.style.display = 'none';

}

function openVue() {
  pokeClip =`🟩Eu escolhi Vue como meu framework inicial!\nchooseframework.vercel.app`;
  pokeClass.textContent = 'Vue';
  pokeText.textContent = 'Otaco?';
  pokeImg.src = 'https://i.ibb.co/Y7QScq6/Group-1.png';
  pokeText.textContent = 'Otaco?';
  closePkb.textContent = 'Cancela';
  click.textContent = ('Escolher');
  openModal();
}

function openAngular() {
  pokeClip =`🟥Eu escolhi Angular como meu framework inicial!\nchooseframework.vercel.app`;
  pokeClass.textContent = 'Angular';
  pokeText.textContent = 'Acho melhor não.';
  closePkb.textContent = 'Cancela';
  pokeImg.src = 'https://i.ibb.co/71yfx1f/Group-2.png';
  click.textContent = ('Escolher');
  openModal();
}

function openReact() {
  pokeClip =`🟦Eu escolhi React como meu framework inicial!\nchooseframework.vercel.app`;
  pokeClass.textContent = 'React';
  pokeText.textContent = 'Querendo uma vaga?';
  closePkb.textContent = 'Cancela';
  pokeImg.src = 'https://i.ibb.co/jWzG7RG/Group-3.png';
  click.textContent = ('Escolher');
  openModal();
}

function pokeCopy() {
  navigator.clipboard.writeText(pokeClip);
  click.textContent = ('Copiado!');
  setTimeout(()=> {
    click.textContent = ('Escolher'); 
  }, 6000);//espera 6seg
}

