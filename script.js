const swiper = new Swiper(".mySwiper", {
  loop: true,
  autoplay: {
    delay: 7000, // Increase the delay between slides (7 seconds)
    disableOnInteraction: false, // Continue autoplay even after user interaction
  },
  speed: 1500, // Increase the transition speed to make it smoother (1.5 seconds)
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

function toggleVideo() {
  const video = document.getElementById("promoVideo");
  const playButton = document.querySelector(".play-button");

  if (video.paused) {
    video.play();
    playButton.style.display = "none"; // Hide play button when video is playing
  } else {
    video.pause();
    playButton.style.display = "flex"; // Show play button when video is paused
  }
}

document.getElementById("promoVideo").addEventListener("click", toggleVideo);

const testimonials = [
  {
    text: `"Worldview gave my startup the clarity and strategy it needed to break into the market. Their data-driven approach has helped us double our revenue in just six months!"`,
    author: "Tom A., Founder of EcoLife Creations",
    name: "Tom",
    image: "client1.jpg",
  },
  {
    text: `"The team at Worldview is fantastic. They truly care about our success and have gone above and beyond to support us."`,
    author: "Jane D., CEO of GreenFuture",
    name: "Jane",
    image: "client2.jpg",
  },
  {
    text: `"Working with Worldview was the best decision we made this year. Their insights and strategies are unmatched."`,
    author: "Emily B., Co-founder of SolarWorks",
    name: "Emily",
    image: "client3.jpg",
  },
  {
    text: `"I can’t recommend Worldview enough. They are professional, attentive, and deliver real results."`,
    author: "Alex H., Director at BrightPath",
    name: "Alex",
    image: "client4.jpg",
  },
  {
    text: `"Thanks to Worldview, our business has seen incredible growth and stability. Their expertise is invaluable."`,
    author: "Chris K., Owner of EcoLiving Store",
    name: "Chris",
    image: "client5.jpg",
  },
];

let currentIndex = 0;

const textElement = document.querySelector(".testimonial-text");
const authorElement = document.querySelector(".testimonial-author");
const indicators = document.querySelectorAll(".indicator");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

function updateTestimonial(index) {
  const { text, author } = testimonials[index];
  textElement.textContent = text;
  authorElement.textContent = author;

  indicators.forEach((indicator, i) => {
    if (i === index) {
      indicator.classList.add("active");
    } else {
      indicator.classList.remove("active");
    }
  });
}

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
  updateTestimonial(currentIndex);
});

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % testimonials.length;
  updateTestimonial(currentIndex);
});

indicators.forEach((indicator, i) => {
  indicator.addEventListener("click", () => {
    currentIndex = i;
    updateTestimonial(currentIndex);
  });
});

// Initialize the first testimonial
updateTestimonial(currentIndex);
