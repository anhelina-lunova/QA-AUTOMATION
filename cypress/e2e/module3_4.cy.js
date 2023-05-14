// describe("api testing", () => {
//   it("request", () => {
//     cy.request("https://httpbin.org").then((response) => {
//       const status = response.status;

//       assert.equal(200, status);
//     });
//   });
// });

describe("httpbin tests", () => {
  const request = {
    url: "https://httpbin.org/non-existing-url",
    failOnStatusCode: false,
  };

  it("response code should be 200", () => {
    cy.request(request).then((response) => {
      const status = response.status;

      assert.equal(200, status);
    });
  });
});
