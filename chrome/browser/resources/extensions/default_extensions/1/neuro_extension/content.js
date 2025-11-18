// Content script for Neuro Text Card
(function() {
  'use strict';

  // Create card element
  const card = document.createElement('div');
  card.className = 'neuro-card';
  card.textContent = 'NEURO';
  
  // Add card to page
  document.body.appendChild(card);

  // Toggle with Ctrl+Shift+N
  document.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.shiftKey && e.key === 'N') {
      card.style.display = card.style.display === 'none' ? 'block' : 'none';
    }
  });
})();