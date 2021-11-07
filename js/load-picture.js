import { body } from './create-big-picture';
import { isEscapeKey } from './util';
const fileFormButton = document.querySelector('.upload-file');
const editingPhoto = document.querySelector('.img-upload__overlay');
const editingPhotoCancel = editingPhoto.querySelector('.upload-cancel');
const comment = editingPhoto.querySelector('.text__description');
const hashTags = editingPhoto.querySelector('.text__hashtags');

const isMoreFiveTags = (tags) => {
  if (tags.length > 5){
    tags.setCustomValidity('Нельзя прикреплять больше 5 тегов');
  }

};

const checkFocus = (evt) => {
  if (comment === document.activeElement){
    evt.stopPropagation();
  }
};

const closePopUp = () => {
  body.classList.remove('modal-open');
  editingPhoto.classList.add('hidden');
  fileFormButton.value = '';
};

fileFormButton.addEventListener('change', () => {
  body.classList.add('modal-open');
  editingPhoto.classList.remove('hidden');
});

editingPhotoCancel.addEventListener('click', closePopUp);

document.addEventListener('keydown', (evt) => {
  if (isEscapeKey(evt)) {
    checkFocus(evt);
    closePopUp();
  }
});

hashTags.addEventListener('invalid', () => {
  const textOfHashTags = hashTags.value.split(' ');
  isMoreFiveTags(textOfHashTags);
  textOfHashTags.forEach((value) => {

    if (value.length > 20){
      hashTags.setCustomValidity('Длина хэштега превышает 20 символов');
    }

    else if (value.match(/[^#]./)) {
      hashTags.setCustomValidity('В хештеге не должно находится специальных символов, в том числе и пробел');
    }

    else if (value[0] !=='#'){
      hashTags.setCustomValidity('Хэштег начинается с решетки');
    }
  });
});
