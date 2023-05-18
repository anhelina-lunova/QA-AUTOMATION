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

// const request = {
//   method: "GET",
//   url: "https://httpbin.org/headers",
//   headers: {
//     customHeader: "customValue",
//   },
//   failOnStatusCode: false,
// };

// describe("httpbin tests", () => {
//   it("responce code should be 200", () => {
//     cy.request(request).then((response) => {
//       assert.equal(200, response.status);

//       assert.equal("customValue", response.requestHeaders.customHeader);
//     });
//   });
// });

//

// const request = {
//   method: "GET",
//   url: "https://httpbin.org/headers",
//   headers: {
//     "user-agent": "My test user-agent",
//   },
//   failOnStatusCode: false,
// };

// describe("httpbin tests", () => {
//   it("responce code should be 200", () => {
//     cy.request(request).then((response) => {
//       assert.equal(200, response.status);

//       assert.equal("My test user-agent", response.requestHeaders["user-agent"]);
//     });
//   });
// });

//

// const request = {
//   method: "GET",
//   url: "https://httpbin.org/headers",
//   headers: {
//     Cookie: "cookieName=cookieValue",
//   },
//   failOnStatusCode: false,
// };

// describe("httpbin tests", () => {
//   it("responce code should be 200", () => {
//     cy.request(request).then((response) => {
//       assert.equal(200, response.status);

//       assert.equal("cookieName=cookieValue", response.requestHeaders.Cookie);
//     });
//   });
// });

//

// const request = {
//   method: "POST",
//   url: "https://reqres.in/api/users",
//   body: {
//     name: "Angie",
//     job: "AQAE",
//   },
// };

// describe("httpbin tests", () => {
//   it("responce code should be 201", () => {
//     cy.request(request).then((response) => {
//       //debugger;

//       assert.equal(201, response.status);

//       assert.equal("Angie", response.body.name);
//       cy.log(response);

//       assert.isTrue(response.duration <= 1000);
//     });
//   });
// });

//

describe("test with faker", () => {
  it("???", () => {
    function getRandomInt(max) {
      return Math.floor(Math.random() * max);
    }

    for (let index = 0; index < 10; index++) {
      const randomID = getRandomInt(999);

      const request = {
        url: "https://httpbin.org/headers",
        id: randomID,
      };

      cy.request(request).then((response) => {
        assert.isTrue(response.status == 200);
      });
    }
  });
});
