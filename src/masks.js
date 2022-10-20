import IMask from "imask"
import { ccNumberInput, ccDateInput, ccCodeInput } from "./inputs"

const numberMask = IMask(ccNumberInput, {
  mask: [
    {
      mask: "0000 0000 0000 0000",
      regex: /^4\d{0,15}/,
      cardtype: "visa",
    },
    {
      mask: "0000 0000 0000 0000",
      regex: /^((5[1-5]\d{0,2})|(22[2-9]\d{0,1})|(2[3-7]\d{0,2}))(\d{0,12})/,
      cardtype: "mastercard",
    },
    {
      mask: "0000 0000 0000 0000",
      cardtype: "default",
    },
  ],
  dispatch: (appended, dynamicMasked) => {
    const number = (dynamicMasked.value + appended).replace(/\D/, "")
    const mask = dynamicMasked.compiledMasks.find(({ regex }) =>
      number.match(regex)
    )
    return mask
  },
})

const dateMask = IMask(ccDateInput, {
  mask: "MM{/}YY",
  blocks: {
    MM: {
      mask: IMask.MaskedRange,
      from: 1,
      to: 12,
    },
    YY: {
      mask: IMask.MaskedRange,
      from: new Date().getFullYear() % 100,
      to: (new Date().getFullYear() + 10) % 100,
    },
  },
})

const codeMask = IMask(ccCodeInput, { mask: "0000" })

export { numberMask, dateMask, codeMask }
