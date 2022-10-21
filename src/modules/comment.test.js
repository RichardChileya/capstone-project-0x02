/** @jest-environment jsdom */
/* eslint-disable global-require */
test('test for comment count', () => {
  document.body.innerHTML = `
  <span class="comment-body">
      <span>No Comments...</span>
  </span>`;
  const Count = require('./commentCount.js');

  const body = document.querySelector('.comment-body');
  body.innerHTML = `
    <p>Comment 1  </p>
    <p>Comment 2 </p>
    <p>Comment 3 </p>
    <p>Comment 4 </p>
    <p>Comment 5 </p>
  `;
  expect(Count.commentCounter()).toBe(5);
});

test('test for no comments', () => {
  document.body.innerHTML = `
  <span class="comment-body">
      <span>No Comments...</span>
  </span>`;
  const Count = require('./commentCount.js');

  expect(Count.commentCounter()).toBe(0);
});