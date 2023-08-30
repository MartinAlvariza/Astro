import { LoginPage } from "../../PageObjects/LoginPage";
import { CreateClientPage } from "../../PageObjects/CreateClientPage";
import { CreateLegalClientPage } from "../../PageObjects/CreateLegalClient";

describe('Create client',function(){

    this.beforeEach(function(){
        cy.fixture('example').then(function(data){
            this.data=data;
        })
    })

it('Crear cliente',function(){
    const loginPage = new LoginPage();
    const createClientPage = new CreateClientPage();    
    const createLegalClientPage = new CreateLegalClientPage();
    cy.visit(Cypress.env('url'));
    loginPage.getEmailField().type(this.data.email);
    loginPage.getPasswordField().type(this.data.password);
    loginPage.getLoginButton().click()
    cy.get('button[aria-label="Cerrar Sesión"]').should('be.visible');
    createClientPage.getClientTab().click();
    cy.get('button[aria-label="Add new client"]').should('be.visible');
    createClientPage.getCreateClientModal().click();
    createClientPage.getTypeClient({force:true}).click().get('#menu- > .MuiPaper-root > .MuiList-root > [tabindex="-1"]', { timeout: 5000 }).click({force:true});
    createClientPage.getNextButton().click();
    cy.get('input[name="industry"]').should('be.visible');
    createClientPage.getName().type(this.data.clientName);
    createLegalClientPage.getDenomination().click({force:true}).get('#denomination-option-1', { timeout: 5000 }).click({force:true});
    createLegalClientPage.getIndustry().type(this.data.legalClientIndustry);
    createLegalClientPage.getRFC().type(this.data.legalClientRfc);
    createLegalClientPage.getTax().click().get('#taxSystemId-option-3').click();
    createClientPage.getNextButton().click();
    cy.get('div[aria-haspopup="listbox"]').eq(1).should('be.visible');
    createLegalClientPage.getAvalName().click().type(this.data.legalAvalName);
    createLegalClientPage.getAvalPaternalName().type(this.data.legalAvalPaternalName);
    createLegalClientPage.getAvalMaternalName().type(this.data.legalAvalMaternalName);
    createLegalClientPage.getAvalPhone().type(this.data.legalAvalPhone);
    createLegalClientPage.getAvalEmail().type(this.data.legalAvalEmail);
    createLegalClientPage.getAvalGender().click().get('li[data-value="H"]').click();
    createLegalClientPage.getAvalRfc().type(this.data.legalAvalRfc);
    createLegalClientPage.getRole().click().get('input[type="checkbox"]').eq(1).click();
    createLegalClientPage.getRole().click({force:true}).get('input[type="checkbox"]').eq(2).click({force:true});
    cy.get('input[type="checkbox"]').eq(1).should('be.checked');
    cy.get('input[type="checkbox"]').eq(2).should('be.checked');
    createClientPage.getNextButton({force:true}).click({force:true});
    createClientPage.getNextButton().click();
    cy.get('.jss30 > .MuiTypography-root').should('be.visible').should('have.text', 'Client created successfully');
    
})   

})