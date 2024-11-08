describe('Auth', function (){
    it('Criando um token', () => {
        cy.User().then(res => { return res })
    })
})
