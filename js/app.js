const menuIcon = document.getElementById("menu-icon");
const menuList = document.getElementById("menu-content");
menuIcon.addEventListener("click", function () {
  menuList.classList.toggle("hidden");
  console.log(menuList);
});
