import createBooking from '../../../fixtures/bookingData.json'

describe('Create Booking', () => {
    it('Criando um novo booking', () => {
        cy.api({
            method: 'POST',
            url: 'booking',
            body: createBooking.create
        }).then(res => {
            expect(res.status).to.eq(200)
            expect(res.headers['content-type']).to.include('application/json; charset=utf-8')
            expect(res.body).to.be.an('object')
        })
    })
})