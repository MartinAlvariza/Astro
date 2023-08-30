import { LoginPage } from "../../PageObjects/LoginPage";
import { CreateClientPage } from "../../PageObjects/CreateClientPage";
import { CreateAvalPage } from "../../PageObjects/CreateAvalPage";

describe('Create client',function(){

    this.beforeEach(function(){
        cy.fixture('example').then(function(data){
            this.data=data;
        })
    })

it('Crear cliente',function(){
    const loginPage = new LoginPage();
    const createClientPage = new CreateClientPage();    
    const createAvalPage = new CreateAvalPage();
    cy.visit(Cypress.env('url'));
    loginPage.getEmailField().type(this.data.email);
    loginPage.getPasswordField().type(this.data.password);
    loginPage.getLoginButton().click()
    cy.get('button[aria-label="Cerrar Sesión"]').should('be.visible');
    createClientPage.getClientTab().click();
    //createAval.getSearchBar().type(this.data.clientLastname);
    cy.get('button[aria-label="Go to page 2"]').click();
    cy.get('.MuiTypography-root.MuiTypography-body1.css-17gfwba').contains('Diego Fernando Vallejos Cifuentes').click();
    createAvalPage.getAvalTab().click();
    cy.get('button[type="button"]').eq(13).should('be.visible');
    createAvalPage.getAddNewAval().click({force:true});
    createAvalPage.getAvalName().type(this.data.physicalAvalName);
    createAvalPage.getAvalPaternalName().type(this.data.physicalAvalPaternalName);
    createAvalPage.getAvalMaternalName().type(this.data.physicalAvalMaternalName);
    createAvalPage.getAvalPhone().type(this.data.physicalAvalPhone);
    createAvalPage.getAvalEmail().type(this.data.physicalAvalEmail);
    createAvalPage.getAvalRfc().type(this.data.physicalAvalRfc);
    createAvalPage.getAvalCurp().click({force:true}).type(this.data.physicalAvalCurp);
    createAvalPage.getAvalIdentificationNumber().type(this.data.physicalAvalIdentificationNumber);
    createAvalPage.getAvalGender().click().get('#menu- > .MuiPaper-root > .MuiList-root > [tabindex="0"]').click({force:true});
    createAvalPage.getAvalCivilStatus().click().get('[data-value="MARRIED"]').click();
    createAvalPage.getAvalKinship().click().get('[data-value="MOTHER"]').click({force:true});
    createClientPage.getNextButton().click();
    cy.get('.jss30 > .MuiTypography-root').should('be.visible').should('have.text', 'Aval created successfully');

})   

})