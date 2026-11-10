const request = require("supertest");
const app = require("./app");

describe("GET /", () => {
  it("responds with todo list data", async () => {
    const { body, statusCode } = await request(app).get("/");

    expect(statusCode).toBe(200);

    const thirdItem = body.data[2];

    expect(thirdItem.text).toBe("Eggs");
    expect(thirdItem.completed).toBe(false);
  });
});

describe("POST /", () => {
  it("appends a new item to the list and responds with the full list", async () => {
    const { body, statusCode } = await request(app)
      .post("/")
      .send({ text: "Peaches" });

    expect(statusCode).toBe(200);

    const lastItem = body.data[body.data.length - 1];

    expect(lastItem.text).toBe("Peaches");
    expect(lastItem.completed).toBe(false);
  });
});

describe("PUT /", () => {
  it("toggles the completed status of a list item", async () => {
    const { body, statusCode } = await request(app).put(
      "/b6d35095-def2-42c3-9319-a92b9895f93d"
    );

    expect(statusCode).toBe(200);

    const firstItem = body.data[0];

    expect(firstItem.text).toBe("Milk");
    expect(firstItem.completed).toBe(true);
  });
});
