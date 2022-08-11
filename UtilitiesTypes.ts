//18. TypeScript Tutorial 18| Utility Types: Partial, Required, 
//Record, Omit, Pick, Exclude, ReturnType, Parameters, \
export {}
// function add(num1:number,num2:number):number {
//     return num1+num2;
// }
type add =(p:{num1:number, num2:string})=>number
const myvalue:Parameters<add>[1] ={
    num1:"Dr. Vipin Classes"
}
console.log(myvalue)
// type value=string|number|boolean
// const myvalue:Exclude<value,number>="Dr. Vipin Classes"
// console.log(myvalue)
// interface value {
//     num1:number,
//     num2:number,
//     num3:number
// }
// const myinfo:Pick<value,'num1'|'num2'> ={
//     num1:20,
//     num2:45
// }
// console.log(myinfo)
//  const fullname:Record<string,string>={
//     "fname":"Dr. Vipin",
//     "lname":"Classes"
//  }
// console.log(fullname)
// interface value{
//     num1:number
//     num2?:number
//     num3?:number
// }
// const myinfo:Required<value>={
//     num1:30,
//     num2:40,
//     num3:50
// }
// console.log(myinfo)
// const myinfo:Partial<value>={
//    num1:10
  
// }
// myinfo.num2=20;
// console.log(myinfo)