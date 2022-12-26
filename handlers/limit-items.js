
const AWS = require("aws-sdk");
const docClient = new AWS.DynamoDB.DocumentClient();

//const isAuthenticated = require("./isAuthenticated");
//const isAdmin = require("./isAdmin");

async function limitItems(request){
  const count = Number(request.pathParams.count);

  try{
    const params = {
      TableName: "items-table",
      limit: count
    };

    let items = await docClient.scan(params).promise();
    return items.Items;
    

    /*let user = await isAuthenticated(request);
    let admin = isAdmin(user);

    if (user && admin){
      const params = {
        TableName: "users-table"
      };

      let items = await docClient.scan(params).promise();
      return users.Items;
    } else {
      return {
        error: "You are not authorized to make this request"
      }
    }*/
  } catch(err){
    console.log(err);
    return err;
  }
}

module.exports = limitItems;
