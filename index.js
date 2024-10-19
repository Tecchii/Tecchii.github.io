window.onload = function() {
    setTimeout(() => {
        const squares = document.querySelectorAll('.square');
        const initialDelay = 500;
        const accelerationFactor = 30;

        squares.forEach((square, index) => {
            setTimeout(() => {
                square.classList.add('fade-in');
            }, initialDelay + (index * accelerationFactor));
        });
    }, 500);
};
