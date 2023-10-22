//-------------next-step的出現與否----------------------

let nextstep = document.querySelector(".next-step");
let bookingSelects = document.querySelectorAll(".booking-select");
//立即訂位消失，下一步出現
function showNextstep() {
  nextstep.querySelector("div:nth-child(1)").style.display = "none";
  nextstep.querySelector("div:nth-child(2)").style.display = "block";
}
////立即訂位出現，下一步消失
function hiddenNextstep() {
  nextstep.querySelector("div:nth-child(1)").style.display = "block";
  nextstep.querySelector("div:nth-child(2)").style.display = "none";
}

function scrollShowNextstep() {
  // console.log("正在監聽事件");
  let pageY = window.scrollY;
  let locaY = document.getElementById("reservation-info-form").offsetTop;
  let clientH = document.getElementById("reservation-info-form").clientHeight;

  //假如有一個選項有值，就移除註冊事件處理
  //假如沒有選項有值，那到達定位就顯示 next-step
  //否則隱藏 next-step
  if (
    bookingSelects[0].value != "" ||
    bookingSelects[1].value != "" ||
    bookingSelects[2].value != "" ||
    bookingSelects[3].value != ""
  ) {
    document.removeEventListener("scroll", scrollShowNextstep, false);
    showNextstep();
  } else if (pageY >= locaY - clientH / 2) {
    showNextstep();
  } else {
    hiddenNextstep();
  }
}

//-----------------------------------

window.addEventListener(
  "load",
  function () {
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

    //選到 選項next-step 則顯示
    for (i = 0; i < bookingSelects.length; i++) {
      bookingSelects[i].addEventListener(
        "click",
        function () {
          nextstep.querySelector("div:nth-child(1)").style.display = "none";
          nextstep.querySelector("div:nth-child(2)").style.display = "block";
        },
        false
      );
    }

    //假如沒有選項有值，就註冊事件處理
    if (
      bookingSelects[0].value != "" ||
      bookingSelects[1].value != "" ||
      bookingSelects[2].value != "" ||
      bookingSelects[3].value != ""
    ) {
      showNextstep();
    } else {
      document.addEventListener("scroll", scrollShowNextstep, false);
    }

    //已選擇選項對應到 booking now----------------------------------
    for (i = 0; i < bookingSelects.length; i++) {
      bookingSelects[i].addEventListener(
        "change",
        (e) => {
          let selectval = e.target.value;
          let selectid = e.target.id;
          document.querySelector(
            `.btn-waiting-check[for = ${selectid}`
          ).innerText = selectval;
        },
        false
      );
    }

    //驗證+送出表單 切換至下一頁
    //建立事件處理器
    let form = document.querySelector("form");
    document.getElementById("reservation-info-nextstep-btn").onclick =
      function () {
        form.submit();
        if (form.checkValidity() == true) {
          location.href = "reservation-contact.html";
        }
      };
  },
  false
);
