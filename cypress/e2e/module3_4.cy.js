// describe("api testing", () => {
//   it("request", () => {
//     cy.request("https://httpbin.org").then((response) => {
//       const status = response.status;

//       assert.equal(200, status);
//     });
//   });
// });

describe("httpbin tests", () => {
  it("response code should be 200", () => {
    //request - проміс, що поверне response і нам потрібно цей response опрацювати
    //опрацьовується проміс ключовим словом then
    cy.request("https://httpbin.org").then((response) => {
      const status = response.status; //зберігаємо статус-код респонса

      //assert - вбудований модуль перевірок в cypress
      assert.equal(200, status);
    });
  });
});

describe("httpbin tests", () => {
  const request = {
    url: "https://httpbin.org/non-existing-url",
    failOnStatusCode: false,
  };

  it("response code should be 404", () => {
    cy.request(request).then((response) => {
      const status = response.status;

      assert.equal(404, status);
    });
  });
});
