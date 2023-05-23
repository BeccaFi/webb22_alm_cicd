const request = require("supertest");
const app = require("../app");

describe("Checking for correct url query inputs", function () {
  it("Should return status 200 when both values included", function () {
    return request(app).get("/calc/add?val1=2&val2=2").expect(200);
  });

  it("Should return status 400 when two values not included", function () {
    return request(app).get("/calc/add?val1=2").expect(400);
  });

  it("Should equal 18 when inserting 5 + 13", function () {
    return request(app).get("/calc/add?val1=5&val2=13").expect("5 + 13 = 18");
  });
});
