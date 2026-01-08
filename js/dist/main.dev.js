"use strict";

// Main JavaScript for Sculptique Landing Page
// Wait for DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // ========== Mobile Menu Toggle ==========
  var mobileMenuBtn = document.getElementById("mobile-menu-btn");
  var mobileMenu = document.getElementById("mobile-menu");

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener("click", function () {
      mobileMenu.classList.toggle("hidden");
      var icon = this.querySelector("i");
      icon.classList.toggle("fa-bars");
      icon.classList.toggle("fa-times");
    });
  } // ========== Sticky Header ==========


  var header = document.getElementById("header");
  var lastScroll = 0;
  window.addEventListener("scroll", function () {
    var currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }

    lastScroll = currentScroll;
  }); // ========== Smooth Scroll ==========

  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener("click", function (e) {
      var href = this.getAttribute("href");

      if (href !== "#") {
        e.preventDefault();
        var target = document.querySelector(href);

        if (target) {
          target.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });
        }
      }
    });
  }); // ========== Accordion Functionality ==========

  function initAccordion(accordionSelector) {
    var accordions = document.querySelectorAll(accordionSelector);
    accordions.forEach(function (accordion) {
      var header = accordion.querySelector(".accordion-header");
      var content = accordion.querySelector(".accordion-content");
      var icon = accordion.querySelector(".accordion-icon");

      if (header && content) {
        header.addEventListener("click", function () {
          var isActive = content.classList.contains("active"); // Close all other accordions (optional - remove if you want multiple open)

          document.querySelectorAll("".concat(accordionSelector, " .accordion-content")).forEach(function (c) {
            c.classList.remove("active");
          });
          document.querySelectorAll("".concat(accordionSelector, " .accordion-icon")).forEach(function (i) {
            i.classList.remove("active");
          }); // Toggle current accordion

          if (!isActive) {
            content.classList.add("active");
            if (icon) icon.classList.add("active");
          }
        });
      }
    });
  } // Initialize accordions when they're added to page


  initAccordion(".accordion-item"); // ========== Pricing Option Selection ==========

  var pricingOptions = document.querySelectorAll(".pricing-option");
  pricingOptions.forEach(function (option) {
    option.addEventListener("click", function () {
      // Remove selected class from all options
      pricingOptions.forEach(function (opt) {
        return opt.classList.remove("selected");
      }); // Add selected class to clicked option

      this.classList.add("selected");
    });
  }); // ========== Sticky CTA (Mobile) ==========

  var stickyCTA = document.querySelector(".sticky-cta");

  if (stickyCTA) {
    window.addEventListener("scroll", function () {
      if (window.pageYOffset > 800) {
        stickyCTA.classList.add("visible");
      } else {
        stickyCTA.classList.remove("visible");
      }
    });
  } // ========== Lazy Loading Images ==========


  var lazyImages = document.querySelectorAll('img[loading="lazy"]');

  if ("IntersectionObserver" in window) {
    var imageObserver = new IntersectionObserver(function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var img = entry.target;
          img.classList.add("loaded");
          observer.unobserve(img);
        }
      });
    });
    lazyImages.forEach(function (img) {
      return imageObserver.observe(img);
    });
  } else {
    // Fallback for browsers that don't support IntersectionObserver
    lazyImages.forEach(function (img) {
      return img.classList.add("loaded");
    });
  } // ========== Fade In on Scroll Animation ==========


  var fadeElements = document.querySelectorAll(".fade-in-element");

  if ("IntersectionObserver" in window && fadeElements.length > 0) {
    var fadeObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in");
        }
      });
    }, {
      threshold: 0.1
    });
    fadeElements.forEach(function (el) {
      return fadeObserver.observe(el);
    });
  } // ========== Video Modal/Popup ==========


  var videoThumbnails = document.querySelectorAll(".video-thumbnail");
  videoThumbnails.forEach(function (thumbnail) {
    thumbnail.addEventListener("click", function () {
      var videoUrl = this.dataset.videoUrl;

      if (videoUrl) {
        openVideoModal(videoUrl);
      }
    });
  });

  function openVideoModal(url) {
    // Create modal
    var modal = document.createElement("div");
    modal.className = "fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4";
    modal.innerHTML = "\n            <div class=\"relative w-full max-w-4xl\">\n                <button class=\"absolute -top-10 right-0 text-white text-3xl hover:text-gray-300\">\n                    <i class=\"fas fa-times\"></i>\n                </button>\n                <div class=\"aspect-video bg-black rounded-lg overflow-hidden\">\n                    <iframe src=\"".concat(url, "\" \n                            class=\"w-full h-full\" \n                            frameborder=\"0\" \n                            allow=\"autoplay; fullscreen\" \n                            allowfullscreen>\n                    </iframe>\n                </div>\n            </div>\n        ");
    document.body.appendChild(modal); // Close modal

    modal.addEventListener("click", function (e) {
      if (e.target === modal || e.target.closest("button")) {
        modal.remove();
      }
    });
  } // ========== Add to Cart Functionality ==========


  var addToCartBtn = document.querySelector('button[class*="ADD TO CART"]');

  if (addToCartBtn) {
    addToCartBtn.addEventListener("click", function () {
      var _this = this;

      // Add loading state
      this.disabled = true;
      this.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i> Adding...'; // Simulate API call

      setTimeout(function () {
        _this.disabled = false;
        _this.innerHTML = '<i class="fas fa-check mr-2"></i> Added to Cart!';

        _this.classList.add("bg-green-600"); // Update cart count


        var cartCount = document.querySelector("#cart-btn span");

        if (cartCount) {
          var count = parseInt(cartCount.textContent) + 1;
          cartCount.textContent = count;
        } // Reset button after 2 seconds


        setTimeout(function () {
          _this.innerHTML = "ADD TO CART";

          _this.classList.remove("bg-green-600");
        }, 2000);
      }, 1000);
    });
  } // ========== Form Validation ==========


  var forms = document.querySelectorAll("form");
  forms.forEach(function (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var inputs = form.querySelectorAll("input[required], textarea[required]");
      var isValid = true;
      inputs.forEach(function (input) {
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
  }); // ========== Scroll Progress Indicator ==========

  var progressBar = document.createElement("div");
  progressBar.className = "fixed top-0 left-0 h-1 bg-green-500 z-50 transition-all duration-300";
  progressBar.style.width = "0%";
  document.body.appendChild(progressBar);
  window.addEventListener("scroll", function () {
    var windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = window.pageYOffset / windowHeight * 100;
    progressBar.style.width = scrolled + "%";
  }); // ========== Console Log ==========

  console.log("🎨 Sculptique Landing Page - Initialized Successfully");
  console.log("📱 Responsive Design Active");
  console.log("✨ Interactive Elements Ready");
}); // ========== Utility Functions ==========
// ========== Ingredients Accordion ==========

