$(document).ready(function () {

    const menuToggle = document.querySelector(".toggle-menu");
    const mobMenu = document.querySelector(".header-menu");
    const overlayEl = document.querySelector("#overlay");

    //клик по иконке Гамбургер
    menuToggle.addEventListener("click", function () {
        this.classList.toggle("active");
        mobMenu.classList.toggle("active");
        overlayEl.classList.toggle("active");
  });

  

  let containerEl = document.querySelector("#portfolio-projects");
  let mixer = mixitup(containerEl, {

  classNames: {
  block: ""
  }
});


  //FORM PLACEHOLDER
  const formInputs = document.querySelectorAll(".form-field");
  // console.log(formInputs);
  for(let item of formInputs) {
    const thisPlaceholder = item.nextElementSibling;
    // console.log(thisPlaceholder);

    item.addEventListener("focus", function(){
      thisPlaceholder.classList.add("active");
  });

  item.addEventListener("blur",function() {
    if(item.value == "") {
      thisPlaceholder.classList.remove("active");
    }
  });

  }

})








  














