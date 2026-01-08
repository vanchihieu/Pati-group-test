// Main JavaScript for Sculptique Landing Page

// Wait for DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // ========== Mobile Menu Toggle ==========
  const mobileMenuBtn = document.getElementById("mobile-menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener("click", function () {
      mobileMenu.classList.toggle("hidden");
      const icon = this.querySelector("i");
      icon.classList.toggle("fa-bars");
      icon.classList.toggle("fa-times");
    });
  }

  // ========== Sticky Header ==========
  const header = document.getElementById("header");
  let lastScroll = 0;

  window.addEventListener("scroll", function () {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }

    lastScroll = currentScroll;
  });

  // ========== Smooth Scroll ==========
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const href = this.getAttribute("href");
      if (href !== "#") {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }
    });
  });

  // ========== Accordion Functionality ==========
  function initAccordion(accordionSelector) {
    const accordions = document.querySelectorAll(accordionSelector);

    accordions.forEach((accordion) => {
      const header = accordion.querySelector(".accordion-header");
      const content = accordion.querySelector(".accordion-content");
      const icon = accordion.querySelector(".accordion-icon");

      if (header && content) {
        header.addEventListener("click", function () {
          const isActive = content.classList.contains("active");

          // Close all other accordions (optional - remove if you want multiple open)
          document
            .querySelectorAll(`${accordionSelector} .accordion-content`)
            .forEach((c) => {
              c.classList.remove("active");
            });
          document
            .querySelectorAll(`${accordionSelector} .accordion-icon`)
            .forEach((i) => {
              i.classList.remove("active");
            });

          // Toggle current accordion
          if (!isActive) {
            content.classList.add("active");
            if (icon) icon.classList.add("active");
          }
        });
      }
    });
  }

  // Initialize accordions when they're added to page
  initAccordion(".accordion-item");

  // ========== Pricing Option Selection ==========
  const pricingOptions = document.querySelectorAll(".pricing-option");

  pricingOptions.forEach((option) => {
    option.addEventListener("click", function () {
      // Remove selected class from all options
      pricingOptions.forEach((opt) => opt.classList.remove("selected"));
      // Add selected class to clicked option
      this.classList.add("selected");
    });
  });

  // ========== Sticky CTA (Mobile) ==========
  const stickyCTA = document.querySelector(".sticky-cta");

  if (stickyCTA) {
    window.addEventListener("scroll", function () {
      if (window.pageYOffset > 800) {
        stickyCTA.classList.add("visible");
      } else {
        stickyCTA.classList.remove("visible");
      }
    });
  }

  // ========== Lazy Loading Images ==========
  const lazyImages = document.querySelectorAll('img[loading="lazy"]');

  if ("IntersectionObserver" in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.classList.add("loaded");
          observer.unobserve(img);
        }
      });
    });

    lazyImages.forEach((img) => imageObserver.observe(img));
  } else {
    // Fallback for browsers that don't support IntersectionObserver
    lazyImages.forEach((img) => img.classList.add("loaded"));
  }

  // ========== Fade In on Scroll Animation ==========
  const fadeElements = document.querySelectorAll(".fade-in-element");

  if ("IntersectionObserver" in window && fadeElements.length > 0) {
    const fadeObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in");
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    fadeElements.forEach((el) => fadeObserver.observe(el));
  }

  // ========== Video Modal/Popup ==========
  const videoThumbnails = document.querySelectorAll(".video-thumbnail");

  videoThumbnails.forEach((thumbnail) => {
    thumbnail.addEventListener("click", function () {
      const videoUrl = this.dataset.videoUrl;
      if (videoUrl) {
        openVideoModal(videoUrl);
      }
    });
  });

  function openVideoModal(url) {
    // Create modal
    const modal = document.createElement("div");
    modal.className =
      "fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4";
    modal.innerHTML = `
            <div class="relative w-full max-w-4xl">
                <button class="absolute -top-10 right-0 text-white text-3xl hover:text-gray-300">
                    <i class="fas fa-times"></i>
                </button>
                <div class="aspect-video bg-black rounded-lg overflow-hidden">
                    <iframe src="${url}" 
                            class="w-full h-full" 
                            frameborder="0" 
                            allow="autoplay; fullscreen" 
                            allowfullscreen>
                    </iframe>
                </div>
            </div>
        `;

    document.body.appendChild(modal);

    // Close modal
    modal.addEventListener("click", function (e) {
      if (e.target === modal || e.target.closest("button")) {
        modal.remove();
      }
    });
  }

  // ========== Add to Cart Functionality ==========
  const addToCartBtn = document.querySelector('button[class*="ADD TO CART"]');

  if (addToCartBtn) {
    addToCartBtn.addEventListener("click", function () {
      // Add loading state
      this.disabled = true;
      this.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i> Adding...';

      // Simulate API call
      setTimeout(() => {
        this.disabled = false;
        this.innerHTML = '<i class="fas fa-check mr-2"></i> Added to Cart!';
        this.classList.add("bg-green-600");

        // Update cart count
        const cartCount = document.querySelector("#cart-btn span");
        if (cartCount) {
          const count = parseInt(cartCount.textContent) + 1;
          cartCount.textContent = count;
        }

        // Reset button after 2 seconds
        setTimeout(() => {
          this.innerHTML = "ADD TO CART";
          this.classList.remove("bg-green-600");
        }, 2000);
      }, 1000);
    });
  }

  // ========== Form Validation ==========
  const forms = document.querySelectorAll("form");

  forms.forEach((form) => {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const inputs = form.querySelectorAll(
        "input[required], textarea[required]"
      );
      let isValid = true;

      inputs.forEach((input) => {
        if (!input.value.trim()) {
          isValid = false;
          input.classList.add("border-red-500");
        } else {
          input.classList.remove("border-red-500");
        }
      });

      if (isValid) {
        // Submit form
        console.log("Form submitted successfully");
        form.reset();
      }
    });
  });

  // ========== Scroll Progress Indicator ==========
  const progressBar = document.createElement("div");
  progressBar.className =
    "fixed top-0 left-0 h-1 bg-green-500 z-50 transition-all duration-300";
  progressBar.style.width = "0%";
  document.body.appendChild(progressBar);

  window.addEventListener("scroll", function () {
    const windowHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolled = (window.pageYOffset / windowHeight) * 100;
    progressBar.style.width = scrolled + "%";
  });

  // ========== Console Log ==========
  console.log("🎨 Sculptique Landing Page - Initialized Successfully");
  console.log("📱 Responsive Design Active");
  console.log("✨ Interactive Elements Ready");
});

