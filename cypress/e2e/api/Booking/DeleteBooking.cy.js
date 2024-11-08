describe('DeleteBooking', () => {
    before(function() {
        cy.Required()
    });
   
    it('Deletar um booking', () => {
        cy.get('@token').then((token) => {
            cy.get('@uniqueID').then((uniqueID) => {
                cy.DeleteBooking(token, uniqueID).then((res) => { expect(res.status).to.eq(201) })
            });
        });
    })
})