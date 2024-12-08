
//animate on scrool js

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      console.log(entry)
      if (entry.isIntersecting) {
          entry.target.classList.add('show');
      } else {
          entry.target.classList.remove('show');
      }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));



const observing = new IntersectionObserver ((entries) => {
    entries.forEach((entry) => {
      console.log(entry)
      if (entry.isIntersecting) {
        entry.target.classList.add('show1');
      } else {
        entry.target.classList.remove('show1');
      }
    });
});

const hiddenElement = document.querySelectorAll('.hidden1');
hiddenElement.forEach((el) => observing.observe(el));
 


// Get references to HTML elements
const sliderContainer = document.querySelector(".slider-container");
const slidesLeft = document.querySelector(".left-slide");
const slidesRight = document.querySelector(".right-slide");
const upButton = document.querySelector(".up-button");
const downButton = document.querySelector(".down-button");

// Calculate the total number of slides
const slidesLength = slidesRight.querySelectorAll("div").length;

// Initialize the active slide index
let activeSlidesIndex = 0;

// Set initial position for left slides
slidesLeft.style.top = `-${(slidesLength - 1) * 70}vh`;

// Add click event listeners to up and down buttons
upButton.addEventListener("click", () => changeSlide("up"));
downButton.addEventListener("click", () => changeSlide("down"));

// Function to change the active slide
const changeSlide = (direction) => {
  const sliderHeight = sliderContainer.clientHeight;
  if (direction === "up") {
    activeSlidesIndex++;
    if (activeSlidesIndex > slidesLength - 1) {
      activeSlidesIndex = 0;
    }
  } else if (direction === "down") {
    activeSlidesIndex--;
    if (activeSlidesIndex < 0) {
      activeSlidesIndex = slidesLength - 1;
    }
  }

  // Update the transform property to change the slide position
  slidesRight.style.transform = `translateY(-${
    activeSlidesIndex * sliderHeight
  }px)`;
  slidesLeft.style.transform = `translateY(${
    activeSlidesIndex * sliderHeight
  }px)`;
};


$(document).ready(function(){
  // Expand dropdown on hover
  $('.navbar-nav .dropdown').hover(function() {
    $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
  }, function() {
    $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
  });
});
$('.navbar-toggler').click(function() { 
  $('.navbar-collapse').toggleClass('show');
});




