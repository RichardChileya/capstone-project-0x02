/** @jest-environment jsdom */
const ItemsCount = require('./itemsCount.js');

test('test for three items added', () => {
  document.body.innerHTML = `
    <ul><ul>
  `;

  const ul = document.querySelector('ul');
  ul.innerHTML = `
    <li>
    <div class="img-holder"></div>
    <section class="info"></>
    <button type="button"></button>
    </li>

    <li>
    <div class="img-holder"></div>
    <section class="info"></>
    <button type="button"></button>
    </li>

    <li>
    <div class="img-holder"></div>
    <section class="info"></>
    <button type="button"></button>
    </li>
  `;

  expect(ItemsCount.itemsCounter()).toBe(3);
});

test('test for zero items', () => {
  document.body.innerHTML = `
    <ul><ul>
  `;

  const ul = document.querySelector('ul');
  ul.innerHTML = `

  `;

  expect(ItemsCount.itemsCounter()).toBe(0);
});