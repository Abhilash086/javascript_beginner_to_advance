const billAmountInput = document.querySelector(".input-container input");
const customTipInput = document.querySelector(".custom-tip");
const numberOfPeopleInput = document.querySelector(".number-of-people");
const generateBillBtn = document.querySelector(".generate-bill-btn");
const tipAmountOutput = document.querySelector(".tip-amount span");
const totalBillOutput = document.querySelector(".total span");
let eachPersonBillOutput = document.querySelector(".each-person-bill span");
const tipsContainer = document.querySelector(".tip-container");

let tipPercentage = 0;
const resetBtn = document.querySelector(".reset");

generateBillBtn.addEventListener("click", () => {
  const billAmount = parseInt(billAmountInput.value);
  const numberOfPeople = parseInt(numberOfPeopleInput.value);

  const tipAmount = (billAmount * tipPercentage) / 100;
  const totalBill = billAmount + tipAmount;
  const eachPersonBill = totalBill / numberOfPeople;

  tipAmountOutput.innerText = `₹${tipAmount}`;
  totalBillOutput.innerText = `₹${totalBill}`;
  eachPersonBillOutput.innerText = `₹${eachPersonBill}`;

  resetBtn.disabled = false;
});

tipsContainer.addEventListener("click", (e) => {
  if (tipsContainer.classList.contains("disabled")) return;
  if (e.target !== tipsContainer) {
    [...tipsContainer.children].forEach((element) =>
      element.classList.remove("selected")
    );
    e.target.classList.add("selected");
    tipPercentage = parseInt(e.target.innerText);
    customTipInput.value = "";
  }
});

customTipInput.addEventListener("input", () => {
  tipPercentage = parseInt(customTipInput.value);
  [...tipsContainer.children].forEach((element) =>
    element.classList.remove("selected")
  );
});

resetBtn.addEventListener("click", () => {
  [...tipsContainer.children].forEach((element) =>
    element.classList.remove("selected")
  );
  billAmountInput.value = "";
  customTipInput.value = "";
  tipAmountOutput.innerText = "";
  numberOfPeopleInput.value = "";
  totalBillOutput.innerText = "";
  eachPersonBillOutput.innerText = "";
  tipPercentage = 0;
  customTipInput.disabled = true;
  numberOfPeopleInput.disabled = true;
  generateBillBtn.disabled = true;
  tipsContainer.classList.add("disabled");
  resetBtn.disabled = true;
});

billAmountInput.addEventListener("input", () => {
  if (billAmountInput.value) {
    customTipInput.disabled = false;
    numberOfPeopleInput.disabled = false;
    tipsContainer.classList.remove("disabled");
  } else {
    customTipInput.disabled = true;
    numberOfPeopleInput.disabled = true;
    generateBillBtn.disabled = true;
    tipsContainer.classList.add("disabled");
  }
});

numberOfPeopleInput.addEventListener("input",()=>{
    if(numberOfPeopleInput.value){
        generateBillBtn.disabled = false;
    }else{
        generateBillBtn.disabled = true;
    }
})