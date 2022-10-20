import { addComment, getComment } from './comment.js';

const section = document.querySelector('#popup-section');
const modal = async (i, windowContainer, countries) => {
  windowContainer.innerHTML = ` 

<i class="fa-solid fa-x">X</i>

<div class = 'side-bars'>

  <div class ='left-side-bar'>
    <img class="popUp-img" src="${countries[i].flags.svg}" alt="">
    <h2 class="title">${countries[i].name}</h2>
    
    <form id="f${i}" class='form' action="">
    <h2>Please Leave a comment</h2>
      <div class = 'error-msg'> </div>
      <input id = 'name-input' type="text" placeholder="Your Name" >
      <textarea name=" message" id="msg-input" cols="30" rows="10" placeholder="Your insights"></textarea>
      <button id="comment-btn" type="submit">Comment</button>
    </form>
  </div>
  

  <div class ='right-side-bar'>
    <div class="details">
      <div class="left-block">
        <p> Native name: ${countries[i].nativeName} </p>
        <p> Languages: ${countries[i].languages[0].name} </p>
        <p class ="population"> Population: ${countries[i].population} </p>
        <p> Capital: ${countries[i].capital} </p>
        <p>Area: ${countries[i].area}</p>
        
      </div>

      <div class="right-block">
        <p>Continent: ${countries[i].region} </p>
        <p>Region: ${countries[i].subregion} </p>
        <p>Currencies: ${countries[i].currencies[0].name}</p>
        <p> Time-Zome: ${countries[i].timezones} </p>
        <p class="borders">Borders: ${countries[i].borders} </p>
      </div>
    </div>
   

  <div class="comment-details">
    <h2>Comments</h2>

    <span class="comment-body">
      <p>NO COMMENT ENTERED</p>
    </span>
  </div>
</div>

  </div>
  
`;
  section.appendChild(windowContainer);

  let body = '';
  const comments = await getComment(`f${i}`);
  if (Array.isArray(comments)) {
    comments.forEach((o) => {
      body += `<p>${o.creation_date} ${o.username}: ${o.comment}</p>`;
    });
  }

  document.querySelector('.comment-body').innerHTML = body;
  const form = document.getElementById(`f${i}`);
  const error = document.querySelector('.error-msg');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const nameInput = document.querySelector('#name-input').value;
    const msgInput = document.querySelector('#msg-input').value;
    if (nameInput === '' || msgInput === '') {
      error.innerHTML = 'Please fill the fields';
      form.reset();
    }
    addComment(form.id, nameInput, msgInput);
    form.reset();
  });

  const exitBtn = document.querySelector('.fa-x');

  exitBtn.addEventListener('click', () => {
    windowContainer.style.display = 'none';
    section.removeChild(windowContainer);
  });
};

export default modal;