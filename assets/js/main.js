

const links = document.querySelectorAll("article a");
const [...links1] = document.getElementsByTagName("a");
const [, ...links2] = document.links;

const getP = document.getElementsByTagName("p");

const [logo] = document.getElementsByClassName("logo");
const getLogo = document.querySelector(".logo");

const [getOneImg] = document.getElementsByTagName("img");
const firstImg = document.querySelectorAll('img[alt="sea"]');
const [getFirstImg] = document.images;

console.log(links);
console.log(links1);
console.log(links2);

console.log(getP);

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
