import { getRandomPositiveInteger, checkStringLength } from './util.js';

const MESSAGES = ['Всё отлично!', 'В целом всё неплохо. Но не всё.', 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.', 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.','Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.', 'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'];
const NAMES = ['Артём', 'Иван', 'Илья', 'Миша', 'Маша', 'Даша', 'Саша', 'Марина'];
const COMMENTS = [];
const MASSIVE = [];

const generateNoRepeatIds = (usedIdsArray = [], idStart = 1, idEnd = 25) => {
  let id = getRandomPositiveInteger(idStart, idEnd);

  while (usedIdsArray.includes(id)) {
    id = getRandomPositiveInteger(idStart, idEnd);

    if (!usedIdsArray.includes(id)) {
      break;
    }
  }

  usedIdsArray.push(id);

  return id;
};

const generateNoRepeatAvatars = (usedAvatarsArray = [], AvatarStart = 1, AvatarEnd = 6) => {
  let id = getRandomPositiveInteger(AvatarStart, AvatarEnd);

  while (usedAvatarsArray.includes(id)) {
    id = getRandomPositiveInteger(AvatarStart, AvatarEnd);

    if (!usedAvatarsArray.includes(id)) {
      break;
    }
  }

  usedAvatarsArray.push(id);

  return id;
};

function createComments (){
  for (let index = 0; index < 3; index++){
    COMMENTS[index] = {};
    COMMENTS[index].id = Math.random();
    COMMENTS[index].avatar = `img/avatar-${String(generateNoRepeatAvatars())}.svg`;
    COMMENTS[index].message = MESSAGES[getRandomPositiveInteger(0, MESSAGES.length-1)];
    COMMENTS[index].name = NAMES[getRandomPositiveInteger(0, NAMES.length-1)];
  }
  return COMMENTS;
}

function createMassive (){
  for (let index = 0; index < 25; index++){
    MASSIVE[index] = {};
    MASSIVE[index].id = generateNoRepeatIds();
    MASSIVE[index].url = `photos/${String(generateNoRepeatIds())}.jpg`;
    MASSIVE[index].description = 'Классная фотография, опубликованная пользователем сайта';
    MASSIVE[index].likes = getRandomPositiveInteger(15, 200);
    MASSIVE[index].comments = createComments();
  }
  return MASSIVE;
}
getRandomPositiveInteger(0,5);
checkStringLength('Test1', 5);
createMassive();
export {createMassive, generateNoRepeatIds};

