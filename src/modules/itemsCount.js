module.exports = class ItemsCount {
  static itemsCounter() {
    const itemsCount = document.querySelector('ul');
    const children = itemsCount.querySelectorAll('li');
    return (children.length);
  }
};