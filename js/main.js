function getRandomNumber (min, max){
  if (min < 0){
    throw('Значение минимального диапазона меньше 0. Функция прекращает свою работу');
  }
  if (min === max){
    throw('Значение минимального диапазона равно значению максимального диапазона. Функция прекращает свою работу');
  }
  if (min > max){
    throw('Значение минимального диапазона больше значения максимального диапазона. Функция прекращает свою работу');
  }
  return Math.floor(Math.random() * (max - min + 1)) + min; // Источник: https://coderoad.ru/1527803/%D0%93%D0%B5%D0%BD%D0%B5%D1%80%D0%B0%D1%86%D0%B8%D1%8F-random-%D1%86%D0%B5%D0%BB%D1%8B%D1%85-%D1%87%D0%B8%D1%81%D0%B5%D0%BB-%D0%B2-JavaScript-%D0%B2-%D0%BE%D0%BF%D1%80%D0%B5%D0%B4%D0%B5%D0%BB%D0%B5%D0%BD%D0%BD%D0%BE%D0%BC-%D0%B4%D0%B8%D0%B0%D0%BF%D0%B0%D0%B7%D0%BE%D0%BD%D0%B5

}

function checkLength (string, maxLength){
  return string.length > maxLength ? false : true;
}

getRandomNumber();
checkLength();
