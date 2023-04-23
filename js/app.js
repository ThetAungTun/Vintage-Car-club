/*const menuIcon = document.getElementById("menu-icon");
const menuList = document.getElementById("menu-content");
menuIcon.addEventListener("click", function () {
  menuList.classList.toggle("hidden");
  console.log(menuList);
});*/

const activePage = window.location.pathname;
console.log(activePage);

const links = document.querySelectorAll("nav a");
//console.log(links);

links.forEach((link) => {
  if (link.href.includes(activePage)) {
    console.log(link);
    link.classList.add("active");
  }
});

const imageSection = document.querySelectorAll(".new");
console.log(imageSection);

const imageReval = function (enteries, observer) {
  enteries.forEach((entry) => {
    if (!entry.isIntersecting) return;

    entry.target.classList.remove("lazy");
  });
};

const imageObserver = new IntersectionObserver(imageReval, {
  threshold: 0.3,
});

imageSection.forEach((image) => imageObserver.observe(image));

const slides = document.querySelectorAll(".slide");

const btnRight = document.querySelector(".slider__btn--right");
const btnLeft = document.querySelector(".slider__btn--left");

slides.forEach((s, i) => {
  s.style.transform = `translateX( ${100 * i}%)`;
});

let curSlide = 0;
let maxSlide = slides.length;
btnRight.addEventListener("click", function () {
  if (curSlide == maxSlide - 1) {
    curSlide = 0;
  } else {
    curSlide++;
  }
  slides.forEach((s, i) => {
    s.style.transform = `translateX( ${100 * (i - curSlide)}%)`;
  });
});

btnLeft.addEventListener("click", function () {
  if (curSlide == 0) {
    curSlide = maxSlide - 1;
  } else {
    curSlide--;
  }
  slides.forEach((s, i) => {
    s.style.transform = `translateX( ${100 * (i - curSlide)}%)`;
  });
});
