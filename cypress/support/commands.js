import createBooking from '../fixtures/bookingData.json'
import UserToken from '../fixtures/bookingData.json'

Cypress.Commands.add('getAllBooking', () => {
    cy.api({
        method: 'GET',
        url: 'booking',
    })
});

Cypress.Commands.add('getIdAleatorio',  function (uniqueID) {
    cy.api({
        method: 'GET',
        url: 'booking'
    }).then(res => { 
        let listaLength = res.body.length
        let randomIndex = Math.floor(Math.random() * listaLength)
        let randomId = res.body[randomIndex]
        uniqueID = randomId.bookingid
        expect(randomId.bookingid).to.eq(uniqueID)
     })
});

Cypress.Commands.add('User', () => {
    cy.api({
        method: 'POST',
        url: 'auth',
        body: UserToken.user
    })
});

Cypress.Commands.add('Create', () => {
    cy.api({
        method: 'POST',
        url: 'booking',
        body: createBooking.create
    })
});

Cypress.Commands.add('DeleteBooking', (token, uniqueID) => {
    cy.api({
        method: 'DELETE',
        url: `booking/${uniqueID}`,
        headers: {
            'Cookie': `token=${token}`,
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
    })
});

Cypress.Commands.add('BookingUptadePartial',  (token, uniqueID)=> {
    cy.api({
        method: 'PATCH',
        url: `booking/${uniqueID}`,
        body: createBooking.partialUpdate,
        headers: {
            'Cookie': `token=${token}`, 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
    })
});


Cypress.Commands.add('Ping',  ()=> {
    cy.api({
        method: 'GET',
        url: 'ping'
    })
});

Cypress.Commands.add('Required',  ()=> {
    cy.User().then((res) => {
        const token = res.body.token;
        cy.wrap(token).as('token');
        cy.log('Captura do Token:', token)
    })

    cy.getIdAleatorio().then((res) => {
        const uniqueID = res.body[0].bookingid;
        cy.wrap(uniqueID).as('uniqueID');
        cy.log('Captura do UniqueID:', uniqueID)
    })
});