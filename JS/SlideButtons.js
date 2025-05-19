const imageSlide = document.querySelector('.cafe-list');
        const prevBtn = document.querySelector('#prev-btn');
        const nextBtn = document.querySelector('#next-btn');
    
        let position = 0;              // 현재 위치
        const step = 24;              // 이동 단위 rem
        let maxSteps = 0;
        function initSlider(cafeData) {
            maxSteps = cafeData.length - 4;// 최대 이동 횟수

            // 초기 상태 설정
            updateButtonsColor();
          }          
          
    
        function updateButtonsColor() {
            // prev 버튼 색상 설정
            if (position >= 0) {
                prevBtn.style.backgroundColor = 'gray';
                prevBtn.style.color = 'white';
            } else {
                prevBtn.style.backgroundColor = 'white';
                prevBtn.style.color = 'gray';
            }
    
            // next 버튼 색상 설정
            if (position <= -step * maxSteps) {
                nextBtn.style.backgroundColor = 'gray';
                nextBtn.style.color = 'white';
            } else {
                nextBtn.style.backgroundColor = 'white';
                nextBtn.style.color = 'gray';
            }
        }
    
        imageSlide.style.transition = 'transform 0.5s';

        prevBtn.addEventListener('click', function () {
            if (position < 0) {
                position += step; // 오른쪽으로 이동
                imageSlide.style.transform = `translateX(${position}vw)`;
            }
            updateButtonsColor();
        });
    
        nextBtn.addEventListener('click', function () {
            if (position > -step * maxSteps) {
                position -= step; // 왼쪽으로 이동
                imageSlide.style.transform = `translateX(${position}vw)`;
            }
            updateButtonsColor();
        });