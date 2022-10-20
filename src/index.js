import './style.css';
import { getLikesCount } from './modules/likes.js';
import modal from './modules/popup.js';
import logoImage from './images/globe.png';
import likeImage from './images/hearts.png';
import icon from './images/search.png';
import countries from './modules/countries.js';
import {getLikesCount, addLike} from './modules/likes.js';
import populate from './modules/populateDisplay.js';

const ul = document.querySelector('ul');
populate(ul, countries, getLikesCount);

document.getElementById('logo').src = logoImage;
document.getElementById('search').style.backgroundImage = `url(${icon})`;

document.querySelectorAll('.like').forEach((element) => {
  element.src = likeImage;
  element.addEventListener('click', () => addLike(element))
});

document.querySelectorAll('.img-holder').forEach((val, index) => {
  val.style.backgroundImage = `url(${countries[index].flags.png})`;
});

const windowContainer = document.createElement('div');
windowContainer.className = 'popup-window';

const popWindow = document.querySelectorAll('.comment-btn');

popWindow.forEach((element) => {
  element.addEventListener('click', () => {
    modal(element.id[1], windowContainer, countries);
    windowContainer.style.display = 'flex';
  });
});
