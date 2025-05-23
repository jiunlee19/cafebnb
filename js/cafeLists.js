fetch('cafes.json')
  .then(response => response.json())
  .then(data => {
    window.cafeData = data;
    initSlider(data)
    
    const container = document.querySelectorAll('.cafe-list');

    container.forEach(container => {
      data.forEach(cafe => {
        const cafeDiv = document.createElement('a');
        cafeDiv.classList.add('cafe');
        cafeDiv.href = 'detail.html';
        cafeDiv.innerHTML = `
          <img src="${cafe.image}" alt="${cafe.name}">
          <h2>${cafe.name}</h2> 
          <p>${cafe.location}</p>
          <p>${cafe.score}</p>
        `;
  
        container.appendChild(cafeDiv);
      });
    })
    
  })
  .catch(error => console.error('Error loading cafes:', error));
