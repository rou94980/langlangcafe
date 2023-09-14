let planinfo = document.querySelector(".planinfo-wrap");

window.addEventListener("load", () => {
  //   點擊商品開啟商品內容
  let itemplan = document.querySelectorAll(".item-plan");
  for (let i = 0; i < itemplan.length; i++) {
    itemplan[i].addEventListener(
      "click",
      () => {
        if (planinfo.classList.contains("hidden")) {
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

  //數量增減
  let btnMinus = document.querySelector("minus");
  let btnPlus = document.querySelector("plus");
  let qty = document.querySelector("num");

  btnMinus.onclick = function () {
    if (qty.value == 0) {
      //數量為0時,不給減
      return;
    }
    qty.value = qty.value - 1;

    btnPlus.onclick = function () {
      let qtyObject = e.target.previousElementSibling;
      console.log(qtyObject);
      qty.value = parseInt(qty.value) + 1;
      console.log(qty);
    };
  };
});
