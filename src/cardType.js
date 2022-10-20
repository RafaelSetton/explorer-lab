import { ccNumberInput } from "./inputs"

const ccBgColor1 = document.querySelector(".cc-bg svg > g g:nth-child(1) path")
const ccBgColor2 = document.querySelector(".cc-bg svg > g g:nth-child(2) path")
const ccFlag = document.querySelector(".cc-logo > span:nth-child(2) > img")

function getCardType(number) {
  number.replaceAll(/ /g, "")
  if (number.search(/^4\d{0,15}/) >= 0) {
    return "visa"
  } else if (
    number.search(
      /^((5[1-5]\d{0,2})|(22[2-9]\d{0,1})|(2[3-7]\d{0,2}))(\d{0,12})/
    ) >= 0
  ) {
    return "mastercard"
  }
  return "default"
}

function setCardType() {
  const type = getCardType(ccNumberInput.value)
  const colors = {
    visa: ["#436D99", "#2D57F2"],
    mastercard: ["#DF6F29", "#C69347"],
    default: ["black", "gray"],
  }
  ccBgColor1.setAttribute("fill", colors[type][0])
  ccBgColor2.setAttribute("fill", colors[type][1])
  ccFlag.setAttribute("src", `/cc-${type}.svg`)
}

export default setCardType
