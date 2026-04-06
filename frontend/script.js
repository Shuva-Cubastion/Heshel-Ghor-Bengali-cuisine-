document.addEventListener('DOMContentLoaded', () => {
  const menuGrid = document.getElementById('menu-grid');
  const modal = document.getElementById('modal');
  const closeModalBtn = document.getElementById('close-modal');
  const modalImg = document.getElementById('modal-img');
  const modalTitle = document.getElementById('modal-title');
  const modalSubtitle = document.getElementById('modal-subtitle');
  const modalDesc = document.getElementById('modal-desc');
  const modalIngredients = document.getElementById('modal-ingredients');
  const modalTips = document.getElementById('modal-tips');

  let culinaryData = [];

  // Fetch data from backend API
  const fetchItems = async () => {
    try {
      const response = await fetch('/api/items');
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      culinaryData = await response.json();
      renderItems(culinaryData);
    } catch (error) {
      console.error(error);
      menuGrid.innerHTML = `<div class="loading-state" style="color: var(--secondary)">
        Error loading menu. Please make sure the server is running.
      </div>`;
    }
  };

  // Render items into the DOM
  const renderItems = (items) => {
    menuGrid.innerHTML = '';
    items.forEach((item, index) => {
      // Create card element
      const card = document.createElement('div');
      card.className = 'card fade-up';
      card.style.animationDelay = `${index * 0.1}s`;
      card.onclick = () => openModal(item);

      card.innerHTML = `
        <div class="card-img-wrapper">
          <img src="${item.image}" alt="${item.title}" loading="lazy">
        </div>
        <div class="card-content">
          <h3 class="card-title">${item.title}</h3>
          <p class="card-subtitle">${item.subtitle}</p>
          <p class="card-desc">${item.description}</p>
          <div class="card-action">
            View Recipe
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </div>
        </div>
      `;
      menuGrid.appendChild(card);
    });
  };

  // Open modal with item details
  const openModal = (item) => {
    // Populate data
    modalImg.style.backgroundImage = `url(${item.image})`;
    modalTitle.textContent = item.title;
    modalSubtitle.textContent = item.subtitle;
    modalDesc.textContent = item.description;

    // Populate Ingredients
    modalIngredients.innerHTML = item.ingredients.map(ing => `<li>${ing}</li>`).join('');
    
    // Populate Tips
    modalTips.innerHTML = item.tips.map(tip => `<li>${tip}</li>`).join('');

    // Show modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  };

  // Close modal
  const closeModal = () => {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto'; // Restore scrolling
  };

  closeModalBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  // Handle escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });

  // Initialize
  fetchItems();
});
