window.addEventListener(
  "load",
  () => {
    //只能擇一時段
    const buttons = document.querySelectorAll(".time-btn");
    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        buttons.forEach((btn) => {
          btn.classList.remove("checked");
        });
        button.classList.add("checked");
      });
    });

    let nextStepBtn = document.getElementById("nextStepBtn");

    function submitform() {
      //驗證+送出表單 切換至下一頁
      let form = document.querySelector("form");
      form.submit();
      if (form.checkValidity() == true) {
        alert("預約成功");
        location.href = "index.html";
      }
    }

    //建立事件處理器
    nextStepBtn.onclick = submitform;
  },
  false
);
