function setContentBottom(currentWindow) {
  setTimeout(function () {
    let content = document.getElementsByClassName('content')[0];
    content.style.bottom = (window.innerHeight - content.offsetHeight) + 'px';
  }, 200);
}

function main() {
  setContentBottom(window);

  window.addEventListener("orientationchange", function (event) {
    setContentBottom(event.target);
  });
}

main();