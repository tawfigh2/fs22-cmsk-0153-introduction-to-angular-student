const fs = require('fs');
const request = require("supertest");
import { app } from "@/index";

beforeAll(async () => {
  fs.copyFileSync("jsonTestServer/databases/dbForTest.json", "jsonTestServer/databases/db.json");
});
afterAll(done => {
  done();
});

describe('API items (Simple CRUD)', () => {

  it('Verify the total # of items', async () => {
    const response = await request(app).get("/api/menu/items");
    expect(response.statusCode).toBe(200);
    expect(response.text).toBeDefined();
    let jsonContent = JSON.parse(response.text);
    expect(jsonContent.length).toBe(3);
  })

  it('Verify record #2 data', async () => {
    const record2 = {
      "id": 2,
      "name": "Spicy Pizza",
      "price": 599,
      "description": "Blazing Good",
      "image": "whatabyte_pizza-sm.png"
    }
    const response = await request(app).get("/api/menu/items/2");
    expect(response.statusCode).toBe(200);
    let jsonContent = JSON.parse(response.text);
    expect(JSON.stringify(jsonContent)).toBe(JSON.stringify(record2));

  })

  it('Should create a new item in the menu', async () => {
    const res = await request(app)
      .post('/api/menu/items')
      .send({
        "name": "Salad",
        "price": 499,
        "description": "Fresh",
        "image": "whatabyte_salad-sm.png"
      })
    expect(res.statusCode).toEqual(201)
    const response = await request(app).get("/api/menu/items");
    expect(response.statusCode).toBe(200);
    expect(response.text).toBeDefined();
    let jsonContent = JSON.parse(response.text);
    expect(jsonContent.length).toBe(4);
  })

  it('Verify record #2 data after a price update', async () => {
    const newPrice = 688
    const newRecord2 = {
      "id": 2,
      "name": "Spicy Pizza",
      "price": newPrice,
      "description": "Blazing Good",
      "image": "whatabyte_pizza-sm.png"
    }
    const responseUpdateAction = await request(app)
      .put('/api/menu/items/2')
      .send({
        "price": newPrice,
      })
    expect(responseUpdateAction.statusCode).toBe(200);

    const responseAfterUpdate = await request(app).get("/api/menu/items/2");
    expect(responseAfterUpdate.statusCode).toBe(200);
    let jsonContent = JSON.parse(responseAfterUpdate.text);
    expect(JSON.stringify(jsonContent)).toBe(JSON.stringify(newRecord2));

  })

  it('Should delete an item in the menu', async () => {
    const res = await request(app).delete('/api/menu/items/2')

    expect(res.statusCode).toEqual(204)

    // API returns 404 for missing element
    const responseAfterUpdate = await request(app).get("/api/menu/items/2");
    expect(responseAfterUpdate.statusCode).toBe(404);

    // Verify the total # of items
    const response = await request(app).get("/api/menu/items");
    expect(response.statusCode).toBe(200);
    expect(response.text).toBeDefined();
    let jsonContent = JSON.parse(response.text);
    expect(jsonContent.length).toBe(3);
  })

})

