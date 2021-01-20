function setContentBottom(currentWindow) {
  let content = document.getElementsByClassName('content')[0];
  content.style.bottom = (window.innerHeight - content.offsetHeight) + 'px';
}

function main() {
  setContentBottom(window);

  window.addEventListener("orientationchange", function (event) {
    setTimeout(function () {
      setContentBottom(event.target);
    }, 200)
  });
}

main();