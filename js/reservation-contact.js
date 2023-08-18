// JQuary----------------------
$(function () {
  $(".booking-now-info-btn").click(function () {
    $(".booking-now-info").toggleClass("hidden");
  });
  $(".booking-now-info").click(function () {
    $(this).addClass("hidden");
  });
});

// JS----------------------
window.addEventListener(
  "load",
  () => {
    //驗證+送出表單 切換至下一頁
    //建立事件處理器
    let form = document.querySelector("form");
    document.querySelector(".next-step button").onclick = () => {
      form.submit();
      if (form.checkValidity() == true) {
        alert("訂位成功");
        location.href = "index.html";
      }
    };
  },
  false
);
