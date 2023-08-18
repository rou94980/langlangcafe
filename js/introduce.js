let lastScrollPosition = document.documentElement.scrollTop;

function scrollHead() {
  let currentScrollPosition = document.documentElement.scrollTop;
  if (
    document.documentElement.scrollTop <
    document.querySelector(".bg .pic").clientHeight
  ) {
    if (currentScrollPosition > lastScrollPosition) {
      // 向下滑动
      // alert("向下滑动");
      // 可以在这里编写处理向下滑动的代码
      document.querySelector(".bg .pic").style.width = "30%";
    } else {
      // 向上滑动
      // alert("向上滑动");
      // 可以在这里编写处理向上滑动的代码
      document.querySelector(".bg .pic").style.width = "50%";
    }
    lastScrollPosition = currentScrollPosition;
  }
}
//------ 摸摸頭 ---------
let timeerid;
let hand = document.getElementById("hand");
let dog = document.getElementById("dog");
let love = document.getElementById("love");
let ia = document.getElementById("ia");

// 手掌跟隨滑鼠移動
function touchHead(e) {
  let x = e.offsetX * 0.03;
  let y = e.offsetY * 0.03;
  hand.style.transform = `translate(${x}px,${y}px)`;
  dog.style.transform = `translateX(-${x * 0.1}px)`;
}

//3 秒出現愛心
function showHeart() {
  hand.style.display = "block";

  timeerid = setTimeout(function () {
    love.style.opacity = "1";
  }, 1000);

  // 建立事件處理器
  ia.addEventListener("mousemove", touchHead, false);
}

// 建立事件處理器
window.addEventListener(
  "load",
  function () {
    if (isMobileDevice() == false) {
      window.addEventListener("scroll", scrollHead, false);
    }

    ia.addEventListener("mouseenter", showHeart, false);
    ia.addEventListener(
      "mouseout",
      () => {
        clearTimeout("timeerid");
        hand.style.display = "none";
        love.style.opacity = "0";
      },
      false
    );
  },
  false
);
