export class CreateEquipmentPage{

    getEquipmentsTab(){
        return cy.get('.MuiListItemIcon-root.css-1f8bwsm').eq(0);
    }

    getAddButton(){
        return cy.get('svg[data-testid="AddIcon"]');
    }

    getDistributor(){
        return cy.get('input[name="distributor"]');
    }

    getBrand(){
        return cy.get('#brand');
    }

    getModel(){
        return cy.get('#models');
    }

    getEquipmentType(){
        return cy.get('#equipmentTypeId');
    }

    getNextButton(){
        return cy.get('button[type="submit"]');
    }

    getPdf(){
        return cy.get('input[type="file"]').eq(0);
    }

    getXml(){
        return cy.get('input[type="file"]');
    }

    getSerialNumber(){
        return cy.get('input[name="serialNumber"]')
    }

    getPrice(){
        return cy.get('input[name="price"]')
    }

}