import { generateNoRepeatIds } from './data';
import { getRandomPositiveInteger } from './util';
const pictureContainer = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content;
const pictureLink = pictureTemplate.querySelector('.picture');
const pictureImg = pictureLink.querySelector('.picture__img');
const pictureLikes = pictureLink.querySelector('.picture__likes');
const pictureComments = pictureLink.querySelector('.picture__comments');

const createPictureFragment = document.createDocumentFragment();

function createPicture() {
  for (let index = 0; index < 25; index++) {
    const pictureItem = pictureTemplate.cloneNode(true);
    pictureImg.src = `photos/${String(generateNoRepeatIds())}.jpg`;
    pictureLikes.textContent = getRandomPositiveInteger(15, 200);
    pictureComments.textContent = getRandomPositiveInteger(0, 3);
    createPictureFragment.appendChild(pictureItem);
  }
}

createPicture();

pictureContainer.appendChild(createPictureFragment);
export {createPicture};
