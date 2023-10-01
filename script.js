// Select elements by class or ID
const readMoreLink = document.querySelector(".read-more-link"); // Read More link
const blogText = document.querySelector(".blog-text"); // Blog text container
const categoryLinks = document.querySelectorAll(".blog-categories a"); // Blog category links
const blogPosts = document.querySelectorAll(".blog-text"); // Blog post elements
const blogTextElements = document.querySelectorAll(".blog-text"); // All blog text elements
const searchInput = document.getElementById("search-input"); // Search input field
const searchButton = document.getElementById("search-button"); // Search button

// Toggle "Read More" and "Read Less" functionality
if (readMoreLink && blogText) {
  readMoreLink.addEventListener("click", () => {
    blogText.classList.toggle("expanded");
    if (blogText.classList.contains("expanded")) {
      readMoreLink.textContent = "Read Less";
    } else {
      readMoreLink.textContent = "Read More";
    }
  });
}

// Handle form submission for comments
const commentForm = document.querySelector(".comments form");

if (commentForm) {
  commentForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const website = document.getElementById("website").value;
    const message = document.getElementById("message").value;

    // Create a JavaScript object to store form data
    const formData = {
      name,
      email,
      website,
      message,
    };

    // Display an alert with the form data
    alert(
      "Form submitted with the following data:\n" +
        JSON.stringify(formData, null, 2)
    );
  });
}

// Filter blog posts based on selected category
categoryLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const selectedCategory = e.target.getAttribute("data-category");

    // Hide all blog posts
    blogPosts.forEach((post) => {
      post.style.display = "none";
    });

    // Show blog posts of the selected category
    if (selectedCategory === "all") {
      blogPosts.forEach((post) => {
        post.style.display = "block";
      });
    } else {
      const filteredPosts = document.querySelectorAll(
        `[data-category="${selectedCategory}"]`
      );
      filteredPosts.forEach((post) => {
        post.style.display = "block";
      });
    }
  });
});

// Handle search button click
searchButton.addEventListener("click", () => {
  const searchTerm = searchInput.value.toLowerCase();

  // Loop through all blog text elements and check if they contain the search term
  blogTextElements.forEach((blogText) => {
    const blogContent = blogText.textContent.toLowerCase();
    if (blogContent.includes(searchTerm)) {
      // Show the blog post that matches the search term
      blogText.style.display = "block";
    } else {
      // Hide blog posts that don't match the search term
      blogText.style.display = "none";
    }
  });
});

// Handle "Reply" button click
const replyButtons = document.querySelectorAll(".reply-button");

replyButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Find the parent comment element
    const comment = button.closest(".comments");

    // Toggle the visibility of the reply form
    const replyForm = comment.querySelector(".reply-form");
    replyForm.classList.toggle("show-reply-form");

    // Scroll to the reply form if it's visible
    if (replyForm.classList.contains("show-reply-form")) {
      replyForm.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Handle reply form submission
const commentForms = document.querySelectorAll(".comments form");

commentForms.forEach((form) => {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = form.querySelector(".reply-name").value;
    const email = form.querySelector(".reply-email").value;
    const website = form.querySelector(".reply-website").value;
    const message = form.querySelector(".reply-message").value;

    // Create a JavaScript object to store reply form data
    const formData = {
      name,
      email,
      website,
      message,
    };

    // Display an alert with the reply form data
    alert(
      "Reply submitted with the following data:\n" +
        JSON.stringify(formData, null, 2)
    );
  });
});

// Smooth scrolling to sections when navigation links are clicked
const homeLink = document.getElementById("home-link");
const featuresLink = document.getElementById("features-link");
const blogLink = document.getElementById("blog-link");
const portfolioLink = document.getElementById("portfolio-link");

const homeSection = document.getElementById("home-section");
const featuresSection = document.getElementById("features-section");
const blogSection = document.getElementById("blog-section");
const portfolioSection = document.getElementById("portfolio-section");

homeLink.addEventListener("click", () => {
  scrollToSection(homeSection);
});

featuresLink.addEventListener("click", () => {
  scrollToSection(featuresSection);
});

blogLink.addEventListener("click", () => {
  scrollToSection(blogSection);
});

portfolioLink.addEventListener("click", () => {
  scrollToSection(portfolioSection);
});

// Function to scroll to a section smoothly
function scrollToSection(section) {
  window.scrollTo({
    top: section.offsetTop,
    behavior: "smooth",
  });
}
