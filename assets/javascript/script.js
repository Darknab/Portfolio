const startAnimation = (entries, observer) => {
  entries.forEach(entry => {
    if (!entry.target.classList.contains("animate")) {
      entry.target.classList.toggle("animate", entry.isIntersecting);
    }
  });
};
  
const observer = new IntersectionObserver(startAnimation);
const options = { root: null, rootMargin: '0px', threshold: 1 }; 
  
const elements = document.querySelectorAll('#skills li');
  elements.forEach(el => {
    observer.observe(el, options);
  });

const cards = document.querySelectorAll('#projects .card');
cards.forEach(el => {
  observer.observe(el, options);
})