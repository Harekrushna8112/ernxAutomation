export class HomepageContent{
    clickAtivities(){
        cy.get('.text-xs',{timeout:2000}).should('be.visible')
        cy.get('.text-xs').then(($el)=>{
            const text = $el.text().trim()
        if(text.includes('6/100')){
            cy.log('Today activity is done')
            cy.get('.text-xs').should('be.visible')
        }else if (text.includes('0/100')){
            cy.get('.text-xs').should('be.visible')
            cy.get(':nth-child(1) > .flex > .object-cover').click()
            cy.wait(2000)
            cy.get('.gap-5').click()
            cy.wait(2000)
            cy.get(':nth-child(2) > .flex > .object-cover').click()
            cy.wait(2000)
            cy.get('.gap-5').click()
            cy.wait(2000)
            cy.get(':nth-child(3) > .flex > .object-cover').click()
            cy.wait(2000)
            cy.get('.gap-5').click()
            cy.wait(2000)
        }
        })

    }
    clickOnMedia(){
        cy.get('.css-195rjf5',{timeout:2000}).click()
        cy.get('.sticky > :nth-child(1)',{timeout:1000}).should('be.visible')
        cy.wait(5000)
        cy.log('Yes... the mediaoptions are showing')
    }
    clickOnWallet(){
        cy.get('.MuiBottomNavigation-root > :nth-child(3)').click()
        cy.wait(2000)
        cy.get('.text-base').should('have.text',"We couldn’t find any more gifts for you. Come back soon!")
        cy.wait(2000)
        cy.log('The message is showing')
    }
    clickonSetting(){
        cy.get('.MuiBottomNavigation-root > :nth-child(4)').click()
        cy.wait(2000)
        cy.get('.m-4 > :nth-child(1)').should('contain','Account Info')
        cy.wait(2000)
    }
    clickgames(){
        cy.get('.MuiBottomNavigation-root > :nth-child(1)').click()
        cy.wait(2000)
    }
    
}
