// About Project
document.addEventListener('DOMContentLoaded',()=>{

  // Slide up animation
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting) {
        entry.target.classList.add('slideUp');
      }
    });
  }, {threshold: 0.5});

  const animatingElements = document.querySelectorAll('.to-animate');
  animatingElements.forEach(elem => observer.observe(elem));

  //navbar
  const header = document.querySelector('header');

  window.addEventListener('scroll', function(){
      if(window.scrollY === 0){
          header.style.backgroundColor = '';
      } else {
          header.style.backgroundColor = 'white';
      }
  });
    const project_h3 = document.querySelector(".about-project-h3");
    let currentNumber1 = 1;
    function displayNextNumber1() {
      if (currentNumber1 <= 205) {
        project_h3.innerText = currentNumber1;
        currentNumber1++;
        setTimeout(displayNextNumber1, 32);
      }
    }
    displayNextNumber1();

    // About Customer
    let currentNumber2 = 1;
    const customer_h3 = document.querySelector(".about-customer-h3");
    function displayNextNumber2() {
      if (currentNumber2 <= 700) {
        customer_h3.innerText = currentNumber2;
        currentNumber2++;
        setTimeout(displayNextNumber2, 10);
      }
    }
    displayNextNumber2();

    // About Experience
    let currentNumber3 = 1;
    const Experience_h3 = document.querySelector(".about-experience-h3");
    function displayNextNumber3() {
      if (currentNumber3 <= 22) {
        Experience_h3.innerText = currentNumber3;
        currentNumber3++;
        setTimeout(displayNextNumber3, 385);
      }
    }
    displayNextNumber3();



    
  


  const buttons = document.querySelectorAll(".btn-h2");
  document.querySelectorAll(".accordion-body").forEach(body => {
    body.style.display = "none";
    
  });

    buttons.forEach(button => {
      button.addEventListener("click", function () {
        // Hide all accordion body paragraphs
        document.querySelectorAll(".accordion-body").forEach(body => {
          body.style.display = "none";
          
        });

        // Show the paragraph related to clicked button
        const parent = this.closest(".accordion-item");
        const body = parent.querySelector(".accordion-body");
        if (body) {
          body.style.display = "block";
        }
      });
    });



  const slider = document.querySelector('.slider');
  const images = document.querySelectorAll('.slider img');
  const dots = document.querySelectorAll('.dot');
  
  let counter = 0;
  const size = images[0].clientWidth; // Width of one image
  const slideInterval = 3000; // Time between slides in milliseconds (3 seconds)
  
  slider.style.transform = `translateX(${-size * counter}px)`;
  
  function slide() {
      slider.style.transition = "transform 0.5s ease-in-out";
      slider.style.transform = `translateX(${-size * counter}px)`;
  }
  
  function updateDots() {
      dots.forEach(dot => dot.classList.remove('active'));
      dots[counter].classList.add('active');
  }
  
  function nextSlide() {
      counter++;
      if (counter >= images.length) {
          counter = 0;
      }
      slide();
      updateDots();
  }
  
  dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
          counter = index;
          slide();
          updateDots();
          clearInterval(autoSlide); // Stop auto-sliding when a dot is clicked
          autoSlide = setInterval(nextSlide, slideInterval); // Restart auto-sliding
      });
  });
  
  let autoSlide = setInterval(nextSlide, slideInterval);

  const slider1 = document.querySelector('.testimonial-slider');
  const testimonials = document.querySelectorAll('.testimonial-slider .testimonial');
  const circles = document.querySelectorAll('.circle');

  let sum = 0;
  const size1 = testimonials[0].clientWidth;
  const slideIntervals = 3000;
  slider1.style.transform = `translateX(${-size1 * sum}px)`;
  

  function slides() {
    slider1.style.transition = "transform 0.5s ease-in-out";
    slider1.style.transform = `translateX(${-size1 * sum}px)`;
  }

  function updatecircles() {
      circles.forEach(circle => circle.classList.remove('active'));
      circles[sum].classList.add('active');
  }


  function nextSlides() {
      sum++;
      if (sum >= testimonials.length) {
          sum = 0;
      }
      slides();
      updatecircles();
  }

  circles.forEach((circle, point) => {
    circle.addEventListener('click', () => {
        sum = point;
        slides();
        updatecircles();
        clearInterval(autoSlides); // Stop auto-sliding when a dot is clicked
        autoSlides = setInterval(nextSlide, slideIntervals); // Restart auto-sliding
    });
  });
  let autoSlides = setInterval(nextSlides, slideIntervals);
});

const cut_icon = document.querySelector('.close-icon i');
cut_icon.addEventListener('click',()=>{
  const navbaar = document.querySelector('ul.flex');
  navbaar.style.display = 'none'
})



