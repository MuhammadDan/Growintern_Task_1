let Allbtn = document.querySelectorAll(".btn");
let UPBOX = document.querySelector(".Upbox");
let TEXT = "";
Allbtn.forEach((BTN) => {
  BTN.addEventListener("click", function () {
    if (this.value == "DEL") {
      TEXT = TEXT.substring(0, TEXT.length - 1);
      UPBOX.innerText = TEXT;
    } else if (this.value == "On") {
      TEXT = "";
      UPBOX.innerHTML = TEXT;
      enablebtn();
    } else if (this.value == "=") {
      TEXT = eval(TEXT);
      UPBOX.innerText = TEXT;
    } else if (this.value == "Off") {
      TEXT = "";
      UPBOX.innerHTML = TEXT;
      disablebtn();
    } else {
      TEXT += this.value;
      console.log(TEXT);
      UPBOX.innerText = TEXT;
    }
  });
});
let openbtn = document.querySelector(".btn2");
const disablebtn = () => {
  for (let btn of Allbtn) {
    btn.disabled = true;
  }
  console.log(openbtn.disabled);
  openbtn.disabled = false;
  console.log(openbtn.disabled);
};
const enablebtn = () => {
  for (let btn of Allbtn) {
    btn.disabled = false;
  }
  // openbtn.disabled = true; // Disable the "On" button
};
// {/* <complete></complete> */}
