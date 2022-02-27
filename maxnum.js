const arr=[2,4,1,5,7,15,3,2,19];
const max = arr.reduce((acc,curr)=>(acc>curr ? acc:curr))
console.log(max)

