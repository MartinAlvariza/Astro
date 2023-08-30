import { LoginPage } from "../../PageObjects/LoginPage";
import { CreateEquipmentPage} from "../../PageObjects/CreateEquipment";

describe('Create client',function(){

    this.beforeEach(function(){
        cy.fixture('example').then(function(data){
            this.data=data;
        })
    })

it('Crear equipo',function(){
    const loginPage = new LoginPage();
    const createEquipmentPage = new CreateEquipmentPage();
    cy.visit(Cypress.env('url'));
    loginPage.getEmailField().type(this.data.email);
    loginPage.getPasswordField().type(this.data.password);
    loginPage.getLoginButton().click()
    cy.get('button[aria-label="Cerrar Sesión"]').should('be.visible');
    createEquipmentPage.getEquipmentsTab().click();
    cy.get('svg[data-testid="AddIcon"]').should('be.visible');
    createEquipmentPage.getAddButton().click();
    cy.get('input[name="distributor"]').should('be.visible');
    createEquipmentPage.getDistributor().type(this.data.equipmentDistributor);
    createEquipmentPage.getBrand().click({force:true}).get('#brand-option-4').click({force:true});
    createEquipmentPage.getModel().click({force:true}).get('#models-option-0').click({force:true});
    createEquipmentPage.getEquipmentType().click({force:true}).get('#equipmentTypeId-option-3').click({force:true});
    createEquipmentPage.getNextButton().click();
    createEquipmentPage.getPdf().attachFile("PDF.pdf");
    createEquipmentPage.getXml({force:true}).attachFile("XML.xml");
    createEquipmentPage.getSerialNumber().type(this.data.equipmentSerialNumber);
    createEquipmentPage.getNextButton().click();
    cy.get('input[name="price"]').should('be.visible');
    createEquipmentPage.getPrice().type(this.data.equipmentPrice);
    cy.get('input[type="number"]').eq(2).should('have.value', 17400);
    createEquipmentPage.getNextButton().click();
    createEquipmentPage.getNextButton().click();
    cy.get('.jss30 > .MuiTypography-root').should('be.visible').should('have.text', 'Equipment created successfully');

})   

})