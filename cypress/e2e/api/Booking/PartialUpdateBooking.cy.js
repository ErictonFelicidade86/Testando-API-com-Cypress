import createBooking from '../../../fixtures/bookingData.json';

describe('UpdateBooking', () => {
    
    before(function() {
        cy.User().then((res) => {
            const token = res.body.token;
            cy.wrap(token).as('token');
            cy.log('Captured Token:', token)
        });

        cy.getIdAleatorio().then((res) => {
            const uniqueID = res.body[0].bookingid;
            cy.wrap(uniqueID).as('uniqueID');
            cy.log('Captured UniqueID:', uniqueID)
        });
    });

    it('Atualizando o booking', function () {
        cy.get('@token').then((token) => {
            cy.get('@uniqueID').then((uniqueID) => {
                cy.api({
                    method: 'PATCH',
                    url: `booking/${uniqueID}`,
                    body: createBooking.partialUpdate,
                    headers: {
                        'Cookie': `token=${token}`, 
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                }).then((res) => {
                    expect(res.status).to.eq(200);
                });
            });
        });
    });
});
