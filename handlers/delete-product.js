
const AWS = require("aws-sdk");
const docClient = new AWS.DynamoDB.DocumentClient();

function getProduct(request){
  return docClient.delete({
    TableName: "items-table",
    Key: {
      id: request.pathParams.id
    }
  }).promise()
  .then(result => ({success: "success"}));
}

module.exports = getProduct;
