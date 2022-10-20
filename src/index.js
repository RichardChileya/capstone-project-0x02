import './style.css';
import { getLikesCount } from './modules/likes.js';
import modal from './modules/popup.js';
import logoImage from './images/globe.png';
import likeImage from './images/hearts.png';
import icon from './images/search.png';
import countries from './modules/countries.js';

const ul = document.querySelector('ul');

for (let i = 0; i < 12; i += 1) {
  const htmlText = `
  <li>
    <div class="img-holder"></div>
    <section class="info">
      <article>
        <h2>${countries[i].name}</h3>
        <h3>Region: <span>${countries[i].region}</span></h3>
        <h3>Capital: <span>${countries[i].capital}</span></h3>
      </article>
      <div>
        <img src="" id="${`l${i}`}" class="like" alt="heart">
        <p class="likes">${getLikesCount(`l${i}`)} likes</p>
      </div>
    </section>
    <button type="button" id="${`c${i}`}" class="comment-btn">Comments</button>
  </li>
  `;
  ul.insertAdjacentHTML('beforeend', htmlText);
}

document.getElementById('logo').src = logoImage;
document.getElementById('search').style.backgroundImage = `url(${icon})`;

document.querySelectorAll('.like').forEach((element) => {
  element.src = likeImage;
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
