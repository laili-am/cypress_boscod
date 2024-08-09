Cypress.Commands.add('cekPerhitunganPesananCOD', () => {
    cy.fixture('example').then((data) => {
        const hargaBarang = data.harga_barang;
        cy.get('.mt-3 > .flex-column > :nth-child(4) > :nth-child(2)').should('be.visible').and('contain.text', `Rp. ${hargaBarang.toLocaleString('id-ID')}`)
    });
})