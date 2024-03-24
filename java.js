
const hasloP1 = document.querySelector("#haslobutton1");
const hasloP2 = document.querySelector("#haslobutton2");
const hasloP3 = document.querySelector("#haslobutton3");
const hasloP4 = document.querySelector("#haslobutton4");
const hasloP5 = document.querySelector("#haslobutton5");
const hasloP6 = document.querySelector("#haslobutton6");
const sprawdzHasloButton = document.querySelector("#sprawdzHasloButton");
var dobreHaslo = "12743C"; // 090923 w hexie to 1632B, wiec 0 na poczatku nic nie zmieni. wiec do wszystkich numerow dodac 1 i bychodzi 12732C
var podaneHaslo = 0;
let licznik = JSON.parse(localStorage.getItem("licznik"));

sprawdzHasloButton.addEventListener("animationend", shakey);
lmao = document.getElementsByClassName("changeColor");

function updateLicznik() {
  console.log(JSON.parse(localStorage.getItem("licznik")));
  localStorage.setItem("licznik", JSON.stringify(licznik));
}

hasloP1.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    sprawdzHaslo()
  }
});

hasloP2.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    sprawdzHaslo()
  }
})

hasloP3.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    sprawdzHaslo()
  }
})

hasloP4.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    sprawdzHaslo()
  }
})

hasloP5.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    sprawdzHaslo()
  }
})

hasloP6.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    sprawdzHaslo()
  }
})

// manualny :hover
hasloP1.addEventListener("focus", function () {
  this.style.boxShadow = "0px 0px 40px 5px #fff";
});

hasloP1.addEventListener("blur", function () {
  this.style.boxShadow = "0px 0px 30px #fff";
});

hasloP2.addEventListener("focus", function () {
  this.style.boxShadow = "0px 0px 40px 5px #fff";
});
hasloP2.addEventListener("blur", function () {
  this.style.boxShadow = "0px 0px 30px #fff";
});

hasloP3.addEventListener("focus", function () {
  this.style.boxShadow = "0px 0px 40px 5px #fff";
});

hasloP3.addEventListener("blur", function () {
  this.style.boxShadow = "0px 0px 30px #fff";
});

hasloP4.addEventListener("focus", function () {
  this.style.boxShadow = "0px 0px 40px 5px #fff";
});

hasloP4.addEventListener("blur", function () {
  this.style.boxShadow = "0px 0px 30px #fff";
});

hasloP5.addEventListener("focus", function () {
  this.style.boxShadow = "0px 0px 40px 5px #fff";
});

hasloP5.addEventListener("blur", function () {
  this.style.boxShadow = "0px 0px 30px #fff";
});

hasloP6.addEventListener("focus", function () {
  this.style.boxShadow = "0px 0px 40px 5px #fff";
});

hasloP6.addEventListener("blur", function () {
  this.style.boxShadow = "0px 0px 30px #fff";
});

sprawdzHasloButton.addEventListener("mouseover", function () {
  this.style.cursor = "pointer";
  this.style.color = "#fff";
  this.style.backgroundColor = "#000";
  this.style.border = "solid 1px #fff";
  this.style.boxShadow = "rgba(255, 255, 255, 0) 0px 0px 30px";
});
sprawdzHasloButton.addEventListener("mouseleave", function () {
  this.style.color = "#000";
  this.style.backgroundColor = "#fff";
  this.style.border = "0px";
  this.style.boxShadow = "rgba(255, 255, 255, 1) 0px 0px 30px";
});
var style = document.createElement("style");

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function changeRed() {
  lmao[0].style.cssText = `
        text-shadow: rgba(241, 50, 62, 1) 0px 0px 30px;
        color: #f1323e;
        transition: 0.1s;`;
  lmao[1].style.cssText = `
        text-shadow: rgba(241, 50, 62, 1) 0px 0px 30px;
        color: #f1323e;
        transition: 0.1s;`;

  lmao[2].style.cssText = `
        box-shadow: rgba(241, 50, 62, 1) 0px 0px 30px;
        border-color: #f1323e;
        transition: 0.1s;`;

  lmao[3].style.cssText = `
        box-shadow: rgba(241, 50, 62, 1) 0px 0px 30px;
        border-color: #f1323e;
        transition: 0.1s;`;

  lmao[4].style.cssText = `
        box-shadow: rgba(241, 50, 62, 1) 0px 0px 30px;
        border-color: #f1323e;
        transition: 0.1s;`;

  lmao[5].style.cssText = `
        box-shadow: rgba(241, 50, 62, 1) 0px 0px 30px;
        border-color: #f1323e;
        transition: 0.1s;`;

  lmao[6].style.cssText = `
        box-shadow: rgba(241, 50, 62, 1) 0px 0px 30px;
        border-color: #f1323e;
        transition: 0.1s;`;

  lmao[7].style.cssText = `
        box-shadow: rgba(241, 50, 62, 1) 0px 0px 30px;
        border-color: #f1323e;
        transition: 0.1s;`;

  lmao[8].style.cssText = `
        box-shadow: rgba(241, 50, 62, 1) 0px 0px 30px;
        background-color: #f1323e;
        transition: 0.1s;`;

  hasloP1.value = null;
  hasloP2.value = null;
  hasloP3.value = null;
  hasloP4.value = null;
  hasloP5.value = null;
  hasloP6.value = null;
}

