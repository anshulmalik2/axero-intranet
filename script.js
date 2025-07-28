// Axero Intranet - JavaScript Functionality
// Cleaned and finalized for production

document.addEventListener("DOMContentLoaded", function () {
  // Initialize all components
  initializeSearch();
  initializeNavigation();
  initializeMeetings();
  initializeApplications();
  initializeNotifications();
  initializeAvatarImages();
  initializeEvents();
  initializeResources();

  // Search functionality
  function initializeSearch() {
    const searchInput = document.querySelector(".search-input");
    if (searchInput) {
      searchInput.addEventListener("input", function (e) {
        const query = e.target.value.toLowerCase();
        if (query.length > 2) {
          // Simulate search functionality
          console.log("Searching for:", query);
        }
      });
      searchInput.addEventListener("keydown", function (e) {
        if (e.key === "Enter") {
          e.preventDefault();
          performSearch(searchInput.value);
        }
      });
    }
  }

  function performSearch(query) {
    if (query.trim()) {
      console.log("Performing search for:", query);
      showSearchResults(query);
    }
  }

  function showSearchResults(query) {
    console.log("Showing results for:", query);
  }

  // Navigation functionality
  function initializeNavigation() {
    const navLinks = document.querySelectorAll(".nav-menu-link");
    navLinks.forEach((link) => {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        navLinks.forEach((l) => {
          l.classList.remove("active");
          l.removeAttribute("aria-current");
        });
        this.classList.add("active");
        this.setAttribute("aria-current", "page");
        const page = this.textContent;
        console.log("Navigating to:", page);
        this.style.transform = "scale(0.95)";
        setTimeout(() => {
          this.style.transform = "";
        }, 150);
      });
    });
  }

  // Meetings functionality
  function initializeMeetings() {
    const meetingCards = document.querySelectorAll(".meeting-card");
    meetingCards.forEach((card) => {
      card.addEventListener("click", function (e) {
        if (
          e.target.closest(".join-call-btn") ||
          e.target.closest(".meeting-options")
        ) {
          return;
        }
        const meetingTitle = this.querySelector(".meeting-title").textContent;
        console.log("Meeting card clicked:", meetingTitle);
      });
    });
    const joinCallButtons = document.querySelectorAll(".join-call-btn");
    joinCallButtons.forEach((button) => {
      button.addEventListener("click", function (e) {
        e.stopPropagation();
        const meetingTitle =
          this.closest(".meeting-card").querySelector(
            ".meeting-title"
          ).textContent;
        console.log("Join call clicked for:", meetingTitle);
        this.style.transform = "scale(0.95)";
        setTimeout(() => {
          this.style.transform = "";
        }, 150);
      });
    });
    const meetingOptions = document.querySelectorAll(".meeting-options");
    meetingOptions.forEach((option) => {
      option.addEventListener("click", function (e) {
        e.stopPropagation();
        const meetingTitle =
          this.closest(".meeting-card").querySelector(
            ".meeting-title"
          ).textContent;
        console.log("Meeting options clicked for:", meetingTitle);
        option.style.transform = "scale(0.95)";
        setTimeout(() => {
          option.style.transform = "";
        }, 150);
      });
    });
  }

  // Applications functionality
  function initializeApplications() {
    const appItems = document.querySelectorAll(".app-item");
    appItems.forEach((item) => {
      item.addEventListener("click", function () {
        const appName = this.querySelector(".app-name").textContent;
        if (this.classList.contains("add-app")) {
          console.log("Add app clicked");
          return;
        }
        console.log("My Apps app clicked:", appName);
        this.style.transform = "scale(0.95)";
        setTimeout(() => {
          this.style.transform = "";
        }, 150);
      });
      item.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          this.click();
        }
      });
      item.setAttribute("tabindex", "0");
    });
  }

  // Notifications functionality
  function initializeNotifications() {
    const notificationIcon = document.querySelector(".notifications");
    if (notificationIcon) {
      notificationIcon.addEventListener("click", function () {
        console.log("Notifications clicked");
        const badge = document.querySelector(".notification-badge");
        if (badge) {
          badge.style.transform = "scale(1.2)";
          setTimeout(() => {
            badge.style.transform = "";
          }, 200);
        }
      });
      notificationIcon.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          this.click();
        }
      });
      notificationIcon.setAttribute("tabindex", "0");
    }
  }

  // Avatar image fallback
  function initializeAvatarImages() {
    const avatarImages = document.querySelectorAll(".attendee-avatar img");
    const profileImage = document.querySelector(".profile-picture img");
    const appImages = document.querySelectorAll(".app-icon img");
    avatarImages.forEach((img) => {
      img.addEventListener("error", function () {
        this.style.display = "none";
        this.parentElement.classList.add("fallback-avatar");
      });
      img.addEventListener("load", function () {
        this.parentElement.classList.remove("fallback-avatar");
      });
    });
    if (profileImage) {
      profileImage.addEventListener("error", function () {
        this.style.display = "none";
        this.parentElement.classList.add("fallback-profile");
      });
      profileImage.addEventListener("load", function () {
        this.parentElement.classList.remove("fallback-profile");
      });
    }
    appImages.forEach((img) => {
      img.addEventListener("error", function () {
        this.style.display = "none";
        this.parentElement.classList.add("fallback-app");
      });
      img.addEventListener("load", function () {
        this.parentElement.classList.remove("fallback-app");
      });
    });
  }

  // Events functionality
  function initializeEvents() {
    const eventCards = document.querySelectorAll(".event-card");
    eventCards.forEach((card) => {
      card.addEventListener("click", function (e) {
        if (e.target.closest(".event-options")) {
          return;
        }
        const eventTitle = this.querySelector(".event-title").textContent;
        console.log("Event clicked:", eventTitle);
        this.style.transform = "scale(0.98)";
        setTimeout(() => {
          this.style.transform = "";
        }, 150);
      });
      card.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          this.click();
        }
      });
      card.setAttribute("tabindex", "0");
    });
    const eventOptions = document.querySelectorAll(".event-options");
    eventOptions.forEach((btn) => {
      btn.addEventListener("click", function (e) {
        e.stopPropagation();
        const eventTitle =
          this.closest(".event-card").querySelector(".event-title").textContent;
        console.log("Event options clicked for:", eventTitle);
      });
    });
    const viewMoreBtns = document.querySelectorAll(
      ".upcoming-events-section .view-more-btn"
    );
    viewMoreBtns.forEach((btn) => {
      btn.addEventListener("click", function () {
        console.log("View more events clicked");
      });
      btn.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          this.click();
        }
      });
      btn.setAttribute("tabindex", "0");
    });
  }

  // Useful Resources functionality
  function initializeResources() {
    const resourceItems = document.querySelectorAll(".resource-item");
    resourceItems.forEach((item) => {
      item.addEventListener("click", function () {
        const title = this.querySelector(".resource-title").textContent;
        console.log("Resource clicked:", title);
        this.style.transform = "scale(0.97)";
        setTimeout(() => {
          this.style.transform = "";
        }, 120);
      });
      item.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          this.click();
        }
      });
      item.setAttribute("tabindex", "0");
    });
    const viewMoreBtn = document.querySelector(
      ".useful-resources-section .view-more-btn"
    );
    if (viewMoreBtn) {
      viewMoreBtn.addEventListener("click", function () {
        console.log("View all resources clicked");
      });
      viewMoreBtn.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          this.click();
        }
      });
      viewMoreBtn.setAttribute("tabindex", "0");
    }
  }

  // Console log for debugging
  console.log("Axero Intranet initialized successfully");
});
