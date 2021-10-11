const NUMBERS_FOR_MASSIVE = randoSequence(1,25);
const NUMBERS_FOR_AVATARS = randoSequence(1,6);
const MESSAGES = ['Всё отлично!', 'В целом всё неплохо. Но не всё.', 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.', 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.','Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.', 'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'];
const NAMES = ['Артём', 'Иван', 'Илья', 'Миша', 'Маша', 'Даша', 'Саша', 'Марина'];
const COMMENTS = [];
const MASSIVE = [];

function getRandomNumber (min, max){
  if (min < 0){
    throw new Error('Значение минимального диапазона меньше 0. Функция прекращает свою работу');
  }
  if (min === max){
    throw new Error('Значение минимального диапазона равно значению максимального диапазона. Функция прекращает свою работу');
  }
  if (min > max){
    throw new Error('Значение минимального диапазона больше значения максимального диапазона. Функция прекращает свою работу');
  }
  return Math.floor(Math.random() * (max - min + 1)) + min; // Источник: https://coderoad.ru/1527803/%D0%93%D0%B5%D0%BD%D0%B5%D1%80%D0%B0%D1%86%D0%B8%D1%8F-random-%D1%86%D0%B5%D0%BB%D1%8B%D1%85-%D1%87%D0%B8%D1%81%D0%B5%D0%BB-%D0%B2-JavaScript-%D0%B2-%D0%BE%D0%BF%D1%80%D0%B5%D0%B4%D0%B5%D0%BB%D0%B5%D0%BD%D0%BD%D0%BE%D0%BC-%D0%B4%D0%B8%D0%B0%D0%BF%D0%B0%D0%B7%D0%BE%D0%BD%D0%B5

}

function checkLength (string, maxLength){
  return string.length <= maxLength;
}

function createComments (){
  for (let index = 0; index < 3; index++){
    COMMENTS[index] = {};
    COMMENTS[index].id = Math.random();
    COMMENTS[index].avatar = `img/avatar-${String(NUMBERS_FOR_AVATARS[index])}.svg`;
    COMMENTS[index].message = MESSAGES[getRandomNumber(0, MESSAGES.length-1)];
    COMMENTS[index].name = NAMES[getRandomNumber(0, NAMES.length-1)];
  }
  return COMMENTS;
}

function createMassive (){
  for (let index = 0; index < 25; index++){
    MASSIVE[index] = {};
    MASSIVE[index].id = NUMBERS_FOR_MASSIVE[index];
    MASSIVE[index].url = `photos/${String(NUMBERS_FOR_MASSIVE[index])}.jpg`;
    MASSIVE[index].description = 'Классная фотография, опубликованная пользователем сайта';
    MASSIVE[index].likes = getRandomNumber(15, 200);
    MASSIVE[index].comments = createComments();
  }
  return MASSIVE;
}
getRandomNumber(0,5);
checkLength('Test1', 5);
createMassive();
