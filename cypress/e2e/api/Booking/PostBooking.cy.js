describe('Create Booking', () => {
    it('Criando um novo booking', () => {
        cy.Create().then(res => { expect(res.status).to.eq(200) })
    })
})

