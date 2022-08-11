export {}
// const add=(num1:number, num2:number, num3:number):number=>{
//     return num1+num2+num3

// }
function add (num1:number, num2:number, num3?:number):number{
    if (num3){
        return num1+num2+num3
    }
    return num1+num2

}
console.log("Sum=",add(12,34,86))

const circle =({radious}:{radious:number}):number=>{ //named parameters
      return 3.14*radious*radious
}
console.log("Area of Circle=",circle({radious:8}))

const multiply =(...numbers:number[])=>{  //rest parameters
          return numbers.reduce((p,c)=>p*c,1)
}
console.log(multiply(1,2,3,4,5,3))

type evenCheck =(num:number)=>boolean
const even:evenCheck=(value)=>value%2===0
console.log("Is it event number=>",even(24))