$(document).ready(function () {
    const menuToggle = document.querySelector(".toggle-menu");
    const mobMenu = document.querySelector(".header-menu");
    const overlayEl = document.querySelector("#overlay");
    const bodyEl = document.body;

    //клик по иконке Гамбургер
    menuToggle.addEventListener("click", function () {
        this.classList.toggle("active");
        mobMenu.classList.toggle("active");
        overlayEl.classList.toggle("active");
        bodyEl.classList.toggle("noscroll");
  });

  // клик по мобильному меню
  mobMenu.addEventListener("click", function(){
    this.classList.remove("active");
    menuToggle.classList.remove("active");
    overlayEl.classList.remove("active");
    bodyEl.classList.remove("noscroll");
  });

  // закрытие моб меню при клике по оверлею
  overlayEl.addEventListener("click", function(){
    this.classList.remove("active");
    menuToggle.classList.remove("active");
    mobMenu.classList.remove("active");
    bodyEl.classList.remove("noscroll");
  });

  // закрытие моб меню при ресайзе экрана
  window.addEventListener("resize", function(){
    mobMenu.classList.remove("active");
    menuToggle.classList.remove("active");
    overlayEl.classList.remove("active");
    bodyEl.classList.remove("noscroll");
  });

  // NAV-PAGE
  $("#page-nav").onePageNav({
    currentClass: "active",
    changeHash: false,
    scrollSpeed: 750,
    scrollThreshold: 0.5,
    filter: "",
    easing: "swing",
    begin: function () {},
    end: function () {},
    scrollChange: function ($currentListItem) {}
  });

// Фильтрация
//   let containerEl = document.querySelector("#portfolio-projects");
//   let mixer = mixitup(containerEl, {

//   classNames: {
//   block: ""
//   }
// });

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

  // FORM VALIDATE
  $("#contacts-form").validate({
    rules: {
      email: {
        required: true,
        email: true
      },
      theme: {
        required: true
      },
      message: {
        required: true
      }
    },
    message: {
      email: {
        required: "Введите email",
        email: "отсутствует символ @"
      },
      theme: {
        required: "Введите тему сообщения",
      },
      message: {
        required: "Введите тему сообщения"
      }
    },
    submitHandler: function (form) {
      ajaxFormSubmit();
    }
  })

  // Функция AJAX запроса на сервер

  function ajaxFormSubmit() {
    let string = $("#contacts-form").serialize(); // Сохраняем данные введенные в строку формы
    
    // Формируем ajax запрос
    $.ajax({
      type: "POST",    // Тип запроса - POST
      url: "php/mail.php",  // Куда отправляем запрос
      data: string,  //Какие данные отправляем, в данном случае отправляем string
      
      // Функция, если все прошло успешно
      success: function (html) {
        $("#contacts-form").slideUp(800);
        $("#answer").html(html);
      }
    });

    // Чтобы по Submit больше ничего не выполнялось - делаем возврат false
    return false;
  }


})








  














