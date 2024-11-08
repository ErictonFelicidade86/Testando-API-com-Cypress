describe('HealthCheck', () => {
    it('Ping na API', () => {
        cy.api({
            method: 'GET',
            url: 'ping'
        }).then(res => {
            expect(res.status).to.eq(201)
        })
    });
});