function setContentBottom(currentWindow) {
  setTimeout(function () {
    const content = document.getElementsByClassName('content')[0];
    content.style.bottom = (window.innerHeight - content.offsetHeight) + 'px';
  }, 200);
}

function scrollToSection (event) {
  if (!event.target.matches('.js-nav-link')) return;
  event.preventDefault();

  const targetElement = document.getElementById(event.target.dataset.target);
  document.scrollingElement.scroll(
    0, 
    targetElement.getBoundingClientRect().top + window.innerHeight
    )

}

function main() {
  setContentBottom(window);

  window.addEventListener("orientationchange", function (event) {
    setContentBottom(event.target);
  });

  document.addEventListener('click', scrollToSection);
}

main();