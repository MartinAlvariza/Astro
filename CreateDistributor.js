import { LoginPage } from "../../PageObjects/LoginPage";
import { CreateDistributorPage } from "../../PageObjects/CreateDistributorPage";

describe('Create client',function(){

    this.beforeEach(function(){
        cy.fixture('example').then(function(data){
            this.data=data;
        })
    })

it('Crear distribuidor',function(){
    const loginPage = new LoginPage();
    const createDistributorPage = new CreateDistributorPage();
    cy.visit(Cypress.env('url'));
    loginPage.getEmailField().type(this.data.email);
    loginPage.getPasswordField().type(this.data.password);
    loginPage.getLoginButton().click()
    cy.get('button[aria-label="Cerrar Sesión"]').should('be.visible');
    createDistributorPage.getDistributorTab().click();
    cy.get('svg[data-testid="AddIcon"]').should('be.visible');
    createDistributorPage.getAddButton().click();
    createDistributorPage.getDistributorName().type(this.data.distributorName);
    createDistributorPage.getDistributorDenomination().click().get('#denomination-option-0').click();
    createDistributorPage.getDistributorComercialName().type(this.data.distributorCommercialName);
    createDistributorPage.getDistributorEquipmentType().click().get('#equipmentTypeId-option-0').click();
    createDistributorPage.getDisitributorRfc().type(this.data.distributorRFC);
    createDistributorPage.getDistributorZip().type(this.data.distributorZip);
    createDistributorPage.getDistributorCity().click({force:true}).get('li[role="option"]').click({force:true});
})   

})