// ========================================================================
// Component: Modal
// ========================================================================
const btn = document.querySelectorAll("[data-target]");
const close_modal = document.querySelectorAll(".vi-close-modal");

// Create overlay dynamically
// ========================================================================
const overlay = document.createElement("div");
overlay.id = "vi-overlay";
document.body.appendChild(overlay);

// add active to modal and overlay
btn.forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelector(btn.dataset.target).classList.add("active");
    overlay.classList.add("active");
  });
});

// remove active to modal and overlay
close_modal.forEach((btn) => {
  btn.addEventListener("click", () => {
    const modal = btn.closest(".vi-modal");
    modal.classList.remove("active");
    overlay.classList.remove("active");
  });
});

window.onclick = (event) => {
  if (event.target === overlay) {
    const modal = document.querySelectorAll(".vi-modal");
    modal.forEach((modal) => modal.classList.remove("active"));
    overlay.classList.remove("active");
  }
};


// ========================================================================
// Component: Sticky
// ========================================================================
window.addEventListener('DOMContentLoaded', (event) => {
  let lastScrollTop = 0;
  const viTop = document.getElementById('viStickyTop');

  if (viTop) {
    window.addEventListener('scroll', function() {
      const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

      if (currentScroll > lastScrollTop) {
        // Scrolling down
        viTop.classList.add('hidden');
        viTop.classList.remove('show');
      } else {
        // Scrolling up
        viTop.classList.remove('hidden');
        viTop.classList.add('show');
      }
      lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
    });
  }
});


// ========================================================================
// Component: Back To Top
// ========================================================================
window.addEventListener('DOMContentLoaded', (event) => {
  // Get the button
  const viBackToTop = document.getElementById("viBackToTop");

  // Check if the button exists before adding event listeners
  if (viBackToTop) {
    // When the user scrolls down 20px from the top of the document, show the button
    window.addEventListener('scroll', function() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        viBackToTop.classList.add("show");
      } else {
        viBackToTop.classList.remove("show");
      }
    });

    // When the user clicks on the button, scroll to the top of the document
    viBackToTop.addEventListener("click", function() {
      scrollToTop();
    });
  }

  // Function to scroll to the top of the document
  function scrollToTop() {
    var scrollTopValue = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTopValue > 0) {
      window.requestAnimationFrame(scrollToTop);
      window.scrollTo(0, scrollTopValue - scrollTopValue / 8);
    }
  }
});


// ========================================================================
// Component: Notification
// ========================================================================
// Create notification container element
var notificationContainer = document.createElement("div");
notificationContainer.id = "vi-notificationContainer";
notificationContainer.className = "vi-notification-container";

// Append notification container to the document body
document.body.appendChild(notificationContainer);


// Function to show notification
function viNotification(message) {
  // Create notification element
  var notification = document.createElement("div");
  notification.className = "vi-notification";
  
  // Add message
  notification.innerHTML = message;
  
  // Add close button
  var closeButton = document.createElement("span");
  closeButton.innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">' +
  '<path d="M5.7 19.7C5.41667 19.9833 5.1 20.0667 4.75 19.95C4.4 19.8333 4.15833 19.6083 4.025 19.275C3.90833 18.925 4 18.6 4.3 18.3L18.3 4.3C18.5833 4.01667 18.9 3.93333 19.25 4.05C19.6 4.16667 19.8333 4.4 19.95 4.75C20.0833 5.08333 20 5.4 19.7 5.7L5.7 19.7ZM4.3 5.7C4 5.4 3.90833 5.08333 4.025 4.75C4.14167 4.4 4.375 4.16667 4.725 4.05C5.09167 3.93333 5.41667 4.01667 5.7 4.3L19.7 18.3C19.9833 18.5833 20.0667 18.9 19.95 19.25C19.8333 19.6 19.6 19.8417 19.25 19.975C18.9167 20.0917 18.6 20 18.3 19.7L4.3 5.7Z"/>' +
  '</svg>'; // Close icon (X)
  closeButton.className = "vi-close-button";
  closeButton.onclick = function() {
    notification.remove(); // Remove notification when close button is clicked
  };
  notification.appendChild(closeButton);
  
  // Append notification to container
  var container = document.getElementById("vi-notificationContainer");
  container.appendChild(notification);
  
  // Automatically remove notification after timeout
  setTimeout(function() {
    notification.remove();
  }, 8000); // Timeout in milliseconds (e.g., 10000 for 10 seconds)
}