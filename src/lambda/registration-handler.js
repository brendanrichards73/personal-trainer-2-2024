var AWS = require('aws-sdk');
AWS.config.update({region: 'us-east-1'});

exports.handler = async (event) => {
  console.log('TableName', process.env.TableName);
  const body = JSON.parse(event.body);

  var ddb = new AWS.DynamoDB();

  var checkParams = {
    Key: {
      userID: {
        S: body.text,
      },
    },
    TableName: process.env.TableName,
  };
  try {
    const checkUserID = await ddb.getItem(checkParams).promise();
    console.log('Check userID', checkUserID);

    if (checkUserID.Item !== undefined) {
      return {
        statusCode: '400',
        body: JSON.stringify('user name already taken'),
      };
    }
    var putParams = {
      TableName: process.env.TableName,
      Item: {
        userID: {S: body.text},
        password: {S: body.password},
      },
    };

    const result = await ddb.putItem(putParams).promise();
    console.log('Result', result);

    return {
      statusCode: '201',
      body: JSON.stringify('created user'),
    };
  } catch (error) {
    console.error(error);

    return {
      statusCode: '503',
      body: JSON.stringify('something went wrong'),
    };
  }
};