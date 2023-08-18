function showLarge(e) {
  document.querySelector("#largepic > img").src = e.target.src;
}

window.addEventListener(
  "load",
  () => {
    let smallpics = document.querySelectorAll("#smallpics > .smallpic > img");
    for (i = 0; i < smallpics.length; i++) {
      smallpics[i].onclick = showLarge;
    }
  },
  false
);
