// Fix for GitHub links and navigation
document.addEventListener('DOMContentLoaded', function() {
  // Fix GitHub links
  const githubLinks = document.querySelectorAll('a[href*="github.com"]');
  githubLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      window.open(this.href, '_blank');
    });
  });
  
  // Fix CV download
  const cvLinks = document.querySelectorAll('a[download]');
  cvLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      // This ensures the download attribute works correctly
      const path = link.getAttribute('href');
      if (path.includes('md_alsoad_munna_CV.docx')) {
        link.setAttribute('href', path);
      }
    });
  });

  // Fix navigation links
  const navLinks = document.querySelectorAll('a[href^="#"]');
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 100,
          behavior: 'smooth'
        });
      }
    });
  });
}); 