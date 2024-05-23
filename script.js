  // body overflow hidden 
  document.querySelector('.toggle').addEventListener('click', function () {
    document.body.classList.toggle('hide');
  })
  // header menu start 
  document.querySelector('.navigation-slide')
    .addEventListener('click', function () {
      this.classList.toggle('activate');
    });
    
 // body overflow hidden 
 document.querySelector('.toggle').addEventListener('click', function () {
    document.body.classList.toggle('hide');
  });
  // toggle function 
  document.querySelector('.navigation-slide')
    .addEventListener('click', function () {
      this.classList.toggle('activate');
  });





  const labels = document.querySelectorAll(".form-control label");
  const delayUnit = 50;

  labels.forEach((label) => {
    label.innerHTML = label.innerText
      .split("")
      .map(
        (char, idx) =>
          `<span style="transition-delay: ${idx * delayUnit}ms">${char}</span>`
      )
      .join("");
  });
  

  
  document.addEventListener("DOMContentLoaded", function () {
    // Show loader when the page is loaded
    document.getElementById('loader').style.display = 'flex';
    document.body.style.overflow = 'hidden'; // Disable body scroll
  
    // Hide loader after 5 seconds
    setTimeout(function() {
      document.getElementById('loader').style.display = 'none';
      document.body.style.overflow = 'auto'; // Enable body scroll
    }, 5000);
  });
  // toggle function 
  document.querySelector('.navigation-slide')
    .addEventListener('click', function () {
      this.classList.toggle('activate');
});

  $('.content-service-slider').slick({
    dots: false,
    infinite: true,
    arrows: false,
    speed: 300,
    autoplay:true,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true
        }
      }
    ]
  });
  // accrodion script start 
  const items = document.querySelectorAll(".faq-questions");

  function toggleAccordion() {
    const itemToggle = this.getAttribute("aria-expanded");
    for (let i = 0; i < items.length; i++) {
      items[i].setAttribute("aria-expanded", "false");
    }
    if (itemToggle == "false") {
      this.setAttribute("aria-expanded", "true");
    }
  }
  items.forEach((item) => item.addEventListener("click", toggleAccordion));
