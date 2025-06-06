class Slider {
    constructor(sliderId) {
        this.sliderId = sliderId;
        this.slider = document.getElementById(sliderId);
        this.prevBtn = document.querySelector(`.prev-btn[data-slider="${sliderId.split('-')[0]}"]`);
        this.nextBtn = document.querySelector(`.next-btn[data-slider="${sliderId.split('-')[0]}"]`);
        this.position = 0;
        this.step = 24;
        this.maxSteps = 0;
        
        if (this.slider && this.prevBtn && this.nextBtn) {
            this.init();
        }
    }

    init() {
        const items = this.slider.querySelectorAll('.cafe');
        this.maxSteps = Math.max(0, items.length - 4);
        this.updateButtonsColor();
        this.addEventListeners();
    }

    updateButtonsColor() {
        if (this.position >= 0) {
            this.prevBtn.style.backgroundColor = 'gray';
            this.prevBtn.style.color = 'white';
        } else {
            this.prevBtn.style.backgroundColor = 'white';
            this.prevBtn.style.color = 'gray';
        }

        if (this.position <= -this.step * this.maxSteps) {
            this.nextBtn.style.backgroundColor = 'gray';
            this.nextBtn.style.color = 'white';
        } else {
            this.nextBtn.style.backgroundColor = 'white';
            this.nextBtn.style.color = 'gray';
        }
    }

    addEventListeners() {
        this.slider.style.transition = 'transform 0.5s';

        this.prevBtn.addEventListener('click', () => {
            if (this.position < 0) {
                this.position += this.step;
                this.slider.style.transform = `translateX(${this.position}vw)`;
                this.updateButtonsColor();
            }
        });

        this.nextBtn.addEventListener('click', () => {
            if (this.position > -this.step * this.maxSteps) {
                this.position -= this.step;
                this.slider.style.transform = `translateX(${this.position}vw)`;
                this.updateButtonsColor();
            }
        });
    }
}

// 페이지 로드 시 모든 슬라이더 초기화
document.addEventListener('DOMContentLoaded', () => {
    // 카페 데이터가 로드된 후 슬라이더 초기화
    if (window.cafeData) {
        initializeSliders();
    } else {
        // 카페 데이터 로드가 완료될 때까지 대기
        const checkDataInterval = setInterval(() => {
            if (window.cafeData) {
                clearInterval(checkDataInterval);
                initializeSliders();
            }
        }, 100);
    }
});

function initializeSliders() {
    const sliders = ['dessert-slider', 'seogwipo-slider', 'aewol-slider', 'popular-slider'];
    sliders.forEach(sliderId => {
        new Slider(sliderId);
    });
}