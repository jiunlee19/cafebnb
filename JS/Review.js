// 리뷰 데이터
const reviewData = [
    { text: "뷰가 좋아요", percentage: 80 },
    { text: "커피가 맛있어요", percentage: 90 },
    { text: "인테리어가 멋져요", percentage: 70 },
    { text: "사진이 잘 나와요", percentage: 85 },
    { text: "디저트가 맛있어요", percentage: 75 },
    { text: "음료가 맛있어요", percentage: 88 },
    { text: "친절해요", percentage: 65 }
];

// 리뷰 바 생성 함수
function createReviewBars() {
    const reviewList = document.querySelector('#review ul');
    if (!reviewList) return;

    reviewList.innerHTML = ''; // 기존 내용 초기화

    // 데이터를 percentage 기준으로 내림차순 정렬
    const sortedReviews = [...reviewData].sort((a, b) => b.percentage - a.percentage);

    sortedReviews.forEach((review, index) => {
        const li = document.createElement('li');
        const div = document.createElement('div');
        div.className = `bar bar-${index + 1}`;
        div.textContent = review.text;
        div.style.width = '0%'; // 초기 너비
        li.appendChild(div);
        reviewList.appendChild(li);

        // 애니메이션 효과를 위한 setTimeout
        setTimeout(() => {
            div.style.width = `${review.percentage}%`;
        }, 100 * index); // 순차적으로 애니메이션 적용
    });
}

// 페이지 로드 시 실행
document.addEventListener('DOMContentLoaded', createReviewBars); 
