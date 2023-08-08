// const allLinks = document.querySelectorAll('article a');
// const links = document.querySelectorAll("article a");
// const [...links1] = document.getElementsByTagName("a");
// const [, ...links2] = document.links;

// const getP = document.querySelectorAll('p:not(.text)');
// const getPWithoutClass = document.querySelectorAll('p:not([class])');

// const [logo] = document.getElementsByClassName("logo");
// const getLogo = document.querySelector(".logo");

// const [getOneImg] = document.getElementsByTagName("img");
// const firstImg = document.querySelectorAll('img[alt="sea"]');
// const [getFirstImg] = document.images;

// console.log(allLinks);
// console.log(links);
// console.log(links1);
// console.log(links2);

// console.log(getP);
// console.log(getPWithoutClass);

// console.log(logo);
// console.log(getLogo);

// console.log(getOneImg);
// console.log(firstImg);
// console.log(getFirstImg);

// function showAlert(event) {
//   console.log(event);
//   event.preventDefault();
//   console.log('logo');
//   logo.removeEventListener('click',showAlert)
//   alert("Achivement unlocked!");
// }

// logo.addEventListener('click',showAlert);

// // get h2 from 2 article

// const [, h2FromArt2] = document.querySelectorAll('h2');
// const [, hFromArt2] = document.getElementsByTagName('h2')

// console.log(h2FromArt2);
// console.log(hFromArt2);

// //get p with class text

// const pText = document.getElementsByClassName('text');
// const pWithClass = document.querySelectorAll('.text');
// console.log(pText);
// console.log(pWithClass);

const imagesDB = [
  "https://media.istockphoto.com/id/1019461046/de/foto/wilde-pferde-laufen-kostenlos.jpg?s=1024x1024&w=is&k=20&c=SqE8f54gfcV0LJD4F5NN1EimrAqijZ9k1FNFzhwR-u4=",
  "https://media.istockphoto.com/id/1011664748/de/foto/l%C3%A4uft-der-wildpferde.jpg?s=1024x1024&w=is&k=20&c=4u51NCdB2tG5L674xxOr8gWfMCOVoybeM3Yw796Rh_M=",
  "https://media.istockphoto.com/id/899180498/de/foto/schwarzes-pferd-im-galopp-auf-die-herbstliche-natur-hintergrund.jpg?s=1024x1024&w=is&k=20&c=cZK7goW9BohS8chhyYc0hoaMs7oEIqYfCDQ7rSJGEGo=",
  "https://cdn.pixabay.com/photo/2018/07/28/00/15/horse-3567041_1280.jpg",
];

const slider = new Slider(imagesDB);

// const img = document.querySelector('.slide>img');
// const img = document.querySelector(alt='img');
const img = document.querySelector(".slide>img");
console.log(img);
// const image = document.querySelector(alt='image2');
// console.log(image);
const [prevBtn, nextBtn] = document.querySelectorAll(
  ".slider-container>button"
);
img.src = slider.currentSlide;
// const prev = document.querySelector('button');
// console.log(prev);
// const [,next] = document.querySelectorAll('button');
// console.log(next);
console.log(slider.currentSlide);

//function closure
function btnHandler(direction = 'next'){
  return function(){
    slider.currentIndex = slider[direction];
    img.src = slider.currentSlide;
  };
}

//function closure optimization
const btnHandler = (direction = 'next') => ()=> {
  slider.currentIndex = slider[direction];
  img.src = slider.currentSlide;
}

prevBtn.addEventListener("click", btnHandler('prev'));
// => { slider.currentIndex = slider.prev;
  // img.src = slider.currentSlide;});

nextBtn.addEventListener("click", btnHandler('next'));
// => {  slider.currentIndex = slider.next;
//   img.src = slider.currentSlide; });
