function showHideMenu() {
  let menu = document.getElementById("main-nav");
  if (menu.classList.contains("show")) {
    menu.classList.remove("show");
  } else {
    menu.classList.add("show");
  }
}

function isMobileDevice() {
  return window.matchMedia("(max-width:1024px)").matches;
}

//btn-border 被選擇
// checked 樣式在 base.css 中
function btnBorderCheck(e) {
  if (e.target.classList.contains("checked")) {
    e.target.classList.remove("checked");
    document.getElementById("selecttime").innerText = "時段";

    // document.querySelector(".btn-waiting-check[for = time").innerText =
    //   e.target.value;
  } else {
    e.target.classList.add("checked");
    document.getElementById("selecttime").innerText = e.target.value;
  }
}

//建立事件處理器
window.addEventListener(
  "load",
  function () {
    //hb
    document.getElementById("hb").onclick = showHideMenu;

    //btn-border 被選擇
    let btnBorders = document.querySelectorAll(".btn-border");
    for (let i = 0; i < btnBorders.length; i++) {
      btnBorders[i].onclick = btnBorderCheck;
    }
  },
  false
);
