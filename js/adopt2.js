window.addEventListener(
  "load",
  () => {
    // pagechange----------------------
    let pageindex = 0;
    let pageDown = document.getElementById("pageDown");
    let pageUp = document.getElementById("pageUp");
    let formPage = document.querySelectorAll(".formPage");
    let pageDownBtn = document.getElementById("pageDownBtn");
    let pageNum = document.getElementById("pageNum");
    let nextStep = document.querySelector(".next-step");
    let nextStepBtn = document.getElementById("nextStepBtn");

    //下一頁
    function nextPage() {
      if (pageindex < 4) {
        pageUp.disabled = false;
        document.querySelector("#pageUp > i").style.color =
          "var(--color-accent-1)";
        formPage[pageindex].classList.add("hidden");
        pageindex++;
        formPage[pageindex].classList.remove("hidden");

        pageNum.innerText = pageindex + 1;
        formPage[pageindex].querySelector("input").focus();
      }
      //按鈕失效
      if (pageindex >= 3) {
        pageDown.disabled = true;
        pageDownBtn.disabled = true;
        document.querySelector("#pageDown > i").style.color = "#aaaaaa";
        document.querySelector("#pageDownBtn > span").style.color =
          "transparent";
        nextStep.classList.remove("hidden");
      } else {
        if (nextStep.classList.contains("hidden") == false) {
          nextStep.classList.add("hidden");
        }
      }
    }
    //上一頁
    function previousPage() {
      if (pageindex > 0) {
        pageDown.disabled = false;
        pageDownBtn.disabled = false;
        document.querySelector("#pageDown > i").style.color =
          "var(--color-accent-1)";
        document.querySelector("#pageDownBtn > span").style.color =
          "var(--color-black)";
        formPage[pageindex].classList.add("hidden");
        pageindex--;
        formPage[pageindex].classList.remove("hidden");

        pageNum.innerText = pageindex + 1;
        formPage[pageindex].querySelector("input").focus();
        if (nextStep.classList.contains("hidden") == false) {
          nextStep.classList.add("hidden");
        }
      }

      //按鈕失效及換色
      if (pageindex <= 0) {
        pageUp.disabled = true;
        document.querySelector("#pageUp > i").style.color = "#aaaaaa";
      }
    }

    function submitform() {
      //驗證+送出表單 切換至下一頁
      let form = document.querySelector("form");
      form.submit();
      if (form.checkValidity() == true) {
        alert("申請送出，選擇確認預約與浪浪見面！");
        location.href = "adopt3.html";
      }
    }

    //建立事件處理器
    pageUp.onclick = previousPage;
    pageDown.onclick = nextPage;
    pageDownBtn.onclick = nextPage;
    nextStepBtn.onclick = submitform;
  },
  false
);
