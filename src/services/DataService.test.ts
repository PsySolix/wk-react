import DataService from "./DataService";

// not a real unit test but else we have to start mocking global.fetch etc
describe("Fetch", () => {
  test("DataService: Request", async () => {
    const response = await DataService.request(
      "https://jsonplaceholder.typicode.com/todos"
    );
    expect(response.length).toBeGreaterThan(0);
  });
});
