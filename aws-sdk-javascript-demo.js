// run in console
// typically functions require callback
// 
// print formatted JSON
// JSON.stringify(arg,0,4)

const AWS = require('aws-sdk');
const s3 = new AWS.S3();

var credentials = new AWS.SharedIniFileCredentials({profile: 'default'});
AWS.config.credentials = credentials;




resp = s3.listBuckets().send(); null
// resp.data



var params = { 
    Bucket: 'bitwise-backups',
    Key: 'yolov4/test.mp4',
};
resp = s3.getObject(params).send(); null;
// resp.data.Body


