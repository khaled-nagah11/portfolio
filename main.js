/*================== toggle icon navbar =====================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};

/*================== scroll sections active nav links =====================*/
let sections = document.querySelectorAll('section')
let navLinks = document.querySelectorAll('header nav a')

window.onscroll = () =>{
  sections.forEach(sec =>
    {
      let top = window.scrollY;
      let offset = sec.offsetTop - 150;
      let height = sec.offsetHeight;
      let id = sec.getAttribute('id');

      if(top >= offset && top < offset + height){
        navLinks.forEach(links => {
          links.classList.remove('active');
          document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
        });
      };
    });
    /*================== sticky navbar =====================*/
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

/*==================remove toggle icon navbar when click on nav links =====================*/
    menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');
};

/*================== scroll reveal =====================*/
ScrollReveal({
      distance: '100px',
      duration: 2000,
      delay: 200
  });
  ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
  ScrollReveal().reveal('.home-img, .services-container, .protofolio-box, .contact form, .about-content,.about-btn, .education-row, .portfolio-container', { origin: 'bottom' });
  ScrollReveal().reveal(' .contact form,.home-content h1, .education-row, .skills-row, .testimonial-container', { origin: 'left' });
  ScrollReveal().reveal('.home-content p,', { origin: 'right' });

/*================== typed js =====================*/
const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'Ui UX Designer', 'Logo Designer'],
    typeSpeed: 100,
    backDelay: 1000,
    loop: true
});
/*================== popup window toggle js =====================*/
function togglePopup1(){
  document.getElementById("popup1").classList.toggle("active");
}
function togglePopup2(){
  document.getElementById("popup2").classList.toggle("active");
}
function togglePopup3(){
  document.getElementById("popup3").classList.toggle("active");
}


/*================== swiper tastmonial and popup screen =====================*/
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 50,
  loop: true,
  grabCursor:true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

/*================== handle scrol top icon behavior js =====================*/ 
document.addEventListener("DOMContentLoaded", function () {
  const scrollUpButton = document.getElementById("scrollUp");
  window.addEventListener("scroll", function () {
    if (window.scrollY > 400) {
      scrollUpButton.classList.add("visible");
    } else {
      scrollUpButton.classList.remove("visible");
    }
  });
});


/*==================preloader landing page style =====================*/ 
window.addEventListener('load', () => {
  // Add a delay of 3 seconds  before hiding the loader
  setTimeout(() => {
      const loader = document.querySelector('.loader-wrapper');
      const content = document.querySelector('.landing-page-content');

      loader.style.display = 'none';
      content.style.display = 'block';
  }, 3000);
});
// visible scrollbar after 3 second
setTimeout(function() {
  document.body.style.overflow = 'visible';
}, 3000);
























