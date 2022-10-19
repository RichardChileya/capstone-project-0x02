import './style.css';

import logoImage from './images/globe.png';
import likeImage from './images/hearts.png';
import icon from './images/search.png';
import countries from './modules/countries.js';

const ul = document.querySelector('ul');

console.log(countries);
for (let i = 0; i < 12; i++) {
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
        <img src="" class="like" alt="heart">
        <p class="likes">5 likes</p>
      </div>
    </section>
    <button type="button" class="comment-btn">Comments</button>
  </li>
  `
  ul.insertAdjacentHTML('beforeend', htmlText);
}

document.getElementById('logo').src = logoImage;
document.getElementById('search').style.backgroundImage =  `url(${icon})`;

document.querySelectorAll('.like').forEach(element => {
  element.src = likeImage;
});

console.log(countries[38]);

document.querySelectorAll('.img-holder').forEach((val, index) => {
  val.style.backgroundImage = `url(${countries[index].flags.svg})`
})