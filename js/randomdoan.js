const guessButton = document.getElementById('guessButton');
const resetButton = document.getElementById('resetButton');
const resultBox = document.getElementById('result');

// Danh sách các số tiền lì xì đẹp
const luckyAmounts = [11111, 22222, 33333, 44444, 55555, 66666, 77777, 88888, 99999];

// Xử lý khi bấm nút "Đoán"
guessButton.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * luckyAmounts.length);
    const luckyAmount = luckyAmounts[randomIndex];
    resultBox.textContent = `${luckyAmount} VNĐ`;
});

// Xử lý khi bấm nút "Trở về Index"
resetButton.addEventListener('click', () => {
    resultBox.textContent = '...';
});