describe("shoyl be exist",()=>{
    it("todo",()=>{
        cy.visit('http://localhost:3000/')
        cy.get(".InputBox").should('exist')
        cy.get(".Button").should('exist')


    });
    it("should have to type something",()=>{
        cy.visit('http://localhost:3000/')
        cy.get(".Show").children().should("have.length",1)
        cy.get(".InputBox").type("Learn React")
        cy.get(".Button").click()
        cy.get(".Show").children().should("have.length",2)
        
    })
})