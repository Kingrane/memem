// script.js

// Получаем элементы
const spinButton = document.getElementById('spin-button');
const starsImage = document.getElementById('stars-image');

// Массив с изображениями звезд (замени на свои пути к картинкам)
const starImages = [
    'tmp4mef58_f.png', // одна звезда
    'tmp4mef58_f.png', // две звезды
    'tmp4mef58_f.png', // три звезды
    'tmp4mef58_f.png', // четыре звезды
    'tmp4mef58_f.png'  // пять звезд
];

// Функция для кручения рулетки
function spinRoulette() {
    // Добавляем класс анимации
    starsImage.style.animation = 'spin 5s ease-in-out';

    // Выбираем случайное изображение звезды
    const randomIndex = Math.floor(Math.random() * starImages.length);

    // Задержка на время анимации, чтобы сменить картинку после окончания
    setTimeout(() => {
        // Обновляем изображение после завершения анимации
        starsImage.src = starImages[randomIndex];

        // Убираем анимацию после окончания
        starsImage.style.animation = '';
    }, 1000); // 2 секунды — время анимации
}

// Добавляем обработчик события на кнопку
spinButton.addEventListener('click', spinRoulette);
