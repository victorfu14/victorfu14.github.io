document.addEventListener('DOMContentLoaded', () => {

  const themeToggle = document.getElementById('theme-toggle');
  
  // This function just adds or removes the .dark-mode class
  const applyTheme = (theme) => {
    if (theme === 'dark') {
      document.body.classList.add('dark-mode');
      if (themeToggle) {
        themeToggle.setAttribute('aria-label', 'Switch to light mode');
      }
    } else {
      document.body.classList.remove('dark-mode');
      if (themeToggle) {
        themeToggle.setAttribute('aria-label', 'Switch to dark mode');
      }
    }
  };

  // Get saved theme or check OS preference
  const userTheme = localStorage.getItem('theme');
  const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;

  // Apply initial theme on page load
  if (userTheme) {
    applyTheme(userTheme); // Use saved preference
  } else if (systemTheme) {
    applyTheme('dark'); // Use OS preference
  } else {
    applyTheme('light'); // Default
  }

  // Make sure the toggle button exists before adding a listener
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      // Check if body *already* has .dark-mode
      const isDarkMode = document.body.classList.contains('dark-mode');
      
      if (isDarkMode) {
        applyTheme('light');
        localStorage.setItem('theme', 'light'); // Save preference
      } else {
        applyTheme('dark');
        localStorage.setItem('theme', 'dark'); // Save preference
      }
    });
  }

  // Listen for OS theme changes (if user has no saved preference)
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem('theme')) {
      applyTheme(e.matches ? 'dark' : 'light');
    }
  });

   // --- AUTO-HIDE HEADER CODE ---
  const header = document.querySelector('.site-header'); // Get the header element
  let lastScrollTop = 0;
  const scrollThreshold = 10; // How many pixels to scroll before triggering

  // Make sure the header exists before adding scroll listener
  if (header) {
    window.addEventListener('scroll', function() {
      let currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

      // Check if scrolling down past the threshold
      if (currentScrollTop > lastScrollTop && currentScrollTop > header.offsetHeight) {
        // Scrolling Down - hide header only if not already hidden
        if (!header.classList.contains('header-hidden')) {
           header.classList.add('header-hidden');
        }
      } 
      // Check if scrolling up past the threshold OR scrolled to the very top
      else if (currentScrollTop < lastScrollTop - scrollThreshold || currentScrollTop <= 10) { 
        // Scrolling Up - show header only if hidden
        if (header.classList.contains('header-hidden')) {
          header.classList.remove('header-hidden');
        }
      }

      // Update last scroll position (handle negative scrolling)
      lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop; 
      
    }, false);
  }
  // --- END AUTO-HIDE HEADER CODE ---

});