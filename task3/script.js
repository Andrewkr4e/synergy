document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll(".slider-image");
    const imageNumber = document.getElementById("imageNumber");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    let currentIndex = 0;

    const totalImages = images.length;

    function updateSlider() {
        // Сдвигаем слайдер в зависимости от текущего индекса
        const offset = -currentIndex * 100;
        document.querySelector(".slider").style.transform = `translateX(${offset}%)`;

        // Обновляем отображение номера текущего изображения
        imageNumber.textContent = `Изображение ${currentIndex + 1} из ${totalImages}`;
    }

    // Функция для перехода к следующему изображению
    nextBtn.addEventListener("click", function() {
        currentIndex = (currentIndex + 1) % totalImages; // Зацикливаем слайдер
        updateSlider();
    });

    // Функция для перехода к предыдущему изображению
    prevBtn.addEventListener("click", function() {
        currentIndex = (currentIndex - 1 + totalImages) % totalImages; // Зацикливаем слайдер
        updateSlider();
    });

    // Инициализация слайдера
    updateSlider();
});
