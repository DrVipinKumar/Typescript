const student={                  //implicit property declaration
    name:"Dr Vipin Teotia",
    rollno:1,
    course:"Ph.D"
}
console.log(student)
//type character=string   //aliases or duplicate name of data type
//type integer=number
//type studentType={name:string,rollno:number,course:string}
interface studentInfo {
    name:string,rollno:number
}
interface studentType extends studentInfo {
    course:string
}
const student1:studentType={
    name:"Sachin Teotia",
    rollno:2,
    course:"M.Tech"
}
console.log(student1)

const car:{name:string,mileage?:number}={
    name:"Swift"
}
car.mileage=20;
console.log(car)

const employee:{[index:string]:string}={}
employee.name="Dr. Vipin Classes"
employee.eid="E10"
employee.dept="CS"
console.log(employee)

