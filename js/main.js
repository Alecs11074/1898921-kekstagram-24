
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
  return string.length <= maxLength;
}
let numbersForMassive = randoSequence(1,25);
let numbersForAvatars = randoSequence(1,6);

function createComments (){
  let messages = ['Всё отлично!', 'В целом всё неплохо. Но не всё.', 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.', 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.','Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.', 'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'];
  let names = ['Артём', 'Иван', 'Илья', 'Миша', 'Маша', 'Даша', 'Саша', 'Марина'];
  let comments = [];
  for (let i = 0; i < 3; i++){
    comments[i] = {};
    comments[i].id = Math.random();
    comments[i].avatar = `img/avatar-${String(numbersForAvatars[i])}.svg`;
    comments[i].message = messages[getRandomNumber(0, messages.length-1)];
    comments[i].name = names[getRandomNumber(0, names.length-1)];
  }
  return comments;
}

function createMassive (){
  let massive = [];
  for (let i = 0; i < 25; i++){
    massive[i] = {};
    massive[i].id = numbersForMassive[i];
    massive[i].url = `photos/${String(numbersForMassive[i])}.jpg`;
    massive[i].description = 'Классная фотография, опубликованная пользователем сайта';
    massive[i].likes = getRandomNumber(15, 200);
    massive[i].comments = createComments();
  }
  return massive;
}
getRandomNumber(0,5);
checkLength('Test1', 5);
createMassive();
