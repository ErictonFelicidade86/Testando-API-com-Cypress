import createBooking from '../fixtures/bookingData.json'
import UserToken from '../fixtures/bookingData.json'


Cypress.Commands.add('getAllBooking', () => {
    cy.api({
        method: 'GET',
        url: 'booking',
    }).then(res => { 
        expect(res.status).to.eq(200)
        expect(res.body).to.be.an('array') 
    })
})

Cypress.Commands.add('getIdAleatorio',  function (uniqueID) {
    cy.api({
        method: 'GET',
        url: 'booking'
    }).then(res => { 
        let listaLength = res.body.length
        let randomIndex = Math.floor(Math.random() * listaLength)
        let randomId = res.body[randomIndex]
        uniqueID = randomId.bookingid

        expect(res.status).to.eq(200)
        expect(randomId.bookingid).to.eq(uniqueID)
     })
})

Cypress.Commands.add('User', () => {
    cy.api({
        method: 'POST',
        url: 'auth',
        body: UserToken.user
    }).then(res => {
        expect(res.status).to.eq(200)
    })
})

Cypress.Commands.add('Create', () => {
    cy.api({
        method: 'POST',
        url: 'booking',
        body: createBooking.create
    }).then(res => {
        expect(res.status).to.eq(200)
        expect(res.body).to.be.an('object')
    })
})