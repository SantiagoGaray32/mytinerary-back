const request = require("supertest");
const app = require("../app");

describe("POST /cities", function () {
  it("Must respond with 201 status code", function (done) {
    request(app)
      .post("/cities")
      .send({
        //INSERTAR NUESTRO MODEL DE CITY?
      })
      .expect(201, done);
  });
});

it("Must respond with 400 status code", function (done) {
  request(app)
    .post("/cities")
    .send({})
    .expect(400)
    .end(function (err, res) {
      if (err) return done(err);
      return done();
    });
});
