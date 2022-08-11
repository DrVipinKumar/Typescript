export {}
let value:[number, string,number];
value=[1,"Dr. Vipin",12]
value.push(1223)
value.push("Dr Vipin Classes")
console.log(value)
let data: readonly [number, number];
data=[12,34]
//data.push(12)
console.log(data)
let fullname:[fname:string,lname:string]  //named type tuple
fullname=["Dr. Vipin", "Teotia"]
console.log(fullname)
const [fname,lname]=fullname;
console.log(fname)
console.log(lname)