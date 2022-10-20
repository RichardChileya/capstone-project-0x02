import { addComment, getComment } from './comment.js';

const section = document.querySelector('#popup-section');
const modal = async (i, windowContainer, countries) => {
  windowContainer.innerHTML = ` 

<i class="fa-solid fa-x">X</i>

  <section  class = 'img-side-bar'>  
    <div class="img-name">
      <img class="popUp-img" src="${countries[i].flags.svg}" alt="">
      <h2 class="title">${countries[i].name}</h2>
    </div>

    <div class ='right-side-bar'>
      <article class="right-block">
        <h3> Native name:<span> ${countries[i].nativeName}</span></h3>
        <h3> Languages:<span> ${countries[i].languages[0].name}</span></h3>
          <h3 class ="population">Population:<span> ${countries[i].population}</span></h3>
          <h3> Capital:<span> ${countries[i].capital}</pan></h3>
          <h3>Area:<span> ${countries[i].area}</span></h3>
      </article>

      <article class="right-block">
        <h3>Continent: <span>${countries[i].region}</span></h3>
        <h3>Region: <span>${countries[i].subregion}</span></h3>
        <h3>Currencies: <span>${countries[i].currencies[0].name}</span></h3>
        <h3> Time-Zome: <span>${countries[i].timezones}</span></h3>
        <h3 class="borders">Borders: <span>${countries[i].borders}</span></h3>
      </article>
    </div> 
  </section>   

  <section class="comment-details">
    <div class="form-div"
      <form id="f${i}" class='form' action="">
      <h2>Please Leave a comment</h2>
        <div class = 'error-msg'> </div>
        <input id = 'name-input' type="text" placeholder="Your Name" >
        <textarea name=" message" id="msg-input" cols="30" rows="10" placeholder="Your insights"></textarea>
        <button class="comment-btn" type="submit">Comment</button>
      </form>
    </div>

    <div class="comment-div">
          <h2>Comments</h2>

          <span class="comment-body">
            <p>NO COMMENT ENTERED</p>
          </span>
        </div>
      </div>
    </div>

  </section>
  
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