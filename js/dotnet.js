let planinfo = document.querySelector(".planinfo-wrap");

window.addEventListener("load", () => {
  //   點擊商品開啟商品內容
  let itemplan = document.querySelectorAll(".item-plan");
  for (let i = 0; i < itemplan.length; i++) {
    itemplan[i].addEventListener(
      "click",
      () => {
        if (planinfo.classList.contains("hidden")) {
          document.getElementById("qty").value = 1;
          qty = 1;
          planinfo.classList.remove("hidden");
        } else {
          planinfo.classList.add("hidden");
        }
      },
      false
    );
  }
  //點擊叉叉關閉商品內容
  document.querySelector(".close").addEventListener("click", function () {
    planinfo.classList.add("hidden");
  });

  //點擊空白處關閉按鈕
  document.querySelector(".planinfo-wrap").addEventListener(
    "click",
    function (e) {
      if (e.target == planinfo) {
        planinfo.classList.add("hidden");
        e.stopPropagation();
      }
    },
    false
  );

  //點擊加入購物車關閉商品內容
  document.querySelector(".btn-square").addEventListener("click", function () {
    planinfo.classList.add("hidden");
  });

  //數量增減
  let btnMinus = document.querySelector(".minus");
  let btnPlus = document.querySelector(".plus");
  let qty = parseInt(document.getElementById("qty").value);

  btnMinus.onclick = function () {
    if (qty <= 0) {
      //數量為0時,不給減
      return;
    } else {
      qty -= 1;
      document.getElementById("qty").value = qty;
    }
  };

  btnPlus.onclick = function (e) {
    console.log(e.target);
    console.log(qty);
    if (qty >= 10) {
      //數量為10時,不給家
      return;
    } else {
      qty += 1;
      document.getElementById("qty").value = qty;
    }
  };
});