function shakey() {
  lmao[0].classList.toggle("shake");
  lmao[1].classList.toggle("shake");
  lmao[2].classList.toggle("shake");
  lmao[3].classList.toggle("shake");
  lmao[4].classList.toggle("shake");
  lmao[5].classList.toggle("shake");
  lmao[6].classList.toggle("shake");
  lmao[7].classList.toggle("shake");
  lmao[8].classList.toggle("shake");
}

function backToNormal() {
  lmao[0].style.cssText = `
        text-shadow: rgba(255, 255, 255, 1) 0px 0px 30px;
        color: #fff;`;
  lmao[1].style.cssText = `
        text-shadow: rgba(255, 255, 255, 1) 0px 0px 30px;
        color: #fff;`;
  lmao[2].style.cssText = `
        box-shadow: rgba(255, 255, 255, 1) 0px 0px 30px;
        border-color: #fff;`;
  lmao[3].style.cssText = `
        box-shadow: rgba(255, 255, 255, 1) 0px 0px 30px;
        border-color: #fff;`;
  lmao[4].style.cssText = `
        box-shadow: rgba(255, 255, 255, 1) 0px 0px 30px;
        border-color: #fff;`;
  lmao[5].style.cssText = `
        box-shadow: rgba(255, 255, 255, 1) 0px 0px 30px;
        border-color: #fff;`;
  lmao[6].style.cssText = `
        box-shadow: rgba(255, 255, 255, 1) 0px 0px 30px;
        border-color: #fff;`;
  lmao[7].style.cssText = `
        box-shadow: rgba(255, 255, 255, 1) 0px 0px 30px;
        border-color: #fff;`;
  lmao[8].style.cssText = `
        box-shadow: rgba(255, 255, 255, 1) 0px 0px 30px;
        background-color: #fff;
        color: #000;
        transition: 0.4s;`;
}

