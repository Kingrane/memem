// Переменные для плавного скролла
let currentScroll = 0;
let targetScroll = 0;
const smoothness = 0.1; // Коэффициент плавности (меньше = плавнее)

// Функция для плавного скролла фона
function smoothScrollBackground() {
    // Получаем текущий процент скролла
    targetScroll = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);

    // Плавно приближаем текущее значение к целевому
    currentScroll += (targetScroll - currentScroll) * smoothness;

    // Обновляем позицию фона
    const yPosition = currentScroll * 40;
    document.body.style.backgroundPositionY = `${yPosition}%`;

    // Продолжаем анимацию
    requestAnimationFrame(smoothScrollBackground);
}

// Запускаем анимацию
smoothScrollBackground();

// Обработка загрузки и анализа изображения
document.getElementById('upload-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    fetch('/upload', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('analysis-output').innerText = JSON.stringify(data, null, 2);
    })
    .catch(error => {
        console.error('Error:', error);
    });
});
