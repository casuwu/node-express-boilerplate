const redis = require('redis');

const RDS_PORT = 6379;
const RDS_HOST = 'b53fbce6e927';
const RDS_OPTS = {};
const client = redis.createClient(RDS_PORT, RDS_HOST, RDS_OPTS);

client.on('error', (err) => {
  console.log(err);
});