// ========== Utility Functions ==========

// ========== Ingredients Accordion ==========
const ingredientToggles = document.querySelectorAll(
  ".product_lymph-ingr-thumb"
);

ingredientToggles.forEach((toggle) => {
  toggle.addEventListener("click", function () {
    const parent = this.parentElement;
    const content = parent.querySelector(".product_lymph-ingr-content");
    const arrow = this.querySelector("div:last-child img");
    const isCurrentlyOpen = content.classList.contains("active");

    // Close all other accordions first
    ingredientToggles.forEach((otherToggle) => {
      if (otherToggle !== this) {
        const otherParent = otherToggle.parentElement;
        const otherContent = otherParent.querySelector(
          ".product_lymph-ingr-content"
        );
        const otherArrow = otherToggle.querySelector("div:last-child img");

        otherContent.classList.remove("active");
        otherArrow.style.transform = "rotate(0deg)";
      }
    });

    // Toggle current accordion
    if (isCurrentlyOpen) {
      content.classList.remove("active");
      arrow.style.transform = "rotate(0deg)";
    } else {
      content.classList.add("active");
      arrow.style.transform = "rotate(90deg)";
    }
  });
});

// ========== FAQ Accordion ==========
const faqHeaders = document.querySelectorAll(".accordion-header");

faqHeaders.forEach((header) => {
  header.addEventListener("click", function () {
    const item = this.parentElement;
    const isCurrentlyOpen = item.classList.contains("active");

    // Close all other FAQ items
    document.querySelectorAll(".accordion-item").forEach((otherItem) => {
      if (otherItem !== item) {
        otherItem.classList.remove("active");
      }
    });

    // Toggle current item
    if (isCurrentlyOpen) {
      item.classList.remove("active");
    } else {
      item.classList.add("active");
    }
  });
});

