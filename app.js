
const Api = require('claudia-api-builder');
const api = new Api();

const purchase = require("./handlers/purchase");
const addItem = require("./handlers/add-item");
const updateItem = require("./handlers/update-item");
const allItems = require("./handlers/all-items");
const limitItems = require("./handlers/limit-items");
const getProduct = require("./handlers/get-product");
const deleteProduct = require("./handlers/delete-product");
const getPurchases = require("./handlers/get-purchases");

api.post("/items/add-item", (request) => {
  return addItem(request);
});

api.post("/items/update-item", (request) => {
  return updateItem(request);
});

api.get("/items/items", (request) => {
  return allItems(request);
});

api.get("/items/limit/{count}", (request) => {
  return limitItems(request);
});

api.get("/items/get-product/{id}", (request) => {
  return getProduct(request);
});

api.delete("/items/delete-product/{id}", (request) => {
  return deleteProduct(request);
});

api.get("/items/orders/purchases", (request) => {
  return getPurchases(request);
});

api.post("/items/orders/purchase", (request) => {
  return purchase(request);
});

module.exports = api;
