export class CreateClientPage{

    getClientTab(){
        return cy.get('.MuiListItemIcon-root.css-1f8bwsm').eq(2);
    }

    getCreateClientModal(){
        return cy.get('button[aria-label="Add new client"]');
    }

    getTypeClient(){
        return cy.get('#mui-11');
    }

    getNextButton(){
        return cy.get('button[type="submit"]');
    }

    getName(){
        return cy.get('input[name="name"]');
    }

    getPaternalName(){
        return cy.get('input[name="paternalName"]');
    }

    getMaternalName(){
        return cy.get('input[name="maternalName"]');
    }

    getGender(){
        return cy.get('#mui-37');
    }

    getPhone(){
        return cy.get('input[name="phone"]');
    }

    getEmail(){
        return cy.get('input[name="email"]');
    }

    getRFC(){
        return cy.get('input[name="rfc"]');
    }

    getTax(){
        return cy.get('#taxSystemId');
    }

    getNextButton2(){
        return cy.get('button[type="submit"]');
    }

    getCreateButton(){
        return cy.get('button[type="submit"]');
    }
    
    
    
}