var ingredientToggles = document.querySelectorAll(".product_lymph-ingr-thumb");
ingredientToggles.forEach(function (toggle) {
  toggle.addEventListener("click", function () {
    var _this2 = this;

    var parent = this.parentElement;
    var content = parent.querySelector(".product_lymph-ingr-content");
    var arrow = this.querySelector("div:last-child img");
    var isCurrentlyOpen = content.classList.contains("active"); // Close all other accordions first

    ingredientToggles.forEach(function (otherToggle) {
      if (otherToggle !== _this2) {
        var otherParent = otherToggle.parentElement;
        var otherContent = otherParent.querySelector(".product_lymph-ingr-content");
        var otherArrow = otherToggle.querySelector("div:last-child img");
        otherContent.classList.remove("active");
        otherArrow.style.transform = "rotate(0deg)";
      }
    }); // Toggle current accordion

    if (isCurrentlyOpen) {
      content.classList.remove("active");
      arrow.style.transform = "rotate(0deg)";
    } else {
      content.classList.add("active");
      arrow.style.transform = "rotate(90deg)";
    }
  });
}); // ========== FAQ Accordion ==========

var faqHeaders = document.querySelectorAll(".accordion-header");
faqHeaders.forEach(function (header) {
  header.addEventListener("click", function () {
    var item = this.parentElement;
    var isCurrentlyOpen = item.classList.contains("active"); // Close all other FAQ items

    document.querySelectorAll(".accordion-item").forEach(function (otherItem) {
      if (otherItem !== item) {
        otherItem.classList.remove("active");
      }
    }); // Toggle current item

    if (isCurrentlyOpen) {
      item.classList.remove("active");
    } else {
      item.classList.add("active");
    }
  });
}); // ========== Video Testimonials ==========

