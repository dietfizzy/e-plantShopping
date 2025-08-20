function addRecommendation() {
  // Get the message of the new recommendation
  let recommendation = document.getElementById("new_recommendation");
  let nameInput = document.querySelector('input[type="text"]');
  
  // If the user has left a recommendation, display a pop-up
  if (recommendation.value != null && recommendation.value.trim() != "") {
    console.log("New recommendation added");
    
    // Show alert with thank you message
    alert("Thank you for your recommendation! It has been added to my portfolio.");

    // Create a new 'recommendation' element and set it's value to the user's message
    var element = document.createElement("div");
    element.setAttribute("class","recommendation");
    
    // Include name if provided
    let recommendationText = recommendation.value;
    if (nameInput.value && nameInput.value.trim() !== "") {
      recommendationText = `"${nameInput.value.trim()}" - ${recommendationText}`;
    }
    
    element.innerHTML = "\<span\>&#8220;\</span\>" + recommendationText + "\<span\>&#8221;\</span\>";
    
    // Add this element to the end of the list of recommendations
    document.getElementById("all_recommendations").appendChild(element); 
    
    // Reset the values of the form
    recommendation.value = "";
    nameInput.value = "";
    
    // Smooth scroll to the new recommendation
    element.scrollIntoView({ behavior: 'smooth', block: 'center' });
  } else {
    // Show error message if no recommendation was entered
    alert("Please enter a recommendation before submitting.");
  }
}

function showPopup(bool) {
  if (bool) {
    document.getElementById('popup').style.visibility = 'visible';
    // Auto-hide popup after 3 seconds
    setTimeout(() => {
      showPopup(false);
    }, 3000);
  } else {
    document.getElementById('popup').style.visibility = 'hidden';
  }
}

// Add smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
  // Get all navigation links
  const navLinks = document.querySelectorAll('.topmenu');
  
  // Add smooth scrolling to each link
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      
      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
  
  // Add smooth scrolling to scroll-to-top button
  const scrollTopBtn = document.querySelector('.iconbutton a');
  if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', function(e) {
      e.preventDefault();
      document.getElementById('home').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  }
  
  // Delayed welcome alert
  setTimeout(() => {
    alert("👋 Welcome to Vickie's Portfolio!\n\nThanks for visiting! Feel free to explore my projects and leave a recommendation if you'd like.");
  }, 2000); // 2 second delay
});
