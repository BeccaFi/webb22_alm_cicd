const request = require("supertest");
const app = require("../app");

describe("Checking for correct url query inputs", function () {
  it("Should return status 200 when both values included", function () {
    return request(app).get("/calc/div?val1=50&val2=2").expect(200);
  });

  it("Should return status 400 when two values not included", function () {
    return request(app).get("/calc/div?val1=103").expect(400);
  });

  it("Should equal 12 when inserting 36 / 3", function () {
    return request(app).get("/calc/div?val1=36&val2=3").expect("36 / 3 = 12");
  });
});
