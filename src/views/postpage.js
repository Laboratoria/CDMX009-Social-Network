export function postPage() {
  root.innerHTML = ' ';
  const box = document.createElement('div');
  box.innerHTML = `
      <div class="box" id="boxLogo">
      <article class="media">
      </article>
      </div>
      <div class="columns is-mobile is-centered">
      <figure class="image">
      <img class="is-rounded" id="logo"  src="images/logo.png " >
      </figure>
      </div>
      <article class="media">
      <figure class="media-left">
      <p class="image is-64x64">
      <img src="https://bulma.io/images/placeholders/128x128.png">
      </p>
      </figure>
      <div class="media-content">
      <div class="field">
      <p class="control">
      <textarea class="textarea"  id='postTxt' placeholder="Add a comment..."></textarea>
      </p>
      </div>
      <nav class="level">
      <div class="level-left">
      <div class="level-item">
      <a class="button is-info" id ='submitPost'>Submit</a>
      </div>
      </div>
      <div class="level-right">
      <div class="file">
      <div class="field">
      <div class="file is-small">
      <label class="file-label">
      <input class="file-input" type="file" name="resume" id="filePost'>
      <span class="file-cta">
      <span class="file-icon">
      <i class="fas fa-upload"></i>
      </span>
      <span class="file-label">
      Photo
      </span>
      </span>
      </label>
      </div>
      </div>
      </div>
      </nav>
      </div>
      </article>
      <div class="box">
      <article class="media">
      <div class="media-left">
      <figure class="image is-150x150">
      <img src="https://bulma.io/images/placeholders/128x128.png" alt="Image">
      </figure>
      </div>
      <div class="media-content">
      <div class="content">
      <p>
      <strong>John Smith</strong> <small>@johnsmith</small> <small>31m</small>
      <br>
      Nullam condimentum luctus turpis.
      </p>
      </div>
      <nav class="level is-mobile">
      <div class="level-left">
      <a class="level-item" aria-label="share">
      <span class="icon is-small">
      <i class="fas fa-share" aria-hidden="true"></i>
      </span>
      </a>
      <a class="level-item" aria-label="save">
      <span class="icon is-small">
      <i class="fas fa-save" aria-hidden="true"></i>
      </span>
      </a>
      <a class="level-item" aria-label="like">
      <span class="icon is-small">
      <i class="fas fa-heart" aria-hidden="true"></i>
      </span>
      </a>
      </div>
      </nav>
      </div>
      </article>
      </div>
      <div class="box" id="boxLast">
      <article>
  
      </article>
      </div>
      `;
  root.appendChild(box);
  const submitPost = document.querySelector('#submitPost');
}
