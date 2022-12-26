
const AWS = require("aws-sdk");
const docClient = new AWS.DynamoDB.DocumentClient();
const {v4} = require("uuid");

async function addItem(request){
  let item = request.body;

  try{
    return await docClient.put({
      TableName: "items-table",
      Item: {
        ...item,
        id: v4()
      }
    }).promise()
    .then(function(data){
      return {success: "success"};
    }).catch(function(err){
      return err;
    });
  } catch(err){
    return err;
  }
}


module.exports = addItem;
