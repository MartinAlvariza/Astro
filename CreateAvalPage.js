export class CreateAvalPage{

    getSearchBar(){
        return cy.get('input[placeholder="Search by Name"]');
    }

    getAvalTab(){
        return cy.get('.MuiTabs-flexContainer > :nth-child(2)');
    }

    getAddNewAval(){
        return cy.get('button[type="button"]').eq(13);
    }

    getAvalName(){
        return cy.get('input[name="name"]');
    }

    getAvalPaternalName(){
        return cy.get('input[name="paternalName"]');
    }

    getAvalMaternalName(){
        return cy.get('input[name="maternalName"]');
    }

    getAvalPhone(){
        return cy.get('input[name="phone"]');
    }

    getAvalEmail(){
        return cy.get('input[name="email"]');
    }

    getAvalGender(){
        return cy.get('div[aria-haspopup="listbox"]').eq(0);
    }

    getAvalRfc(){
        return cy.get('input[name="rfc"]');
    }

    getAvalCivilStatus(){
        return cy.get('div[aria-haspopup="listbox"]').eq(1);
    }

    getAvalKinship(){
        return cy.get('div[aria-haspopup="listbox"]').eq(2);
    }

    getAvalCurp(){
        return cy.get('input[name="curp"]');
    }

    getAvalIdentificationNumber(){
        return cy.get('input[name="identificationNumber"]');
    }
}