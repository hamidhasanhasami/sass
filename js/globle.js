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
          autoSlides = setInterval(nextSlides, slideIntervals); // Restart auto-sliding
      });
    });
    let autoSlides = setInterval(nextSlides, slideIntervals);
  });
  
  const cut_icon = document.querySelector('.close-icon i');
cut_icon.addEventListener('click',()=>{
  const navbaar = document.querySelector('ul.flex');
  navbaar.style.display = 'none'
})
  
  