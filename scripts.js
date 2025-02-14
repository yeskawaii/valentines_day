document.addEventListener('DOMContentLoaded', function() {
    const heartContainer = document.querySelector('.hearts');
    const colors = ['#a64ca6', '#ff9933'];

    function createHeart() {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = Math.random() * 2 + 3 + 's';
        heart.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        heartContainer.appendChild(heart);

        heart.addEventListener('animationend', function() {
            heart.remove();
        });
    }

    setInterval(createHeart, 1500);
});