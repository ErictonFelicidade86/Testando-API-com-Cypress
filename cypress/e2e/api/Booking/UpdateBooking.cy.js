import createBooking from '../../../fixtures/bookingData.json';

describe('UpdateBooking', () => {
    
    before(function() {
        cy.Required()
    });

    it('Atualizando o booking', function () {
        cy.get('@token').then((token) => {
            cy.get('@uniqueID').then((uniqueID) => {
                cy.BookingUptadePartial(token, uniqueID).then((res) => { expect(res.status).to.eq(200) });
            });
        });
    });


});
