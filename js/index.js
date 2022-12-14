
// Modal Animation on show
$("#introduction-modal").on("show.bs.modal", function (e) {
  $("#introduction-modal").attr(
    "class",
    "modal animate__animated animate__slideInDown"
  );
});

$("#archive-modal").on("show.bs.modal", function (e) {
  $("#archive-modal").attr(
    "class",
    "modal animate__animated animate__bounceInDown"
  );
});

// ========================== TYPE.JS ==========================
// strings: [ 'Data Analyst.', 'Web Developer.', 'Mobile Developer.', 'RPA Developer.', 'UI/UX Designer.' ]
var typed = new Typed(".type", {
  strings: ["Engineer.","Developer.","Programmer."],
  typeSpeed: 50,
  backSpeed: 50,
  loop: true,
});

// ========================== NAVIGATION BAR CUSTOM ==========================
document.getElementById("navbar").style.background = "white";

window.addEventListener("scroll", (event) => {
  let scroll = this.scrollY;
  if (scroll > 700) {
    document.getElementById("navbar").style.background = "white";
  } else {
    document.getElementById("navbar").style.background = "white";
  }

  // for icons
  if (scroll > 9300) {
    document.getElementById("side-nav-github").style.color = "white";
    document.getElementById("side-nav-linkedin").style.color = "white";
    document.getElementById("side-nav-email").style.color = "white";
    document.getElementById("side-email").style.color = "white";
    document.getElementById("pause").style.filter = "invert(100)";
    document.getElementById("play").style.filter = "invert(100)";
    document.getElementById("vertical-line").style.borderColor = "white";
  } else {
    document.getElementById("side-nav-github").style.color = "black";
    document.getElementById("side-nav-linkedin").style.color = "black";
    document.getElementById("side-nav-email").style.color = "black";
    document.getElementById("side-email").style.color = "black";
    document.getElementById("pause").style.filter = "none";
    document.getElementById("play").style.filter = "none";
    document.getElementById("vertical-line").style.borderColor = "black";
  }

  console.log(scroll);
});

// Navbar sticky hidden when user scrolls up
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
    // document.getElementById("nav-horizontal-line").style.top = "45px";
  } else {
    document.getElementById("navbar").style.top = "-100px";
    // document.getElementById("nav-horizontal-line").style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
};

// ========================== ANIMATE ON SCROLL ==========================
AOS.init({
  once: true,
});


// ========================== Hamburger Menu Animation ==========================
// Look for .hamburger
var hamburger = document.querySelector(".hamburger");
// On click
hamburger.addEventListener("click", function () {
  // Toggle class "is-active"
  hamburger.classList.toggle("is-active");
  // Do something else, like open/close menu
});

// ========================== TOOL TIP ==========================
tippy("#side-nav-email", {
  content: "Email",
  animation: "scale",
  duration: 500,
  placement: "left",
});

tippy("#side-nav-github", {
  content: "Github",
  animation: "scale",
  duration: 500,
  placement: "left",
});

tippy("#side-nav-linkedin", {
  content: "LinkedIn",
  animation: "scale",
  duration: 500,
  placement: "left",
});

tippy("#nav-home-tab", {
  content: "Nanyang Polytechnic",
  animation: "scale",
  duration: 500,
});

tippy("#about-smu", {
  content: "Bachelor of Science Information Systems Major",
  animation: "scale",
  duration: 500,
});

tippy("#about-nyp", {
  content: "Diploma in Business Informatics",
  animation: "scale",
  duration: 500,
});

// ========================== IMAGE HOVER EFFECT DISTORTION ==========================
new hoverEffect({
  parent: document.querySelector(".img-effect"),
  intensity1: 1,
  intensity2: 2,
  speedIn: 1,
  speedOut: 1,
  image1: "img/04.png",
  image2: "img/03.png",
  displacementImage: "img/4.jpg",
});

// ========================== GET CURRENT YEAR FOR COPYRIGHT ==========================
document
  .getElementById("copyright")
  .appendChild(document.createTextNode(new Date().getFullYear()));
