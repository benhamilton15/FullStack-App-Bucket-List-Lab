const parser = require('body-parser');
const express = require('express');
const app = express();
const path = require('path');
const MongoClient = require('mongodb').MongoClient;

const publicPath = path.join(__dirname, '../client/public');
app.use(express.static(publicPath));

app.use(parser.json());

MongoClient.connect('mongodb://localhost:2701')
  .then((client) => {
    const db = client.db('bucket_list');
    const bucketListCollection = db.collection('bucket_list');
    const bucketListRouter = createRouter(bucketListCollection);
    app.use('/api/bucket-list', bucketListRouter);
  })
  .catch(console.err);

  app.listen(3000, function () {
    console.log(`Listening on port ${ this.address().port }`)
  });
