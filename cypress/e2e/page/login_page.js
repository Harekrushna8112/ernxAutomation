export class LoginPage{
    
    login(email){
        cy.get('.mb-2 > .w-full').type(email)
        cy.get('form.w-full > .flex').click()
    }
}

// cy.get('#otp-0')
// cy.get('#otp-1')
// cy.get('#otp-2')
// cy.get('#otp-3')