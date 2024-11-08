describe('Auth', function (){
    it('Criando um token', () => {
        cy.User().then(res => { expect(res.status).to.eq(200) })
    })
})
