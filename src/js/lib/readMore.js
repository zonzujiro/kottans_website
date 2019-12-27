function readMore() {
  const readMoreButton = document.getElementById('readMore-about');
  const readMoreContainer = document.querySelector('.about__text');

  readMoreButton.addEventListener('click', () => {
    readMoreContainer.classList.toggle('about__text--show');
  });
}
module.exports = readMore;
