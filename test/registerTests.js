const request = require("supertest");
const app = require("../app");

// SIGNUP-TEST
describe("POST /auth/signup", function () {
  it("Must respond with 200 message code - User already exists", function (done) {
    request(app)
      .post("/auth/signup")
      .send({
        name: "Martin",
        lastName: "Chopitea",
        photo:
          "https://img.freepik.com/vector-premium/muneco-nieve-navidad-mano-dibujado-vector-estilo-dibujos-animados_42349-200.jpg?w=2000",
        email: "testMartinChopitea@mail.com",
        role: "Admin",
        from: "google",
        country: "Argentina",
        password: "1234",
      })
      .expect(200)
      .end(function (err, res) {
        if (err) return done(err);
        return done();
      });
  });
  it("Must respond with 400 message code", function (done) {
    request(app)
      .post("/auth/signup")
      .send({})
      .expect(400)
      .end(function (err, res) {
        if (err) return done(err);
        return done();
      });
  });
  it("Must respond with 200 message code - SignUp from Form", function (done) {
    request(app)
      .post("/auth/signup")
      .send({
        name: "InÃ©s",
        lastName: "Galarza",
        photo:
          "https://img.freepik.com/psd-premium/mujer-morena-hispanica-joven-que-mira-arriba-mientras-que-sonrie_1368-41150.jpg?w=2000",
        email: "testInesGalarza@mail.com",
        role: "User",
        from: "form",
        country: "Peru",
        password: "1234",
      })
      .expect(200)
      .end(function (err, res) {
        if (err) return done(err);
        return done();
      });
  });
});

// LOGIN-TEST

describe("POST /auth/signin", function () {
  it("Must respond with 404 message code", function (done) {
    request(app)
      .post("/auth/signin")
      .send({})
      .expect(404)
      .end(function (err, res) {
        if (err) return done(err);
        return done();
      });
  });
  it("Must respond with 401 message code - SignIn from Form without Verify", function (done) {
    request(app)
      .post("/auth/signin")
      .send({
        email: "testInesGalarza@mail.com",
        from: "form",
        password: "1234",
      })
      .expect(401)
      .end(function (err, res) {
        if (err) return done(err);
        return done();
      });
  });
  it("Must respond with 200 message code - SignIn from Google", function (done) {
    request(app)
      .post("/auth/signin")
      .send({
        email: "testMartinChopitea@mail.com",
        from: "google",
        password: "1234",
      })
      .expect(200)
      .end(function (err, res) {
        if (err) return done(err);
        return done();
      });
  });
});