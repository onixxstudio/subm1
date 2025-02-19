

function menuToggle() {
  var menu = document.querySelector("nav a");
  var fullScreen = document.querySelector(".menupagediv");

  flag = 0;

  menu.addEventListener("click", function () {
    if (flag == 0) {
      fullScreen.style.top = 0;
      flag = 1;
      menu.innerHTML = "close";
      menu.style.color = "#ffff";
      menutextAnimation();
    } else {
      fullScreen.style.top = "-100vh";
      flag = 0;
      menu.innerHTML = "Menu";
      menu.style.color = "#fff";
    }
  });
}


menuToggle()
// videoToggle()












// menuToggle()

