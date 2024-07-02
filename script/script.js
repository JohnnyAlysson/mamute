// Navigation
const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');

  burger.addEventListener('click', () => {
      // Toggle Nav
      nav.classList.toggle('nav-active');

      // Animate Links
      navLinks.forEach((link, index) => {
          if (link.style.animation) {
              link.style.animation = '';
          } else {
              link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
          }
      });

      // Burger Animation
      burger.classList.toggle('toggle');
  });
}

navSlide();

// Carousel
const carousel = document.querySelector('.carousel-container');
const slides = document.querySelectorAll('.carousel-slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let counter = 0;
const size = slides[0].clientWidth;

carousel.style.transform = 'translateX(' + (-size * counter) + 'px)';

nextBtn.addEventListener('click', () => {
  if (counter >= slides.length - 1) return;
  carousel.style.transition = "transform 0.4s ease-in-out";
  counter++;
  carousel.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

prevBtn.addEventListener('click', () => {
  if (counter <= 0) return;
  carousel.style.transition = "transform 0.4s ease-in-out";
  counter--;
  carousel.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

carousel.addEventListener('transitionend', () => {
  if (slides[counter].id === 'lastClone') {
      carousel.style.transition = "none";
      counter = slides.length - 2;
      carousel.style.transform = 'translateX(' + (-size * counter) + 'px)';
  }
  if (slides[counter].id === 'firstClone') {
      carousel.style.transition = "none";
      counter = slides.length - counter;
      carousel.style.transform = 'translateX(' + (-size * counter) + 'px)';
  }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});