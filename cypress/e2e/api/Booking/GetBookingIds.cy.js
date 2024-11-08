describe('Get Booking Ids', () => {

    it('Exibir todos os ids', () => {
        cy.getAllBooking().then(res => { return res })
    })

    it('Pegando um id Aleatorio', function () {
        cy.getIdAleatorio().then(res => { return res })
    })
})
