// script.js

const spinButton = document.getElementById('spin-button');
const roulette = document.querySelector('.roulette');
const items = document.querySelectorAll('.roulette-item');

// Функция для генерации случайного числа в диапазоне
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Функция для кручения рулетки
function spinRoulette() {
    const itemHeight = items[0].offsetHeight; // Высота одного элемента
    const totalItems = items.length; // Общее количество элементов
    const randomIndex = getRandomInt(0, totalItems - 1); // Случайный индекс
    const spinTime = getRandomInt(1, 3) * 1000; // Случайное время кручения (от 5 до 8 секунд)

    // Рассчитываем высоту на которую нужно прокрутить рулетку
    const offset = randomIndex * itemHeight;

    // Применяем анимацию вращения
    roulette.style.transition = `transform ${spinTime / 1000}s ease-out`; // Плавная остановка
    roulette.style.transform = `translateY(-${offset}px)`; // Перемещение на случайный элемент
}

// Обработчик события для кнопки
spinButton.addEventListener('click', spinRoulette);