// ========== Video Testimonials ==========
const videoContainers = document.querySelectorAll(".product_ugc-video");

videoContainers.forEach((container) => {
  const video = container.querySelector("video");
  const playBtn = container.querySelector(".product_ugc-play");

  if (video && playBtn) {
    container.addEventListener("click", function () {
      if (video.paused) {
        // Pause all other videos
        document.querySelectorAll(".product_ugc-video video").forEach((v) => {
          if (v !== video) {
            v.pause();
            v.currentTime = 0;
            v
              .closest(".product_ugc-video")
              .querySelector(".product_ugc-play").style.display = "block";
          }
        });

        // Play this video
        video.play();
        playBtn.style.display = "none";
      } else {
        video.pause();
        playBtn.style.display = "block";
      }
    });

    // Show play button when video ends
    video.addEventListener("ended", function () {
      playBtn.style.display = "block";
      video.currentTime = 0;
    });
  }
});

// ========== Carousel Navigation ==========
const carouselContainer = document.querySelector(".product_ugc-container");
const prevBtn = document.querySelector(".product_carousel-prev");
const nextBtn = document.querySelector(".product_carousel-next");
const paginationDots = document.querySelectorAll(
  ".product_pagination-dots .dot"
);
let currentIndex = 0;

if (carouselContainer && prevBtn && nextBtn) {
  const totalVideos = carouselContainer.children.length;
  let videosPerView = getVideosPerView();

  function getVideosPerView() {
    const width = window.innerWidth;
    if (width < 769) return 1;
    if (width < 1025) return 3;
    return 4;
  }

  function getMaxIndex() {
    return Math.max(0, totalVideos - videosPerView);
  }

  let maxIndex = getMaxIndex();

  // Handle window resize
  window.addEventListener(
    "resize",
    debounce(() => {
      videosPerView = getVideosPerView();
      maxIndex = getMaxIndex();
      currentIndex = Math.min(currentIndex, maxIndex);
      updateCarousel();
    }, 250)
  );

  prevBtn.addEventListener("click", function (e) {
    e.preventDefault();
    if (currentIndex > 0) {
      currentIndex--;
      updateCarousel();
    }
  });

  nextBtn.addEventListener("click", function (e) {
    e.preventDefault();
    if (currentIndex < maxIndex) {
      currentIndex++;
      updateCarousel();
    }
  });

  // Pagination dots click
  paginationDots.forEach((dot, index) => {
    dot.addEventListener("click", function (e) {
      e.preventDefault();
      if (index <= maxIndex) {
        currentIndex = index;
        updateCarousel();
      }
    });
  });

  function updateCarousel() {
    const containerWidth = carouselContainer.parentElement.offsetWidth;
    const totalWidth = carouselContainer.scrollWidth;
    const videoWidth = carouselContainer.children[0].offsetWidth;
    const gap = 20;
    const offset = currentIndex * (videoWidth + gap);

    carouselContainer.style.transform = `translateX(-${offset}px)`;

    // Update pagination dots
    paginationDots.forEach((dot, index) => {
      if (index === currentIndex) {
        dot.classList.add("active");
      } else {
        dot.classList.remove("active");
      }
    });

    // Update button states
    if (currentIndex === 0) {
      prevBtn.style.opacity = "0.4";
      prevBtn.style.cursor = "not-allowed";
    } else {
      prevBtn.style.opacity = "1";
      prevBtn.style.cursor = "pointer";
    }

    if (currentIndex >= maxIndex) {
      nextBtn.style.opacity = "0.4";
      nextBtn.style.cursor = "not-allowed";
    } else {
      nextBtn.style.opacity = "1";
      nextBtn.style.cursor = "pointer";
    }
  }

  // Initial update
  updateCarousel();
}

// Debounce function for performance
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Throttle function for scroll events
function throttle(func, limit) {
  let inThrottle;
  return function () {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}
