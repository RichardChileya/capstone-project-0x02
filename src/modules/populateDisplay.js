const populate = (ul, countries, getLikesCount) => {
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
          <img src="" id="${'l'+i}" class="like" alt="heart">
          <p class="likes">${getLikesCount('l'+i)} likes</p>
        </div>
      </section>
      <button type="button" id="${'c'+i}" class="comment-btn">Comments</button>
    </li>
    `
    ul.insertAdjacentHTML('beforeend', htmlText);
  }
}

export default populate;