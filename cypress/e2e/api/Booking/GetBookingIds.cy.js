describe('Get Booking Ids', () => {

    it('Exibir todos os ids', () => {
        cy.getAllBooking().then(res => { expect(res.status).to.eq(200) })
    })

    it('Pegando um id Aleatorio', function () {
        cy.getIdAleatorio().then(res => { expect(res.status).to.eq(200) })
    })
})
