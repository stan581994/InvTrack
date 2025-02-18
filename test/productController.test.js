const request = require("supertest");
const express = require("express");
const productRouter = require("../routes/products"); // Adjust the path as needed
const Product = require("../models/product");

const app = express();
app.use(express.json());
app.use("/products", productRouter);

jest.mock("../models/product");

describe("Product Controller", () => {
  describe("GET /products", () => {
    it("should return all products", async () => {
      const mockProducts = [
        {
          productId: "P001",
          name: "Product 1",
          description: "Description 1",
          price: 100,
          quantity: 10,
          supplierId: "S001",
        },
        {
          productId: "P002",
          name: "Product 2",
          description: "Description 2",
          price: 200,
          quantity: 20,
          supplierId: "S002",
        },
      ];
      Product.find.mockResolvedValue(mockProducts);

      const response = await request(app).get("/products");

      expect(response.status).toBe(200);
      expect(response.body).toEqual(mockProducts);
    });

    it("should handle server error", async () => {
      Product.find.mockRejectedValue(new Error("Server Error"));

      const response = await request(app).get("/products");

      expect(response.status).toBe(500);
      expect(response.body).toEqual({ message: "Server Error" });
    });
  });

  describe("GET /products/:productId", () => {
    it("should return a product by ID", async () => {
      const mockProduct = {
        productId: "P001",
        name: "Product 1",
        description: "Description 1",
        price: 100,
        quantity: 10,
        supplierId: "S001",
      };
      Product.findById.mockResolvedValue(mockProduct);

      const response = await request(app).get("/products/P001");

      expect(response.status).toBe(200);
      expect(response.body).toEqual(mockProduct);
    });

    it("should return 404 if product not found", async () => {
      Product.findById.mockResolvedValue(null);

      const response = await request(app).get("/products/P001");

      expect(response.status).toBe(404);
      expect(response.body).toEqual({ message: "Product not found" });
    });

    it("should handle server error", async () => {
      Product.findById.mockRejectedValue(new Error("Server Error"));

      const response = await request(app).get("/products/P001");

      expect(response.status).toBe(500);
      expect(response.body).toEqual({ message: "Server Error" });
    });
  });
});
