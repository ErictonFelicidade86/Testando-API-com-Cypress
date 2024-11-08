describe('HealthCheck', () => {
    it('Ping na API', () => {
        cy.Ping().then(res => { expect(res.status).to.eq(201) })
    })
});
