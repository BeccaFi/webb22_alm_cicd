const request = require("supertest");
const app = require("../app");

describe("Checking that the users page works", function () {
  it("Should return status 200 when trying to access /users", function () {
    return request(app).get("/users").expect(200);
  });
  it("Should return users in json format", function () {
    return request(app).get("/users").expect("Content-Type", /json/);
  });
});
