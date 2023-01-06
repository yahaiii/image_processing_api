import app from "../index";
import supertest from "supertest";

const request: supertest.SuperTest<supertest.Test> = supertest(app);

// CHECK SERVER UP

describe("Express server", () => {
  it("should be set up correctly", () => {
    expect(app).toBeDefined();
    expect(app.listen).toBeDefined();
  });
});

describe(" GET / ", (): void => {
  it("should respond with OK", async (): Promise<void> => {
    const response: supertest.Response = await request.get("/");
    expect(response.statusCode).toBe(200);
  });
});

// RESIZING SERVICE TESTS
// describe('Check all resizing', (): void => {
//     describe(' Resize with valid parameter ', (): void => {
//         it('should respond with OK', async (): Promise<void> => {
//             const response: supertest.Response = await request.get('/api');
//             expect(response.statusCode).toBe(200);
//         });
//     });
// });
