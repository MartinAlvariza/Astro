export class CreateDistributorPage{
    
    getDistributorTab(){
        return cy.get('a[href="/distributors"]');
    }

    getAddButton(){
        return cy.get('svg[data-testid="AddIcon"]');
    }

    getDistributorName(){
        return cy.get('input[name="name"]');
    }

    getDistributorDenomination(){
        return cy.get('#denomination');
    }

    getDistributorComercialName(){
        return cy.get('input[name="commercialName"]');
    }

    getDistributorEquipmentType(){
        return cy.get('#equipmentTypeId');
    }

    getDisitributorRfc(){
        return cy.get('input[name="rfc"]');
    }

    getDistributorZip(){
        return cy.get('input[name="zipCode"]');
    }

    getDistributorCity(){
        return cy.get('div[aria-haspopup="listbox"]').eq(0);
    }

    getDistributorState(){
        return cy.get('div[aria-haspopup="listbox"]').eq(1);
    }

}