describe('Get Booking Ids', () => {
    let uniqueID

    it('Exibir todos os ids', () => {
        cy.api({
            method: 'GET',
            url: 'booking',
        }).then(res => {
            expect(res.status).to.eq(200)
            expect(res.headers['content-type']).to.include('application/json; charset=utf-8')
            expect(res.body).to.be.an('array')
        })
    })

    it('Pegando um id Aleatorio', () => {

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
            expect(res.headers['content-type']).to.include('application/json; charset=utf-8')
        })
    })

    it('Pegando somente um id', () => {
        expect(uniqueID).to.not.be.undefined
        cy.api({
            method: 'GET',
            url: `booking/${uniqueID}`,
        }).then(res => {
            expect(res.status).to.eq(200)
            expect(res.headers['content-type']).to.include('application/json; charset=utf-8')
        })
    });

})
