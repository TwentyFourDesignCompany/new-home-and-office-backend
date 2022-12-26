
const AWS = require("aws-sdk");
const docClient = new AWS.DynamoDB.DocumentClient();

function getPurchases(request){
  return docClient.scan({
    TableName: "orders-table"
  }).promise()
  .then(result => result.Items);
}

module.exports = getPurchases;
