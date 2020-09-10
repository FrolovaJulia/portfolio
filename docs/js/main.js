$(document).ready(function () {

    const menuToggle = document.querySelector(".toggle-menu");
    const mobMenu = document.querySelector(".header-menu");
    const overlayEl = document.querySelector("#overlay");

    menuToggle.addEventListener("click", function () {
        this.classList.toggle("active");
        mobMenu.classList.toggle("active");
        overlayEl.classList.toggle("active");
  });



})


// $(document).ready(function () {
//   let containerEl = document.querySelector("#portfolio-projects");
//   let mixer = mixitup(containerEl, {

//   classNames: {
//   block: ""
//   }
// });
// })






  














