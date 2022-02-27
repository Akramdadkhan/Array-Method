const str="i am travelling to Nanded from Hyderbadaadii";

const max = str.split(" ").reduce((acc,curr)=>acc.length>curr.length ? acc:curr)
console.log(max)
