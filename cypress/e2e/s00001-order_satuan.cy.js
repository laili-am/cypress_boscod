describe("Pengujian Order", () => {
  let testData;

  before(() => {
    cy.fixture("example").then((data) => {
      testData = data;
    });
  });

  it("Order Satuan COD", () => {
    cy.userAlreadyLogin(testData.username_live, testData.password_live);
    cy.buatPesananSatuanCOD();
  });
});
