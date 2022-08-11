export {}
function add(num1:number, num2:number, num3?:number):number{
   if (num3)
    {
          return num1+num2+num3;
    }
    return num1+num2
}
console.log("Sum=",add(12,34))
console.log("Sum=",add(12,564,890.9))
const circle=({radious}:{radious:number}):number=>{  //named parameters
      return 3.14*radious*radious
}
console.log("Circle Radious",circle({radious:8}))

function multiply(...numbers:number[]){  //rest parameters
    return numbers.reduce((p,c)=> p*c,0)
}
console.log(multiply(1,2,3,4))

type even=(num:number)=>boolean   //function with type declaration
const evenCheck:even=(num)=>num%2==0
console.log("Is it event number=",evenCheck(23))