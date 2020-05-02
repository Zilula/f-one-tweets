require('dotenv').config();
const request = require('request');

const credentials = `${process.env.TWITTER_CONSUMER_KEY}:${process.env.TWITTER_CONSUMER_SECRET}`;
const credentialsBase64Encoded = new Buffer(credentials).toString('base64');

request({
  url: 'https://api.twitter.com/oauth2/token',
  method:'POST',
  headers: {
    'Authorization': `Basic ${credentialsBase64Encoded}`,
    'Content-Type':'application/x-www-form-urlencoded;charset=UTF-8'
  },
  body: 'grant_type=client_credentials'
}, function(err, resp, body) {
  console.log(body); // the bearer token ...
});



curl --request POST --url 'https://api.twitter.com/1.1/account_activity/all/prod/webhooks.json?url=https%3A%2F%2Ff-one-tweets-server.herokuapp.com%2Fwebhook%2Ftwitter' -H 'authorization: OAuth oauth_consumer_key="iiJEpADqaejgpJUjnb65uZaC8", oauth_nonce="GENERATED", oauth_signature="GENERATED", oauth_signature_method="HMAC-SHA1", oauth_timestamp="GENERATED", oauth_token="AAAAAAAAAAAAAAAAAAAAAAREDgEAAAAAU0MkuTPfcpXKOc0FfUFY34Z0M0o%3DUaPf11j5wdBRCh6ccVo0Sl8nhmCXS8R2ZrYSjovjJhjNx6WgIL", oauth_version="1.0"'