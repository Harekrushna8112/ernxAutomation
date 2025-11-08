import { LoginPage } from "./page/login_page"
import { OTP } from "./page/otp_filling"
import { SetProfile } from "./page/Profile_filling"
import { HomepageContent } from "./page/HomePage"

const loginPage = new LoginPage()
const authenticate = new OTP()
const fillDetails = new SetProfile()
const homepage = new HomepageContent()
describe('testing',()=>{
it('openURL', () =>{

    // Navigate to the URL...
    cy.visit('https://ernx-consumer.vercel.app/login')

    // wrong OTP shoud be show....
    loginPage.login('harihara8112@gmail.com')
    authenticate.fillOTP(3,4,6,8)
    cy.get('.go2072408551').should('be.visible')
    

    // Go back to privious Page(Login Page)
    cy.get('.pl-1').click()
    cy. wait(4000)
    loginPage.login('harekrushnabiswal98@gmail.com')
    

    // Verify user is existing or new...if new fill all the details.....
    cy.wait(20000)
    fillDetails.verifyHomePage()
    cy.get('.text-center > .flex > .text-sm').should('be.visible')
    cy.wait(5000)


    // Click elements on Homepage.....

    homepage.clickAtivities()
    homepage.clickOnMedia()
    homepage.clickOnWallet()
    homepage.clickonSetting()
    homepage.clickgames()
   




    })
})