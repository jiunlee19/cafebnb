fetch('cafes.json')
  .then(response => response.json())
  .then(data => {
    window.cafeData = data;
    
    // 디저트 카페 (점수가 4.5 이상인 카페)
    const dessertCafes = data.filter(cafe => parseFloat(cafe.score) >= 4.5);
    populateSlider('dessert-slider', dessertCafes);
    
    // 서귀포 카페
    const seogwipoCafes = data.filter(cafe => cafe.location === '서귀포');
    populateSlider('seogwipo-slider', seogwipoCafes);
    
    // 애월 카페
    const aewolCafes = data.filter(cafe => cafe.location === '애월');
    populateSlider('aewol-slider', aewolCafes);
    
    // 인기 카페 (점수가 4.8 이상인 카페)
    const popularCafes = data.filter(cafe => parseFloat(cafe.score) >= 4.8);
    populateSlider('popular-slider', popularCafes);
  })
  .catch(error => console.error('Error loading cafes:', error));

function populateSlider(sliderId, cafes) {
  const container = document.getElementById(sliderId);
  if (!container) return;

  cafes.forEach(cafe => {
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
}
