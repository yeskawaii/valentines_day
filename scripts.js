document.addEventListener('DOMContentLoaded', function() {
    const heartContainer = document.querySelector('.hearts');
    const colors = ['#800080', '#FF8C00']; // Brighter purple and slightly darker orange
    const maxHearts = 20; // Maximum number of hearts on the screen
    let heartCount = 0; // Current number of hearts

    function createHeart() {
        if (heartCount < maxHearts) {
            const heart = document.createElement('div');
            heart.classList.add('heart');
            heart.style.left = Math.random() * 100 + 'vw';
            heart.style.animationDuration = Math.random() * 2 + 3 + 's';
            heart.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            heartContainer.appendChild(heart);
            heartCount++;

            heart.addEventListener('animationend', function() {
                heart.remove();
                heartCount--;
            });
        }
    }

    // Create the first heart
    createHeart();

    // Generate one heart at a consistent rate
    setInterval(createHeart, 1500); // Adjust the interval as needed

    // Add event listener to the button
    const loveButton = document.getElementById('loveButton');
    loveButton.addEventListener('click', function() {
        // Remove all existing hearts
        const hearts = document.querySelectorAll('.heart');
        hearts.forEach(heart => heart.remove());
        heartCount = 0;

        // Generate hearts up to the maximum limit
        for (let i = 0; i < maxHearts; i++) {
            createHeart();
        }
    });
});