

document.addEventListener('DOMContentLoaded', function() {

    const slideContent = [
      { image: "/assets/img/slide1.jpg" },
      { image: "/assets/img/slide2.jpg" },
      { image: "/assets/img/slide3.jpg" },
      // Add more slides as needed
    ];
  
    const slider = document.getElementById('slider');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    let currentSlide = 0;
    let intervalId;
  
    // Check if the slider element exists
    if (!slider || !prevButton || !nextButton) {
      console.error("Slider elements not found");
      return;
    }
  
    slideContent.forEach(slideData => {
      const slide = document.createElement('div');
      slide.className = 'slide';
  
      const imageContainer = document.createElement('div');
      imageContainer.className = 'image-container';
  
      const img = document.createElement('img');
      img.src = slideData.image;
  
      imageContainer.appendChild(img);
      slide.appendChild(imageContainer);
  
      if (slider) {
        slider.appendChild(slide);
      } else {
        console.error("Slider element not found during slide creation");
      }
    });
  
    function updateSlider() {
      if (slider) {
        slider.style.transform = `translateX(${-currentSlide * 100}%)`;
      } else {
        console.error("Slider element not found during update");
      }
    }
  
    function nextSlide() {
      currentSlide = (currentSlide + 1) % slideContent.length;
      updateSlider();
    }
  
    function prevSlide() {
      currentSlide = (currentSlide - 1 + slideContent.length) % slideContent.length;
      updateSlider();
    }
  
    function startInterval() {
      intervalId = setInterval(nextSlide, 5000);
    }
  
    function stopInterval() {
      clearInterval(intervalId);
    }
  
    prevButton.addEventListener('click', function() {
      prevSlide();
      stopInterval();
      startInterval();
    });
  
    nextButton.addEventListener('click', function() {
      nextSlide();
      stopInterval();
      startInterval();
    });
  
    // Set initial interval
    startInterval();
  
    // Clear the interval when the user hovers over the slider
    slider.addEventListener('mouseover', stopInterval);
  
    // Restart the interval when the user leaves the slider
    slider.addEventListener('mouseout', startInterval);
  
    updateSlider();
  });





  