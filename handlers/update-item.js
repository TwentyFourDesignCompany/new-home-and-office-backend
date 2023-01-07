
const AWS = require("aws-sdk");
const docClient = new AWS.DynamoDB.DocumentClient();

//const isAuthenticated = require("./isAuthenticated");
//const isAdmin = require("./isAdmin");

async function updateItem(request){
  const item = request.body;

  try{
    params = {
      TableName: "items-table",
      Key: {
        id: item.id
      },
      UpdateExpression: `set 
        productName = :productName, 
        details = :details,
        category = :category,
        price = :price,
        stars = :stars,
        discount = :discount,
        images = :images,
        colors = :colors,
        productComment = :productComment,
        otherDetails = :otherDetails
      `,
      ExpressionAttributeValues: {
        ":productName": item.productName,
        ":details": item.details,
        ":category": item.category,
        ":price": item.price,
        ":stars": item.stars,
        ":discount": item.discount,
        ":images": item.images,
        ":colors": item.colors,
        ":productComment": item.productComment,
        ":otherDetails": item.otherDetails
      }
    };

    return await docClient.update(params).promise()
      .then(() => ({success: "success"}))
  } catch(err){
    return err;
  }
}

module.exports = updateItem;
