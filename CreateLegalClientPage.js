export class CreateLegalClientPage{

    getDenomination(){
        return cy.get('#denomination');
    }

    getIndustry(){
        return cy.get('input[name="industry"]');
    }

    getRFC(){
        return cy.get('input[name="rfc"]');
    }

    getTax(){
        return cy.get('#taxSystemId');
    }

    getRole(){
        return cy.get('div[aria-haspopup="listbox"]').eq(1);
    }

    getAvalName(){
        return cy.get('input[name="aval.name"]');
    }

    getAvalPaternalName(){
        return cy.get('input[name="aval.paternalName"]');
    }

    getAvalMaternalName(){
        return cy.get('input[name="aval.maternalName"]');
    }

    getAvalPhone(){
        return cy.get('input[name="aval.phone"]');
    }

    getAvalEmail(){
        return cy.get('input[name="aval.email"]');
    }

    getAvalGender(){
        return cy.get('div[aria-haspopup="listbox"]').eq(2);
    }

    getAvalRfc(){
        return cy.get('input[name="aval.rfc"]');
    }

}