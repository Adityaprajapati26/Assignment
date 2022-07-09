const sum=require("./index")
describe("test two sum",()=>{
    test("Test two numbers",()=>{
        expect(sum(1,2)).toBe(3)
    })
    test("add two neg",()=>{
        expect(sum(-1,-2)).toBe(-3)
    })
    test("sum with no arguments",()=>{
        expect(sum()).toBe("sum invoked without numbers")

    })
    test("sum with one arguments",()=>{
        expect(sum(1)).toBe("sum is not defined")

    });
    test("sum with three",()=>{
        expect(sum(1, 2, 3)).toBe(6)
    })
})