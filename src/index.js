import './style.css';

import logoImage from './images/globe.png';
import likeImage from './images/hearts.png';
import icon from './images/search.png';
import countries from './modules/countries.js';

const ul = document.querySelector('ul');

console.log(countries);
// eslint-disable-next-line no-plusplus
for (let i = 30; i < 42; i++) {
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
  `;
  ul.insertAdjacentHTML('beforeend', htmlText);
}

document.getElementById('logo').src = logoImage;
document.getElementById('search').style.backgroundImage = `url(${icon})`;

document.querySelectorAll('.like').forEach((element) => {
  element.src = likeImage;
});

// console.log(countries[38]);

document.querySelectorAll('.img-holder').forEach((val, index) => {
  val.style.backgroundImage = `url(${countries[index + 88].flags.png})`;
});

/* Pop Up  */
const section = document.querySelector('#popup-section');
const windowContainer = document.createElement('div');
windowContainer.className = 'popup-window';
windowContainer.innerHTML = ` 

  <i class="fa-solid fa-x">X</i>

 
<div class = 'side-bars'>

  <img class="popUp-img" src="./images/geek.webp" alt="">
  <h2 class="title">Country Name</h2>

  <div class ='right-side-bar'>
    <div class="details">
      <div class="left-block">
        <p> Capital: Capital </p>
        <p>Country Code: 93</p>
    </div>

      <div class="right-block">
        <p>Area: 10,000</p>
        <p>Continent: Africa</p>
      </div>
    </div>

    <h2>Comments</h2>
    <div class="comment-details">

    <span class="comment-body">
      <p>03/11/2021: I'd like to visit this country</p>
      <p>03/11/2021: I was there last summer</p>

    </span>
    </div>

    <form id="form" action="">
      <div class = 'error-msg'> </div>
      <input id = 'name-input' type="text" placeholder="Your Name">
      <textarea name=" message" id="msg-input" cols="30" rows="10" placeholder="Your insights"></textarea>
      <button id="comment-btn" type="submit">Comment</button>
    </form>
  </div>
</div>
`;
section.appendChild(windowContainer);

/* Pop Up Button */
const popWindow = document.querySelector('.comment-btn');

popWindow.addEventListener('click', (e) => {
  e.preventDefault();
  windowContainer.style.display = 'flex';
});

const exitBtn = document.querySelector('.fa-x');
exitBtn.addEventListener('click', () => {
  windowContainer.style.display = 'none';
});

const form = document.querySelector('#form');
const error = document.querySelector('.error-msg');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const nameInput = document.querySelector('#name-input').value;
  const msgInput = document.querySelector('#msg-input').value;
  if (nameInput === '' || msgInput === '') {
    error.innerHTML = 'Please fill the fields';
  }
});
