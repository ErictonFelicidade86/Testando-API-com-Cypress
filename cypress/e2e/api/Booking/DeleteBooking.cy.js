describe('DeleteBooking', () => {
    before(function() {
        cy.User().then((res) => {
            const token = res.body.token;
            cy.wrap(token).as('token');
            cy.log('Captured Token:', token)
        })

        cy.getIdAleatorio().then((res) => {
            const uniqueID = res.body[0].bookingid;
            cy.wrap(uniqueID).as('uniqueID');
            cy.log('Captured UniqueID:', uniqueID)
        })
    });
   
    it('Deletar um booking', () => {
        cy.get('@token').then((token) => {
            cy.get('@uniqueID').then((uniqueID) => {
                cy.api({
                    method: 'DELETE',
                    url: `booking/${uniqueID}`,
                    headers: {
                        'Cookie': `token=${token}`,
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                }).then((res) => {
                    cy.log('Response Status:', res.status)
                    cy.log('Response Body:', res.body)
                    expect(res.status).to.eq(201);
                })
            });
        });
    })
})
