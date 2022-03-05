'use strict';



// variables for navbar toggle
const menuOpenBtn = document.querySelector('.menu-open-btn');
const menuCloseBtn = document.querySelector('.menu-close-btn');
const menu = document.querySelector('.nav');
const menuLinkBtn = document.querySelectorAll('.nav-link');

// navbar toggle function
const menuToggle = () => menu.classList.toggle('active');

// addEventListener on close and open button
menuOpenBtn.addEventListener('click', menuToggle);
menuCloseBtn.addEventListener('click', menuToggle);

// addEventListener on all navlink
for (let i = 0; i < menuLinkBtn.length; i++) {
  menuLinkBtn[i].addEventListener('click', menuToggle);
}



// variables for tab navigation
const tabButtons = document.querySelectorAll('.tab-button');
const tabContent = document.querySelectorAll('.tab-content');

// tab navigation funtionality
for (let i = 0; i < tabButtons.length; i++) {

  tabButtons[i].addEventListener('click', function () {

    for (let i = 0; i < tabContent.length; i++) {

      if (tabButtons[i].classList.contains('active')) tabButtons[i].classList.remove('active');

      if (tabContent[i].classList.contains('active')) tabContent[i].classList.remove('active');

      if (tabContent[i].classList.contains(this.classList[0])) tabContent[i].classList.add('active');

    }

    this.classList.add('active');
  });

}



// variables for portfolio carousel
const portfolioCarouselCards = document.querySelectorAll('.portfolio-carousel-card');
const portfolioCarouselInner = document.querySelector('.portfolio-carousel-inner');
const portfolioCarouselNext = document.querySelector('#portfolio-carousel-next');
const portfolioCarouselPrev = document.querySelector('#portfolio-carousel-prev');

// create initial value for transform
const totalPortfoCard = portfolioCarouselCards.length;
let portfoCount = 0;

// carousel function
const carouselNext = function (countParam) {

  if (countParam >= totalPortfoCard - 1) portfoCount = totalPortfoCard - 1;
  if (countParam <= 0) portfoCount = 0;

  portfolioCarouselInner.style.transform = `translateX(-${100 / totalPortfoCard * portfoCount}%)`;

}

// addEventListener on carousel next button
portfolioCarouselNext.addEventListener('click', function () {
  portfoCount++;
  carouselNext(portfoCount);
});

// addEventListener on carousel previous button
portfolioCarouselPrev.addEventListener('click', function () {
  portfoCount--;
  carouselNext(portfoCount);
});