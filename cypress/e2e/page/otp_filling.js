export class OTP{
    
    fillOTP(num1,num2,num3,num4){
        cy.get('#otp-0').type(num1)
        cy.get('#otp-1').type(num2)
        cy.get('#otp-2').type(num3)
        cy.get('#otp-3').type(num4)
    }
}

// cy.get('#otp-0')
// cy.get('#otp-1')
// cy.get('#otp-2')
// cy.get('#otp-3')