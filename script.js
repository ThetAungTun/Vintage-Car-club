let slideIndex = 0;
function showSlide() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  if (slideIndex > slides.length - 1) {
    slideIndex = 0;
  }
  slides[slideIndex].style.display = "block";
  slideIndex++;

  setTimeout(showSlide, 2000);
}
showSlide();

document.querySelector(".popup").style.display = "none";
const myTimeout = setTimeout(myGreeting, 3000);
function myGreeting() {
  document.querySelector(".popup").style.display = "block";
}
document.querySelector("#close").addEventListener("click", function () {
  document.querySelector(".popup").style.display = "none";
});
