import { LoginPage } from "../../PageObjects/LoginPage";
import { CreateContractPage } from "../../PageObjects/CreateContractPage";

describe('Create client',function(){

    this.beforeEach(function(){
        cy.fixture('example').then(function(data){
            this.data=data;
        })
    })

it('Crear contrato',function(){
    const loginPage = new LoginPage();
    const createContractPage = new CreateContractPage();
    cy.visit(Cypress.env('url'));
    loginPage.getEmailField().type(this.data.email);
    loginPage.getPasswordField().type(this.data.password);
    loginPage.getLoginButton().click()
    cy.get('button[aria-label="Cerrar Sesión"]').should('be.visible');
    createContractPage.getContractTab().click();
    cy.get('svg[data-testid="AddIcon"]').should('be.visible');
    createContractPage.getAddContractButton().click();
    createContractPage.getClientField().click().get('#clientId-option-0').click();
    createContractPage.getEquipmentField().click().get('#equipmentId-option-0').click();
    createContractPage.getNextButton().click();
    createContractPage.getRate().type(this.data.contractRate);
    createContractPage.getCat().type(this.data.contractCat);
    createContractPage.getTerm().type(this.data.contractTerm);
    createContractPage.getEquipmentCost().type(this.data.contractEquipmentCost);
    createContractPage.getResidual().type(this.data.contractResidual);
    createContractPage.getInitialPaymentPercentage().click().get('[data-value="20"]').click();
    createContractPage.getInitialPayment().should('have.value', 3000);
    createContractPage.getNetInvestment().should('have.value', 12000);
    createContractPage.getRent().should('have.value', 936);
    createContractPage.getNextButton().click();
    createContractPage.getNextButton().click();
    createContractPage.getNextButton().click();
    createContractPage.getNextButton().click();
    cy.get('.jss30 > .MuiTypography-root').should('have.text', 'Contract created successfully');
    cy.get('.MuiTabs-flexContainer > :nth-child(2)').should('be.visible');

})   

})