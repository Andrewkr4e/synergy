// Функция для определения дня недели
function getDayOfWeek(day, month, year) {
    const date = new Date(year, month - 1, day); // месяц в Date начинается с 0
    const daysOfWeek = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
    return daysOfWeek[date.getDay()]; // getDay() возвращает день недели (0 - воскресенье, 6 - суббота)
}

// Функция для проверки високосного года
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

// Функция для вычисления возраста
function calculateAge(day, month, year) {
    const today = new Date();
    let age = today.getFullYear() - year;
    if (today.getMonth() + 1 < month || (today.getMonth() + 1 === month && today.getDate() < day)) {
        age--; // если день рождения в этом году ещё не был
    }
    return age;
}

// Функция для отображения цифры на электронном табло
function displayDigitOnLed(num) {
    const ledDigits = {
        '0': ['***', '* *', '* *', '* *', '***'],
        '1': ['  *', '  *', '  *', '  *', '  *'],
        '2': ['***', '  *', '***', '*  ', '***'],
        '3': ['***', '  *', '***', '  *', '***'],
        '4': ['* *', '* *', '***', '  *', '  *'],
        '5': ['***', '*  ', '***', '  *', '***'],
        '6': ['***', '*  ', '***', '* *', '***'],
        '7': ['***', '  *', '  *', '  *', '  *'],
        '8': ['***', '* *', '***', '* *', '***'],
        '9': ['***', '* *', '***', '  *', '***']
    };

    return ledDigits[num];
}

// Ввод данных от пользователя
const day = parseInt(prompt("Введите день рождения: "), 10);
const month = parseInt(prompt("Введите месяц рождения: "), 10);
const year = parseInt(prompt("Введите год рождения: "), 10);

// Вывод дня недели
const dayOfWeek = getDayOfWeek(day, month, year);
console.log(`Ваш день рождения был в: ${dayOfWeek}`);

// Проверка на високосный год
if (isLeapYear(year)) {
    console.log(`Год ${year} был високосным.`);
} else {
    console.log(`Год ${year} не был високосным.`);
}

// Вычисление возраста
const age = calculateAge(day, month, year);
console.log(`Ваш возраст: ${age} лет.`);

// Вывод даты в формате дд мм гггг, как на электронном табло
const dateStr = `${day < 10 ? '0' + day : day} ${month < 10 ? '0' + month : month} ${year}`;
console.log("Дата на электронном табло:");

for (let line = 0; line < 5; line++) {
    let row = '';
    for (let i = 0; i < dateStr.length; i++) {
        if (dateStr[i] === ' ') {
            row += '    '; // пробелы между цифрами
        } else {
            const digitRepresentation = displayDigitOnLed(dateStr[i]);
            row += digitRepresentation[line] + '  '; // добавляем строку представления цифры
        }
    }
    console.log(row);
}