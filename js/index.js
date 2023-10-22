// let picwrap = document.getElementById("picwrap");
let slidervp = document.getElementById("slidervp");
let picwrap = document.getElementById("picwrap");

function scrollpic() {
  let scrollTop = slidervp.scrollTop;
  let pichight = document.querySelector(".pic").clientHeight;

  if (scrollTop < 50) {
    picwrap.style.transform = "translateY(0)";
    document.querySelector(".dots :nth-child(1)").style.backgroundColor =
      "#ffffff";
    document.querySelector(".dots :nth-child(2)").style.backgroundColor =
      "transparent";
    document.querySelector(".dots :nth-child(3)").style.backgroundColor =
      "transparent";
  }
  if (scrollTop > 50 && scrollTop < pichight - 50) {
    // slidervp.scrollTo({ top: pichight, behavior: "auto" });
    picwrap.style.transform = `translateY(-${pichight - scrollTop}px)`;
    document.querySelector(".dots :nth-child(2)").style.backgroundColor =
      "#ffffff";
    document.querySelector(".dots :nth-child(1)").style.backgroundColor =
      "transparent";
    document.querySelector(".dots :nth-child(3)").style.backgroundColor =
      "transparent";
  }

  if (scrollTop > pichight + 50 && scrollTop < pichight * 1.8) {
    // slidervp.scrollTo({ top: pichight, behavior: "auto" });
    picwrap.style.transform = `translateY(-${pichight * 2 - scrollTop}px)`;
    document.querySelector(".dots :nth-child(3)").style.backgroundColor =
      "#ffffff";
    document.querySelector(".dots :nth-child(1)").style.backgroundColor =
      "transparent";
    document.querySelector(".dots :nth-child(2)").style.backgroundColor =
      "transparent";
  }

  //---------------------
  // if (scrollTop > pichight * 2) {
  //   // slidervp.scrollTo({ top: pichight, behavior: "auto" });
  //   picwrap.style.transform = "translateY(-100%)";
  // }

  //   console.log(scrollTop);
  //   if (scrollTop > picwrap + 10) {
  //     slidervp.scrollTo({ top: `${pichight * 2 - 20}`, behavior: "auto" });
  //   }
  //   console.log(scrollTop + "AA");
  //   if (slidervp.offsetTop > 10) {
  //     picwrap.style.transform = `translateY(-${pichight - scrollTop}px)`;
  //   }
}

//建立事件處理器
window.addEventListener(
  "load",
  () => {
    slidervp.addEventListener("scroll", scrollpic, false);
  },
  false
);
