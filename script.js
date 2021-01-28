function setContentBottom(currentWindow) {
  const content = document.getElementsByClassName('content')[0];
  content.style.bottom = (window.innerHeight - content.offsetHeight) + 'px';
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
  let resizeId = setTimeout(() => setContentBottom(window), 300);

  window.addEventListener('resize', function (event) {
    clearTimeout(resizeId);
    resizeId = setTimeout(() => setContentBottom(event.target), 300);
  });

  document.querySelectorAll('.js-nav-link')
    .forEach(element => 
      element.addEventListener('click', scrollToSection)
    )
  document.querySelector('#menu-toggle')
    .addEventListener('click', toggleMenu)
}

main();