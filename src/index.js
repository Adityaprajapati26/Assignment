console.log("Hello world");
var isDone = false;
var price = 10;
var _name = "Aditya";
var last = "Kumar";
var full_name = "".concat(_name, "_").concat(last);
console.log(full_name);
//Array
var arr = [1, 2, 3];
var arrStrings = ["Masai", "School"];
arrStrings.push("Banglore");
console.log(arrStrings);
var masai = {
    firstName: "Aditya",
    lastName: "kumar"
};
//2nd way easy way
var Person = {
    Firstname: "Aditya",
    Lastname: "Kumar"
};
//tuples
//order is important
var tuple;
tuple = ["A", 10];
///function
var sum = function (a, b) {
    if (a === void 0) { a = 10; }
    if (b === void 0) { b = 27; }
    return a + b;
};
sum(7);
var multiply = function (a, b) {
    return a * b;
};
console.log(sum());
var Users;
(function (Users) {
    Users[Users["Admin"] = 0] = "Admin";
    Users[Users["SuperAdmin"] = 1] = "SuperAdmin";
    Users[Users["User"] = 2] = "User";
    Users[Users["SuperUser"] = 3] = "SuperUser";
})(Users || (Users = {}));
//   let temp:string|number
