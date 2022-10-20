const commentCounter = () => {
  const commentCount = document.querySelector('.comment-body');
  const bodyChildren = commentCount.querySelectorAll('p');
  return (bodyChildren.length);
};

export default commentCounter;