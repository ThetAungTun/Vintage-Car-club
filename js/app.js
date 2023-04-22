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
