
const allLinks = document.querySelectorAll('article a');
const links = document.querySelectorAll("article a");
const [...links1] = document.getElementsByTagName("a");
const [, ...links2] = document.links;

const getP = document.querySelectorAll('p:not(.text)');
const getPWithoutClass = document.querySelectorAll('p:not([class])');


const [logo] = document.getElementsByClassName("logo");
const getLogo = document.querySelector(".logo");

const [getOneImg] = document.getElementsByTagName("img");
const firstImg = document.querySelectorAll('img[alt="sea"]');
const [getFirstImg] = document.images;

console.log(allLinks);
console.log(links);
console.log(links1);
console.log(links2);

console.log(getP);
console.log(getPWithoutClass);


console.log(logo);
console.log(getLogo);

console.log(getOneImg);
console.log(firstImg);
console.log(getFirstImg);

function showAlert(event) {
  console.log(event);
  event.preventDefault();
  console.log('logo');
  logo.removeEventListener('click',showAlert)
  alert("Achivement unlocked!");
}

logo.addEventListener('click',showAlert);
