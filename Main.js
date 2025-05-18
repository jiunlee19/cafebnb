fetch('cafes.json')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('cafe-list');

    data.forEach(cafe => {
      const cafeDiv = document.createElement('div');
      cafeDiv.classList.add('cafe');

      cafeDiv.innerHTML = `
        <h2>${cafe.name}</h2>
        <img src="${cafe.image}" alt="${cafe.name}">
        <p>${cafe.description}</p>
      `;

      container.appendChild(cafeDiv);
    });
  })
  .catch(error => console.error('Error loading cafes:', error));
