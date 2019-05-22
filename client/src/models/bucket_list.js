const PubSub = require('../helpers/pub_sub.js');
const RequestHelper = require('../helpers/request_helper.js');

const BucketList = function (url) {
  this.url = url;
  this.request = new RequestHelper(this.url);
}

// BucketList.prototype.bindEvents = function () {
//   PubSub.subscribe('FormView:submission', (event) => {
//     this.
//   })
//
// }

BucketList.prototype.getData = function () {
  this.request.get()
    .then((bucket_list) => {
      PubSub.publish('BucketList:data-loaded', bucket_list);
    })
    .catch(console.error);
};



module.exports = BucketList;
