import { LoginPage } from "../../PageObjects/LoginPage";
import { CreateClientPage } from "../../PageObjects/CreateClientPage";

describe('Create client',function(){

    this.beforeEach(function(){
        cy.fixture('example').then(function(data){
            this.data=data;
        })
    })

it('Crear cliente',function(){
    const loginPage = new LoginPage();
    const createClientPage = new CreateClientPage();    
    cy.visit(Cypress.env('url'));
    loginPage.getEmailField().type(this.data.email);
    loginPage.getPasswordField().type(this.data.password);
    loginPage.getLoginButton().click()
    cy.get('button[aria-label="Cerrar Sesión"]').should('be.visible');
    createClientPage.getClientTab().click();
    cy.get('button[aria-label="Add new client"]').should('be.visible');
    createClientPage.getCreateClientModal().click();
    createClientPage.getTypeClient({force:true}).click().get('#menu- > .MuiPaper-root > .MuiList-root > [tabindex="0"]', { timeout: 5000 }).click({force:true});
    createClientPage.getNextButton().click();
    createClientPage.getName().type(this.data.clientName);
    createClientPage.getPaternalName().type(this.data.clientLastname);
    createClientPage.getMaternalName().type(this.data.clientMaternalName);
    createClientPage.getGender().click({force:true}).get('#menu- > .MuiPaper-root > .MuiList-root > [tabindex="0"]').click({force:true});
    createClientPage.getPhone().type(this.data.clientPhone);
    createClientPage.getEmail().type(this.data.clientEmail);
    createClientPage.getRFC().type(this.data.clientRFC);
    createClientPage.getTax().click({force:true}).get('#taxSystemId-option-4', { timeout: 5000 }).click({force:true});
    createClientPage.getNextButton2().click();
    createClientPage.getCreateButton().click();
    cy.get('.jss30 > .MuiTypography-root').should('be.visible').should('have.text', 'Client created successfully');
})   

})