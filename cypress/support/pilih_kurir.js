const kurirData = require('../fixtures/example.json')

Cypress.Commands.add('pilihKurirIDX', () => {
    // Mencari elemen yang mengandung teks "IDX FLAT"
    cy.contains('.font-weight-bold', kurirData.kurir[0].kurir_idxflat)
      .parents('.form-control.h-100.py-3.cursor-pointer') // Naik ke elemen parent yang bisa diklik
      .click()
  })