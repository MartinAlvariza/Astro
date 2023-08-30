import { LoginPage } from "../../PageObjects/LoginPage";

describe('Create client',function(){

    this.beforeEach(function(){
        cy.fixture('example').then(function(data){
            this.data=data;
        })
    })

it('Crear cliente',function(){
    const loginPage = new LoginPage();
    cy.visit(Cypress.env('url'));
    loginPage.getEmailField().type(this.data.email);
    loginPage.getPasswordField().type(this.data.password);
    loginPage.getLoginButton().click()
    cy.get('button[aria-label="Cerrar Sesión"]').should('be.visible');
})   

})