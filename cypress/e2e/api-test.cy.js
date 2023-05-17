// describe("httpbin tests", () => {
//     it("example of POST API request", () => {
//       const request = {
//         method: "POST",
//         url: "https://httpbin.org/post",
//         failOnStatusCode: false,
//       };
//       cy.request(request).then((response) => {
//         assert.equal(200, response.status);
//       });
//     });

//   it("example of GET API request", () => {
//     const request = {
//       url: "https://httpbin.org/get",
//       qs: {
//         key: "Angie",
//       },
//       failOnStatusCode: false,
//     };
//     cy.request(request).then((response) => {
//       assert.equal("Angie", response.body.args.key);
//     });
//   });
// });

//

// const body = {
//   bodyKey: "bodyValue",
// };

// const request = {
//   method: "POST",
//   url: "https://httpbin.org/post",
//   body,
//   failOnStatusCode: false,
// };

// describe("httpbin tests", () => {
//   it("responce code should be 200", () => {
//     cy.request(request).then((response) => {
//       assert.equal(200, response.status);

//       //порівнює типи даних: обʼєкт та JSON
//       assert.notStrictEqual(body, response.body.data);
//     });
//   });
// });

//
const request = {
  method: "GET",
  url: "https://httpbin.org/headers",
  headers: {
    customHeader: "customValue",
  },
  failOnStatusCode: false,
};

describe("httpbin tests", () => {
  it("responce code should be 200", () => {
    cy.request(request).then((response) => {
      assert.equal(200, response.status);

      //порівнює типи даних: обʼєкт та JSON
      assert.equal("customValue", response.requestHeaders.customHeader);
    });
  });
});
