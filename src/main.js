import "./css/index.css"
import { codeMask, numberMask, dateMask } from "./masks"
import { ccNumberInput, ccNameInput, ccCodeInput, ccDateInput } from "./inputs"
import setCardType from "./cardType"

const ccNumber = document.querySelector("div.cc-info > div.cc-number")
const ccName = document.querySelector("div.cc-info > div.cc-holder > div.value")
const ccDate = document.querySelector(
  "div.cc-info > div.cc-extra > div.cc-expiration > div.value"
)
const ccCode = document.querySelector(
  "div.cc-info > div.cc-extra > div.cc-security > div.value"
)

const addCard = document.querySelector("#add-card")

function update() {
  setCardType()
  ccNumber.textContent = ccNumberInput.value.length
    ? ccNumberInput.value
    : "1234 5678 9012 3456"
  ccName.textContent = ccNameInput.value.length
    ? ccNameInput.value
    : "FULANO DA SILVA"
  ccDate.textContent = ccDateInput.value.length ? ccDateInput.value : "02/32"
  ccCode.textContent = ccCodeInput.value.length ? ccCodeInput.value : "123"
}

ccNumberInput.addEventListener("input", update)
ccDateInput.addEventListener("input", update)
ccNameInput.addEventListener("input", update)
ccCodeInput.addEventListener("input", update)