var videoContainers = document.querySelectorAll(".product_ugc-video");
videoContainers.forEach(function (container) {
  var video = container.querySelector("video");
  var playBtn = container.querySelector(".product_ugc-play");

  if (video && playBtn) {
    container.addEventListener("click", function () {
      if (video.paused) {
        // Pause all other videos
        document.querySelectorAll(".product_ugc-video video").forEach(function (v) {
          if (v !== video) {
            v.pause();
            v.currentTime = 0;
            v.closest(".product_ugc-video").querySelector(".product_ugc-play").style.display = "block";
          }
        }); // Play this video

        video.play();
        playBtn.style.display = "none";
      } else {
        video.pause();
        playBtn.style.display = "block";
      }
    }); // Show play button when video ends

    video.addEventListener("ended", function () {
      playBtn.style.display = "block";
      video.currentTime = 0;
    });
  }
}); // ========== Carousel Navigation ==========

var carouselContainer = document.querySelector(".product_ugc-container");
var prevBtn = document.querySelector(".product_carousel-prev");
var nextBtn = document.querySelector(".product_carousel-next");
var paginationDots = document.querySelectorAll(".product_pagination-dots .dot");
var currentIndex = 0;

if (carouselContainer && prevBtn && nextBtn) {
  var getVideosPerView = function getVideosPerView() {
    var width = window.innerWidth;
    if (width < 769) return 1;
    if (width < 1025) return 3;
    return 4;
  };

  var getMaxIndex = function getMaxIndex() {
    return Math.max(0, totalVideos - videosPerView);
  };

  var updateCarousel = function updateCarousel() {
    var containerWidth = carouselContainer.parentElement.offsetWidth;
    var totalWidth = carouselContainer.scrollWidth;
    var videoWidth = carouselContainer.children[0].offsetWidth;
    var gap = 20;
    var offset = currentIndex * (videoWidth + gap);
    carouselContainer.style.transform = "translateX(-".concat(offset, "px)"); // Update pagination dots

    paginationDots.forEach(function (dot, index) {
      if (index === currentIndex) {
        dot.classList.add("active");
      } else {
        dot.classList.remove("active");
      }
    }); // Update button states

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
  }; // Initial update


  var totalVideos = carouselContainer.children.length;
  var videosPerView = getVideosPerView();
  var maxIndex = getMaxIndex(); // Handle window resize

  window.addEventListener("resize", debounce(function () {
    videosPerView = getVideosPerView();
    maxIndex = getMaxIndex();
    currentIndex = Math.min(currentIndex, maxIndex);
    updateCarousel();
  }, 250));
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
  }); // Pagination dots click

  paginationDots.forEach(function (dot, index) {
    dot.addEventListener("click", function (e) {
      e.preventDefault();

      if (index <= maxIndex) {
        currentIndex = index;
        updateCarousel();
      }
    });
  });
  updateCarousel();
} // Debounce function for performance


function debounce(func, wait) {
  var timeout;
  return function executedFunction() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var later = function later() {
      clearTimeout(timeout);
      func.apply(void 0, args);
    };

    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
} // Throttle function for scroll events


function throttle(func, limit) {
  var inThrottle;
  return function () {
    var args = arguments;
    var context = this;

    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(function () {
        return inThrottle = false;
      }, limit);
    }
  };
} // ========== Product FAQ Accordion ==========


var productFaqBoxes = document.querySelectorAll(".product_faq-box");
productFaqBoxes.forEach(function (box) {
  var thumb = box.querySelector(".product_faq-thumb");

  if (thumb) {
    thumb.addEventListener("click", function () {
      var isActive = box.classList.contains("active"); // Close all other FAQ boxes

      productFaqBoxes.forEach(function (otherBox) {
        if (otherBox !== box) {
          otherBox.classList.remove("active");
        }
      }); // Toggle current box

      if (isActive) {
        box.classList.remove("active");
      } else {
        box.classList.add("active");
      }
    });
  }
});