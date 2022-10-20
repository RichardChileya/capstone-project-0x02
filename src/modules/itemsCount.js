const itemsCounter = () => {
  const itemsCount = document.querySelector('ul');
  const children = itemsCount.querySelectorAll('li');
  return (children.length);
};

export default itemsCounter;