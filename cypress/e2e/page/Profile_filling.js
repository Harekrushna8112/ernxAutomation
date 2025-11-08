export class SetProfile{


    verifyHomePage(){
        cy.url().then((currrntUrl) =>{
            if(currrntUrl.includes('https://ernx-consumer.vercel.app/game')){
                cy.log('It is a existing account','Homepage loaded')
            }else if(currrntUrl.includes('https://ernx-consumer.vercel.app/login/complete-profile')){
                cy.log('New account detected', 'fill the profile details')
                this.fillName('Harekrushna','Biswal')
                this.addChild()
                this.addNickNameAndGender('Hari')
                this.chooseCharacter()
                this.chooseReword()
                cy.get('.pfont-700').should('be.visible')
                cy.wait(5000)
            }
        
    })
    }
    
    fillName(firstName, lastName){
        cy.get(':nth-child(1) > .w-full').type(firstName)
        cy.wait(5000)
        cy.get(':nth-child(2) > .w-full').type(lastName)
        cy.wait(5000)
        cy.get('form > .justify-center').click()
        cy.wait(5000)
    }

    addChild(){
        cy.get('.bdark').click()
        cy.wait(5000)
    }
    addNickNameAndGender(nickName){
        cy.get('.w-full > :nth-child(1) > .border').type(nickName)
        cy.wait(5000)
        cy.get('.border-black > .p-3').click()
        cy.wait(5000)
        cy.get('.bdark').click()
        cy.wait(5000)
    }
    chooseCharacter(){
        // cy.get(':nth-child(2) > .h-\[60px\]').click()
        cy.wait(5000)
        cy.get('.fixed').click()
        cy.wait(5000)
    }
    chooseReword(){
        cy.get('.space-y-4 > .rounded-lg').click()
        cy.wait(5000)
        cy.get('.fixed').click()
        cy.wait(5000)
        // cy.get('#theme-red > img').click()
        cy.wait(5000)
        cy.get('.gap-5').click()
        cy.wait(5000)
    }


    
}