function sprawdzHaslo() {
  var podaneHaslo =
    hasloP1.value +
    hasloP2.value +
    hasloP3.value +
    hasloP4.value +
    hasloP5.value +
    hasloP6.value;
  if (dobreHaslo == podaneHaslo) {
    lmao[0].style.cssText = `
          text-shadow: rgba(158, 207, 128, 1) 0px 0px 30px;
          color: #9ecf80;
          transition: 0.1s;`;
    lmao[1].style.cssText = `
          text-shadow: rgba(158, 207, 128, 1) 0px 0px 30px;
          color: #9ecf80;
          transition: 0.1s;`;

    lmao[2].style.cssText = `
          box-shadow: rgba(158, 207, 128, 1) 0px 0px 30px;
          border-color: #9ecf80;
          transition: 0.1s;`;

    lmao[3].style.cssText = `
          box-shadow: rgba(158, 207, 128, 1) 0px 0px 30px;
          border-color: #9ecf80;
          transition: 0.1s;`;

    lmao[4].style.cssText = `
          box-shadow:rgba(158, 207, 128, 1) 0px 0px 30px;
          border-color: #9ecf80;
          transition: 0.1s;`;

    lmao[5].style.cssText = `
          box-shadow: rgba(158, 207, 128, 1) 0px 0px 30px;
          border-color: #9ecf80;
          transition: 0.1s;`;

    lmao[6].style.cssText = `
          box-shadow: rgba(158, 207, 128, 1) 0px 0px 30px;
          border-color: #9ecf80;
          transition: 0.1s;`;

    lmao[7].style.cssText = `
          box-shadow: rgba(158, 207, 128, 1) 0px 0px 30px;
          border-color: #9ecf80;
          transition: 0.1s;`;

    lmao[8].style.cssText = `
          box-shadow:rgba(158, 207, 128, 1) 0px 0px 30px;
          background-color: #9ecf80;
          transition: 0.1s;`;
    setTimeout(() => {
      window.location.href = "./KitCorpFiles.html";
    }, "1000");
  } else if (podaneHaslo == "090923") {
    lmao[1].innerHTML = "chciałabyś <3";
    lmao[1].style.color = "#baa5d8";
  } else if (podaneHaslo == "kocham") {
    lmao[1].innerHTML = "ja ciebie też <3";
    lmao[1].style.color = "#baa5d8";
  } else if (podaneHaslo == "123456") {
    lmao[1].innerHTML = "nie";
    lmao[1].style.color = "#baa5d8";
  } else if (podaneHaslo == "654321") {
    lmao[1].innerHTML = "absolutnie nie";
    lmao[1].style.color = "#baa5d8";
  } else if (podaneHaslo == "696969") {
    lmao[1].innerHTML = "This is just like my penor when it foes that you know what (ejagolate).           😏";
    lmao[1].style.color = "#baa5d8";
  } else if (podaneHaslo == "michal" || podaneHaslo == "Michal" || podaneHaslo == "michał" || podaneHaslo == "Michał") {
    lmao[1].innerHTML = "to jaaaa";
    lmao[1].style.color = "#baa5d8";
  } else if (podaneHaslo == "radosz" || podaneHaslo == "Radosz") {
    lmao[1].innerHTML = "to tyyyy";
    lmao[1].style.color = "#baa5d8";
  } else if (podaneHaslo == "kitcor" || podaneHaslo == "Kitcor" || podaneHaslo == "KitCor") {
    lmao[1].innerHTML = "to nawet nie pasuje";
    lmao[1].style.color = "#baa5d8";
  } else if (podaneHaslo == "haslo" || podaneHaslo == "hasło" || podaneHaslo == "Haslo" || podaneHaslo == "Hasło") {
    lmao[1].innerHTML = ":|";
    lmao[1].style.color = "#baa5d8";
  } else if (podaneHaslo == "000000" || podaneHaslo == "111111" || podaneHaslo == "222222" || podaneHaslo == "333333" || podaneHaslo == "444444" || podaneHaslo == "555555" || podaneHaslo == "666666" || podaneHaslo == "777777" || podaneHaslo == "888888" || podaneHaslo == "999999") {
    lmao[1].innerHTML = "nie";
    lmao[1].style.color = "#baa5d8";
  } else if (podaneHaslo == "12732c") {
    lmao[1].innerHTML = "C";
    lmao[1].style.color = "#baa5d8";
  } else if (podaneHaslo == "andrii") {
    lmao[1].innerHTML = "w terrarii by zadzialalo";
    lmao[1].style.color = "#baa5d8";
  } else if (podaneHaslo == "maja" || podaneHaslo == "Maja") {
    lmao[1].innerHTML = ":3";
    lmao[1].style.color = "#baa5d8";
  } else if (podaneHaslo == "110901") {
    lmao[1].innerHTML = "huh";
    lmao[1].style.color = "#baa5d8";
  } else {
    licznik++;
    updateLicznik();
    //licznik = 0;  //reset lmao
    changeRed();
    shakey();
    setTimeout(() => {
      backToNormal();
    }, "700");
  }
}

function isMobile() {
  return /Android|iPhone/i.test(navigator.userAgent);
}

console.log(isMobile());
if(isMobile() == true)
{
  document.getElementById('HideAll').style.display = 'flex';
}
