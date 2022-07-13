console.log("Hello world")
let isDone:boolean=false
let price:number=10
let _name:string="Aditya"
let last:string="Kumar"
let full_name=`${_name}_${last}`
console.log(full_name)
//Array
let arr:number[]=[1,2,3]
let arrStrings:string[]=["Masai","School"]
arrStrings.push("Banglore")
console.log(arrStrings)
//obJect
 //1st way Way to create object
type person={firstName:string,lastName:string}
let masai:person={
    firstName:"Aditya",
    lastName:"kumar"
}
//2nd way easy way
let Person:object={
    Firstname:"Aditya",
    Lastname:"Kumar"
}
//tuples
//order is important
let tuple:[string,number]
tuple=["A",10]
///function
let sum=(a:number=10,b:number=27):number=>{
    return a+b
}
sum(7)
let multiply=(a:number,b:number):number=>{
    return a*b
}
console.log(sum())
enum Users {
   Admin,
   SuperAdmin,
   User,
   SuperUser,
  }
//   let temp:string|number
  