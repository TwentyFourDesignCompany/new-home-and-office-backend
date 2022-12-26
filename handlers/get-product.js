
const AWS = require("aws-sdk");
const docClient = new AWS.DynamoDB.DocumentClient();

function getProduct(request){
  return docClient.get({
    TableName: "items-table",
    Key: {
      id: request.pathParams.count
    }
  }).promise()
  .then(result => result.Item);
}

module.exports = getProduct;
