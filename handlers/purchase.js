
const AWS = require("aws-sdk");
const docClient = new AWS.DynamoDB.DocumentClient();
const {v4} = require("uuid");

async function purchase(request){
  let body = request.body;

  let tempItems = [];

  for (let i = 0; i < body.items.length; i++){
    tempItems.push({
      id: body.items[i].item.id,
      name: body.items[i].item.name,
      quantity: body.items[i].quantity,
      price: body.items[i].item.price
    })
  }

  try{
    return await docClient.put({
      TableName: "orders-table",
      Item: {
        ...body,
        items: tempItems,
        status: "pending",
        checked: false,
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

module.exports = purchase;
