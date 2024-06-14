 
// Function to start counting when element is in view
function startCounterWhenVisible(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const target = entry.target;
      const count = parseInt(target.getAttribute('data-number'));
      const duration = 2000; // Adjust the duration as needed
      const interval = duration / count;
      let currentCount = 0;
      const timer = setInterval(() => {
        target.querySelector('.number-count').textContent = ++currentCount;
        if (currentCount === count) {
          clearInterval(timer);
        }
      }, interval);
      observer.unobserve(target);
    }
  });
}

// Create an observer instance
const observer = new IntersectionObserver(startCounterWhenVisible, { threshold: 0.5 });

// Select all elements with class "number-counter"
const counters = document.querySelectorAll('.number-counter');

// Observe each counter element
counters.forEach(counter => {
  observer.observe(counter);
});
