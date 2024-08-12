// membuat pesanan baru
import "./pilih_kurir";

Cypress.Commands.add("buatPesananSatuanCOD", () => {
  cy.get(':nth-child(2) > [to="#"] > p > .right').click();
  cy.get(".menu-is-opening > .nav > :nth-child(1) > .nav-link > p").click();
  cy.contains("h1", "Buat Pesanan", { timeout: 10000 }).should("be.visible");
  // memasukkan data pengirim
  cy.get(
    ":nth-child(2) > .card.mb-3 > .card-body > :nth-child(2) > .form-control"
  ).click();
  cy.get(
    ":nth-child(2) > .content > .show > .modal-dialog > .modal-content > .modal-header > .modal-title",
    { timeout: 10000 }
  ).should("be.visible");
  cy.get(".modal-content > .modal-body > .row > :nth-child(1) > .btn", {
    timeout: 10000,
  }).click();
  cy.get(
    ":nth-child(2) > .content > .show > .modal-dialog > .modal-content > form > .modal-header > .modal-title",
    { timeout: 10000 }
  ).should("be.visible");
  const generateUniqueSenderName = () => {
    const now = new Date();
    const formatAngka = (n) => n.toString().padStart(2, "0");
    const tanggal = formatAngka(now.getDate());
    const bulan = formatAngka(now.getMonth() + 1);
    const tahun = now.getFullYear();
    const jam = formatAngka(now.getHours());
    const menit = formatAngka(now.getMinutes());
    const detik = formatAngka(now.getSeconds());
    return `Test ${tanggal}${bulan}${tahun} ${jam}${menit}${detik}`;
  };
  cy.get("#sender_name").type(generateUniqueSenderName());
  cy.get("#pic_name").type("bhasri automation");
  cy.get("#pic_tel").type("0895701903300");
  cy.get("#vs4__combobox > .vs__selected-options").type("Tandes");
  cy.get("#vs4__option-0 > .d-center").should("contain.text", "TANDES ", {
    timeout: 10000,
  });
  cy.get("#vs4__option-0 > .d-center").click();
  cy.get(".selected").invoke("text").should("include", "TANDES");
  cy.get("#addr_detail").type(
    "Test automation oleh bhasri pak kurir, jadi hiraukan saja"
  );
  cy.get(
    ".show > .modal-dialog > .modal-content > form > .modal-body > .row > :nth-child(8) > .btn"
  ).click();
  // memasukkan data penerima
  cy.get(".card.mb-3 > .card-body > .mb-0 > .form-control > .fi").click();
  cy.get(
    ":nth-child(2) > .show > .modal-dialog > .modal-content > form > .modal-header > .modal-title",
    { timeout: 10000 }
  ).should("be.visible");
  const generateUniqueDestinationName = () => {
    const now = new Date();
    const formatAngka = (n) => n.toString().padStart(2, "0");
    const tanggal = formatAngka(now.getDate());
    const bulan = formatAngka(now.getMonth() + 1);
    const tahun = now.getFullYear();
    const jam = formatAngka(now.getHours());
    const menit = formatAngka(now.getMinutes());
    const detik = formatAngka(now.getSeconds());
    return `Bhasri ${tanggal}${bulan}${tahun} ${jam}${menit}${detik}`;
  };
  cy.get("#destName").type(generateUniqueDestinationName());
  cy.get("#destTel").type("0895701903300");
  cy.get("#vs3__combobox").type("BALONGBENDO", { timeout: 10000 });
  cy.get("#vs3__option-0 > .d-center")
    .should("be.visible")
    .and("contain.text", "BALONGBENDO", { timeout: 10000 });
  cy.get("#vs3__option-0 > .d-center", { timeout: 10000 }).click({
    timeout: 10000,
  });
  cy.get(".modal-body > :nth-child(2) > :nth-child(4) > .form-control").type(
    "Test automation oleh bhasri pak kurir, jadi hiraukan saja"
  );
  cy.get(":nth-child(2) > :nth-child(7) > .btn", { timeout: 10000 }).click();
  cy.get(".card.mb-0 > .card-body > .form-group > .form-control > .text-muted");
  // masukkan detail paket
  cy.get(".card.mb-0 > .card-body > .form-group > .form-control > .fi", {
    timeout: 10000,
  }).click();
  cy.get(
    '[aria-modal="true"] > .modal-dialog > .modal-content > form > .modal-header > .modal-title',
    { timeout: 10000 }
  ).should("be.visible");
  cy.get("#item_name").type("Kaos Obong Bong");
  cy.get("#item_category", { timeout: 10000 }).trigger("click").select("6");
  cy.get(".modal-body > :nth-child(2) > :nth-child(3) > .form-control").type(
    50000
  );
  cy.get('.input-group > [style=""]').type(1);
  cy.get(":nth-child(8) > .input-group > .form-control").clear().type(1);
  cy.get(":nth-child(13) > .btn").click();
  // pilih cod dan non cod
  // cod
  cy.get(
    ":nth-child(2) > :nth-child(2) > :nth-child(2) > .form-control > .icheck-material-orange > .form-check-label"
  ).click();
  cy.wait(5000);
  cy.pilihKurirIDX();
  // pilih pickup atau drop off
  cy.contains("Pickup").click();
  // cy.contains('Drop Off').click()
  // tulis note
  cy.get("#note").type(
    "Test automation oleh bhasri pak kurir, jadi hiraukan saja"
  );

  cy.get(".flex-column > :nth-child(1) > :nth-child(2)")
    .should("contain.text", "1 Kg")
    .and("be.visible");
  cy.get(".form-group > .flex-column > :nth-child(2) > :nth-child(2)")
    .should("contain.text", "Rp 50,000")
    .and("be.visible");
  // cy.get(".cursor-pointer").click();
  // cy.get(":nth-child(3) > .cursor-pointer > .fi").click();
  cy.get(".form-group > .flex-column > :nth-child(3) > :nth-child(1)");
  cy.get(".form-group > .flex-column > :nth-child(4) > :nth-child(2)")
    .should("contain.text", "Rp 100")
    .and("be.visible");
  // cy.get(".mt-3 > .flex-column > :nth-child(4)");
  // cy.get(".mt-3 > .flex-column > :nth-child(6)");
  // cy.get(".mt-3 > .flex-column > :nth-child(6) > :nth-child(2)")
  //   .should("contain.text", "Rp 100")
  //   .and("be.visible");
});

