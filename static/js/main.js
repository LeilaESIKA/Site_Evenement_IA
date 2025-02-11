/* main.js */

// Smooth scroll pour les liens d'ancrage
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Initialisation de la popup Typeform
window.addEventListener('load', function() {
  const buttons = document.querySelectorAll('.typeform-trigger');
  buttons.forEach(button => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      // Remplacez "YOUR_TYPEFORM_ID" par votre identifiant Typeform réel
  
      const typeformUrl = 'https://form.typeform.com/to/CXp06GNl';
      window.open(typeformUrl, '_blank');
    });
  });
});
