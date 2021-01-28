function setContentBottom(currentWindow) {
  setTimeout(function () {
    const content = document.getElementsByClassName('content')[0];
    content.style.bottom = (window.innerHeight - content.offsetHeight) + 'px';
  }, 200);
}

function scrollToSection (event) {
  event.preventDefault();

  const targetElement = document.getElementById(event.target.dataset.target);
  if(event.target.matches('.js-hero-nav-link')){ // other way doesn't work
    document.scrollingElement.scroll(
      0, 
      targetElement.getBoundingClientRect().top + window.innerHeight
      )
  } else {
    const menu = document.querySelector('.top-navigation');
    menu.classList.add('collapsed');
    setTimeout(function () {
      window.scrollBy(
        0,
        targetElement.getBoundingClientRect().top
        );
    }, 300)
  }
}

function toggleMenu () {
  const menu = document.querySelector('.top-navigation');
  menu.classList.toggle('collapsed')
}


function main() {
  setContentBottom(window);

  window.addEventListener("orientationchange", function (event) {
    setContentBottom(event.target);
  });

  document.querySelectorAll('.js-nav-link')
    .forEach(element => 
      element.addEventListener('click', scrollToSection)
    )
  document.querySelector('#menu-toggle')
    .addEventListener('click', toggleMenu)
}

main();