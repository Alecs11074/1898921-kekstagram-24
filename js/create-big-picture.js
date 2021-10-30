import { generateNoRepeatIds, description, generateNoRepeatAvatars, NAMES, MESSAGES } from './data';
import { getRandomPositiveInteger } from './util';

const body = document.querySelector('body');
const bigPicture = document.querySelector('.big-picture');
const bigPictureImg = bigPicture.querySelector('big-picture__img');
const bigPictureLikesCount = bigPicture.querySelector('.likes-count');
const bigPictureComments = bigPicture.querySelector('.social__comment-count');
const bigPictureCommentsCount = bigPictureComments.querySelector('.comments-count');
const commentItem = bigPicture.querySelector('.social__comment');
const commentItemImg = commentItem.querySelector('.social__picture');
const commentItemText = commentItem.querySelector('.social__text');
const bigPictureDescription = bigPicture.querySelector('.social__caption');
const bigPictureCancel = bigPicture.querySelector('.big-picture__cancel');

const bigPictureData = () => {
  body.classList.add('.modal-open');
  document.querySelector('.social__comment-count').classList.add('hidden');
  document.querySelector('..comments-loader').classList.add('hidden');
  bigPictureImg.src = `photos/${String(generateNoRepeatIds())}.jpg`;
  bigPictureLikesCount.textContent = getRandomPositiveInteger(15, 200);
  bigPictureCommentsCount.textContent = getRandomPositiveInteger(0,3);
  commentItemImg.src = String(generateNoRepeatAvatars());
  commentItemImg.alt = NAMES[getRandomPositiveInteger(0, NAMES.length-1)];
  commentItemText.textContent = MESSAGES[getRandomPositiveInteger(0, MESSAGES.length-1)];
  bigPictureDescription.textContent = description;
};

bigPictureData();

bigPictureCancel.addEventListener('click', () => {
  body.classList.remove('modal-open');
  bigPicture.classList.add('hidden');
});

document.addEventListener('keydown', (evt) => {
  if (evt.keyCode === 27) {
    body.classList.remove('modal-open');
    bigPicture.classList.add('hidden');
  }
});

export {bigPictureData};

