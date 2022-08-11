interface Shape {
    // // private l:number
    // // private b:number 
    // constructor(protected readonly l:number, protected readonly b:number){
    //     // this.l=l;
    //     // this.b=b;
    // }
    //  getArea(l:any,b:any):any{
    //      if ((typeof l ==='number') && (typeof b ==='number')){
    //         return l+b
    //      }
           
    //     return l+" "+b;
    // }
    getArea:()=>number
    // message(){
    //     console.log("Welcome to Abstract Shape Class ")
    // }
}

class Rectangle implements Shape{
    constructor(public l:number, public b:number){
        
    }
    getArea():number{
        return this.l*this.b;
    }
}
class Square extends Rectangle {
    constructor(l:number){
        super(l,l)
    }
}
const rec =new Rectangle(15,34)
console.log("Area of Rectangle =",rec.getArea())
//rec.message();
const sqr =new Square(10)
console.log("Area of Square=",sqr.getArea())
