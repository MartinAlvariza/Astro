export class LoginPage{

    getEmailField(){
        return cy.get('input[name="email"]')
    }

    getPasswordField(){
        return cy.get('input[name="password"]')
    }

    getLoginButton(){
        return cy.get('button[type="submit"]')
    }

}