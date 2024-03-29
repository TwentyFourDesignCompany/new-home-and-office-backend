
const AWS = require("aws-sdk");
const docClient = new AWS.DynamoDB.DocumentClient();

function getProduct(request){
  return docClient.get({
    TableName: "items-table",
    Key: {
      id: request.pathParams.id
    }
  }).promise()
  .then(result => result.Item);
}

module.exports = getProduct;
