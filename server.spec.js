const supertest = require("supertest");

const server = require("./server.js");
const db = require("./data/dbConfig.js");

afterEach(async () => {
  await db("villagers2").truncate();
});

describe("GET /api/villagers/", () => {
  it("should return status code of 200", () => {
    return supertest(server)
      .get("/api/villagers/")
      .then((response) => {
        expect(response.status).toBe(200);
      });
  });
});

describe("GET /api/villagers/", () => {
  it("should return an array", () => {
    return supertest(server)
      .get("/api/villagers/")
      .then((response) => {
        expect(Array.isArray(response.body)).toBe(true);
      });
  });
});

describe("POST /api/villagers/", () => {
  it("should insert a new villager with the name bob", () => {
    return supertest(server)
      .post("/api/villagers/")
      .send({ name: "Bob1" })
      .then((response) => {
        expect(response.body.name).toBe("Bob1");
      });
  });
});

describe("POST /api/villagers/", () => {
  it("should have status code 201", () => {
    return supertest(server)
      .post("/api/villagers/")
      .send({ name: "Bob2" })
      .then((response) => {
        expect(response.status).toBe(201);
      });
  });
});

describe("DELETE /api/villagers/1", () => {
  it("should have a length of 0", () => {
    return supertest(server)
      .delete("/api/villagers/1")
      .then((response) => {
        expect(response.body).toEqual({});
      });
  });
});

describe("DELETE /api/villagers/2", () => {
  it("should have status code 500", () => {
    return supertest(server)
      .delete("/api/villagers/2")
      .then((response) => {
        expect(response.status).toBe(500);
      });
  });
});
