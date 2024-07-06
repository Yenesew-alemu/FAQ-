let button1 = document.querySelector(".b1");
let button2 = document.querySelector(".b2");
let button3 = document.querySelector(".b3");
let button4 = document.querySelector(".b4");
let para1 = document.querySelector(".p1");
let para2 = document.querySelector(".p2");
let para3 = document.querySelector(".p3");
let para4 = document.querySelector(".p4");
let icon1 = document.getElementById("im1");
let icon2 = document.getElementById("im2");
let icon3 = document.getElementById("im3");
let icon4 = document.getElementById("im4");

para2.style.display ="none";
para3.style.display ="none";
para4.style.display = "none";

button1.addEventListener("click", () => {
  if (para1.style.display === "none") {
    para1.style.display = "block";
    icon1.src = "assets/images/icon-minus.svg";
  } else {
    para1.style.display = "none";
    icon1.src = "assets/images/icon-plus.svg";
  }
});

button2.addEventListener("click", () => {
  if (para2.style.display === "none") {
    para2.style.display = "block";
    icon2.src = "assets/images/icon-minus.svg";
  } else {
    para2.style.display = "none";
    icon2.src = "assets/images/icon-plus.svg";
  }
});

button3.addEventListener("click", () => {
  if (para3.style.display === "none") {
    para3.style.display = "block";
    icon3.src = "assets/images/icon-minus.svg";
  } else {
    para3.style.display = "none";
    icon3.src = "assets/images/icon-plus.svg";
  }
});

button4.addEventListener("click", () => {
  if (para4.style.display === "none") {
    para4.style.display = "block";
    icon4.src = "assets/images/icon-minus.svg";
  } else {
    para4.style.display = "none";
    icon4.src = "assets/images/icon-plus.svg";
  }
});
