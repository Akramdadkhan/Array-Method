const phone = "0357244855452482127148879"

const max = phone.split("").reduce((acc,curr)=>acc>curr? acc:curr)

console.log(max)
