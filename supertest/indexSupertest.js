const request = require("supertest");
const app = require("../app");

describe("Checking that the index page works", function () {
  it("Should return status 200 when trying to access /", function () {
    return request(app).get("/").expect(200);
  });
});
