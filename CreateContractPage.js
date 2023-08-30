export class CreateContractPage{

    getContractTab(){
        return cy.get('a[href="/contracts"]');
    }

    getAddContractButton(){
        return cy.get('svg[data-testid="AddIcon"]');
    }

    getClientField(){
        return cy.get('#clientId');
    }

    getEquipmentField(){
        return cy.get('#equipmentId');
    }

    getNextButton(){
        return cy.get('button[type="submit"]');
    }

    getRate(){
        return cy.get('input[name="rate"]');
    }

    getCat(){
        return cy.get('input[name="cat"]');
    }

    getTerm(){
        return cy.get('input[name="term"]');
    }

    getEquipmentCost(){
        return cy.get('input[name="equipmentCost"]');
    }

    getInitialPaymentPercentage(){
        return cy.get('div[aria-haspopup="listbox"]');
    }

    getInitialPayment(){
        return cy.get('input[type="number"]').eq(5);
    }

    getNetInvestment(){
        return cy.get('input[name="netInvestment"]');
    }

    getResidual(){
        return cy.get('input[name="residualPayment"]');
    }

    getRent(){
        return cy.get('input[name="rent"]');
    }

}