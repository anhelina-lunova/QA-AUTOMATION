describe("Наш перший блок тестів", () => {
  it("Тест відвідування сайту LMS", () => {
    cy.visit("https://www.edu.goit.global/account/login");

    cy.get("#user_email").type("user888@gmail.com");

    cy.get("#user_password").type("1234567890");

    cy.get("[type=submit]").click();

    cy.get('[id="go-to-the-course-homepage-widget"]')
      .scrollIntoView()
      .should("be.visible");
  });

  it("Перевірка властивостей", () => {
    cy.visit("https://www.edu.goit.global/account/login");

    cy.get('[type="submit"]').should("have.text", "Log in");

    cy.get('[type="submit"]').should(
      "have.css",
      "background-color",
      "rgb(255, 107, 10)"
    );
  });

  it("Тест для відвідування сторінки як покупець", () => {
    cy.visit("https://www.edu.goit.global/account/login");

    cy.signIn("nadia.tsomko.98@gmail.com", "Nadia_Tsomko78");
  });
});