Cypress.Commands.add("buatPesananSatuanNonCOD", () => {
  cy.get(':nth-child(2) > [to="#"] > p > .right').click();
  cy.get(".menu-is-opening > .nav > :nth-child(1) > .nav-link > p").click();
  cy.contains("h1", "Buat Pesanan", { timeout: 10000 }).should("be.visible");
  // memasukkan data pengirim
  // cy.get(
  //   ":nth-child(2) > .card.mb-3 > .card-body > :nth-child(2) > .form-control",
  //   { timeout: 10000 }
  // ).click();
  cy.get(
    ":nth-child(2) > .card.mb-3 > .card-body > :nth-child(2) > .form-control"
  );

  cy.get(
    ":nth-child(2) > .content > .show > .modal-dialog > .modal-content > .modal-header > .modal-title",
    { timeout: 10000 }
  ).should("be.visible");
  cy.get(".modal-content > .modal-body > .row > :nth-child(1) > .btn", {
    timeout: 10000,
  }).click();
  cy.get(
    ":nth-child(2) > .content > .show > .modal-dialog > .modal-content > form > .modal-header > .modal-title",
    { timeout: 10000 }
  ).should("be.visible");
  const generateUniqueSenderName = () => {
    const now = new Date();
    const formatAngka = (n) => n.toString().padStart(2, "0");
    const tanggal = formatAngka(now.getDate());
    const bulan = formatAngka(now.getMonth() + 1);
    const tahun = now.getFullYear();
    const jam = formatAngka(now.getHours());
    const menit = formatAngka(now.getMinutes());
    const detik = formatAngka(now.getSeconds());
    return `Test ${tanggal}${bulan}${tahun} ${jam}${menit}${detik}`;
  };
  cy.get("#sender_name").type(generateUniqueSenderName());
  cy.get("#pic_name").type("bhasri automation");
  cy.get("#pic_tel").type("0895701903300");
  cy.get("#vs4__combobox > .vs__selected-options").type("Tandes");
  cy.get("#vs4__option-0 > .d-center").should("contain.text", "TANDES", {
    timeout: 10000,
  });
  cy.get("#vs4__option-0 > .d-center").click();
  cy.get(".selected").invoke("text").should("include", "TANDES");
  cy.get("#addr_detail").type(
    "Test automation oleh bhasri pak kurir, jadi hiraukan saja"
  );
  cy.get(
    ".show > .modal-dialog > .modal-content > form > .modal-body > .row > :nth-child(8) > .btn"
  ).click();
  // memasukkan data penerima
  cy.get(".card.mb-3 > .card-body > .mb-0 > .form-control > .fi").click();
  cy.get(
    ":nth-child(2) > .show > .modal-dialog > .modal-content > form > .modal-header > .modal-title",
    { timeout: 10000 }
  ).should("be.visible");
  const generateUniqueDestinationName = () => {
    const now = new Date();
    const formatAngka = (n) => n.toString().padStart(2, "0");
    const tanggal = formatAngka(now.getDate());
    const bulan = formatAngka(now.getMonth() + 1);
    const tahun = now.getFullYear();
    const jam = formatAngka(now.getHours());
    const menit = formatAngka(now.getMinutes());
    const detik = formatAngka(now.getSeconds());
    return `Bhasri ${tanggal}${bulan}${tahun} ${jam}${menit}${detik}`;
  };
  cy.get("#destName").type(generateUniqueDestinationName());
  cy.get("#destTel").type("0895701903300");
  cy.get("#vs3__combobox").type("BENOWO", { timeout: 10000 });
  cy.get("#vs3__option-0 > .d-center", { timeout: 10000 })
    .should("be.visible")
    .and("contain.text", "BENOWO")
    .click();
  // cy.get('#vs3__option-0 > .d-center',{ timeout: 10000 }).click()
  cy.get(".modal-body > :nth-child(2) > :nth-child(4) > .form-control").type(
    "Test automation oleh bhasri pak kurir, jadi hiraukan saja"
  );
  cy.get(":nth-child(2) > :nth-child(7) > .btn", { timeout: 10000 }).click();
  // masukkan detail paket
  cy.get(".card.mb-0 > .card-body > .form-group > .form-control > .fi", {
    timeout: 10000,
  }).click();
  cy.get(
    '[aria-modal="true"] > .modal-dialog > .modal-content > form > .modal-header > .modal-title',
    { timeout: 10000 }
  ).should("be.visible");
  cy.get("#item_name").type("Kaos Obong Bong");
  cy.get("#item_category", { timeout: 10000 }).trigger("click").select("6");
  cy.get(".modal-body > :nth-child(2) > :nth-child(3) > .form-control").type(
    50000
  );
  cy.get('.input-group > [style=""]').type(1);
  cy.get(":nth-child(8) > .input-group > .form-control").clear().type(1);
  cy.get(":nth-child(13) > .btn").click();
  // pilih cod dan non cod
  // non cod
  cy.get(
    ":nth-child(2) > :nth-child(2) > :nth-child(2) > .form-control > .icheck-material-orange > .form-check-label"
  ).click();
  cy.wait(5000);
});
