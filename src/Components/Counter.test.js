import {render,screen} from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import Counter from "./Counter"
describe("Exist or not",()=>{
    test("Button Exist",()=>{
        render(<Counter>Increment</Counter>)
        let count=screen.getByText("Increment")
        expect(count).toBeInTheDocument()
    });
    it("should have Zero",()=>{
        render(<Counter></Counter>)
        let h3=screen.getByText("Count is 0")
        expect(h3).toBeInTheDocument()
    })
    it("should increment",()=>{
        render(<Counter></Counter>)
        let h3=screen.getByText("Count is 0")
        expect(h3).toHaveTextContent("0")
        let button=screen.getByText("Increment")
        userEvent.click(button);
        expect(h3).toHaveTextContent("5")

    });
    it("should Decrement",()=>{
        render(<Counter></Counter>)
        let h3=screen.getByText("Count is 0")
        expect(h3).toHaveTextContent("0")
        let button=screen.getByText("Decrement")
        userEvent.click(button);
        expect(h3).toHaveTextContent("-5")
    })
})