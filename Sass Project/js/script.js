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

  const btn_h2 = document.querySelector('.btn-h2');
  const accordion_body = document.querySelector('.accordion-body');
  const accordion_item  = document.querySelector('.accordion-item');

  btn_h2.addEventListener('click',()=>{
    if(accordion_body.style.display == 'none'){
      accordion_body.style.display = 'block';
      btn_h2.style.color = 'white';
      btn_h2.style.backgroundColor = '#f85d23';
      accordion_item.style.backgroundColor = '#f85d23';

    }
    else{
      accordion_body.style.display = 'none';
      btn_h2.style.color = 'black';
      btn_h2.style.backgroundColor = 'white'
      accordion_item.style.backgroundColor = 'white';
      accordion_item.style.paddingBottom = '10px';
    }
  })

  const btn1_h2 = document.querySelector('.btn1-h2');
  const accordion_body1 = document.querySelector('.accordion-body1');
  const accordion_item1  = document.querySelector('.accordion-item1');

  accordion_body1.style.display = 'none';
  btn1_h2.style.color = 'black';
  btn1_h2.style.backgroundColor = 'white'
  accordion_item1.style.backgroundColor = 'white';
  accordion_item1.style.paddingBottom = '10px';
  btn1_h2.addEventListener('click',()=>{
    if(accordion_body1.style.display == 'none'){
      accordion_body1.style.display = 'block';
      btn1_h2.style.color = 'white';
      btn1_h2.style.backgroundColor = '#f85d23';
      accordion_item1.style.backgroundColor = '#f85d23';

    }
    else{
      accordion_body1.style.display = 'none';
      btn1_h2.style.color = 'black';
      btn1_h2.style.backgroundColor = 'white'
      accordion_item1.style.backgroundColor = 'white';
    }
  })
  
  const btn2_h2 = document.querySelector('.btn2-h2');
  const accordion_body2 = document.querySelector('.accordion-body2');
  const accordion_item2  = document.querySelector('.accordion-item2');


  accordion_body2.style.display = 'none';
  btn2_h2.style.color = 'black';
  btn2_h2.style.backgroundColor = 'white'
  accordion_item2.style.backgroundColor = 'white';
  accordion_item2.style.paddingBottom = '10px';

  btn2_h2.addEventListener('click',()=>{
    accordion_body2.style.display == 'none';
    if(accordion_body2.style.display == 'none'){
      accordion_body2.style.display = 'block';
      btn2_h2.style.color = 'white';
      btn2_h2.style.backgroundColor = '#f85d23';
      accordion_item2.style.backgroundColor = '#f85d23';

    }
    else{
      accordion_body2.style.display = 'none';
      btn2_h2.style.color = 'black';
      btn2_h2.style.backgroundColor = 'white'
      accordion_item2.style.backgroundColor = 'white';
      accordion_item2.style.paddingBottom = '10px';
    }
  })
  
  const btn3_h2 = document.querySelector('.btn3-h2');
  const accordion_body3 = document.querySelector('.accordion-body3');
  const accordion_item3  = document.querySelector('.accordion-item3');


  accordion_body3.style.display = 'none';
  btn3_h2.style.color = 'black';
  btn3_h2.style.backgroundColor = 'white'
  accordion_item3.style.backgroundColor = 'white';
  accordion_item3.style.paddingBottom = '10px';
  btn3_h2.addEventListener('click',()=>{
    accordion_body3.style.display == 'none';
    if(accordion_body3.style.display == 'none'){
      accordion_body3.style.display = 'block';
      btn3_h2.style.color = 'white';
      btn3_h2.style.backgroundColor = '#f85d23';
      accordion_item3.style.backgroundColor = '#f85d23';

    }
    else{
      accordion_body3.style.display = 'none';
      btn3_h2.style.color = 'black';
      btn3_h2.style.backgroundColor = 'white'
      accordion_item3.style.backgroundColor = 'white';
      accordion_item3.style.paddingBottom = '10px';
    }
  })

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


