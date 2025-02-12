const swaggerAutogen = require("swagger-autogen")();

const doc = {
  info: {
    title: "InvTrack API",
    description: "A simple Express inventory track Mgmt API",
  },
  host: "localhost:3000",
  schemes: ["http"],
  components: {
    schemas: {
      Product: {
        type: "object",
        properties: {
          name: {
            type: "string",
          },
          description: {
            type: "string",
          },
          price: {
            type: "number",
          },
        },
      },
    },
  },
  paths: {
    "/products": {
      post: {
        tags: ["Product CRUD operations"],
        description: "Create a new product",
        operationId: "createProduct",
        requestBody: {
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Product",
              },
            },
          },
          required: true,
        },
        responses: {
          200: {
            description: "Successful response",
          },
        },
      },
      put: {
        tags: ["Product CRUD operations"],
        description: "Update an existing product",
        operationId: "updateProduct",
        requestBody: {
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Product",
              },
            },
          },
          required: true,
        },
        responses: {
          200: {
            description: "Successful response",
          },
        },
      },
    },
  },
};

const outputFile = "./swagger_output.json";
const endpointsFiles = ["./routes/index.js"];

swaggerAutogen(outputFile, endpointsFiles, doc);
