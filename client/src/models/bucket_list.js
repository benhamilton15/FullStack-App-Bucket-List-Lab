const PubSub = require('../helpers/pub_sub.js');
const RequestHelper = require('../helpers/request_helper.js');

const BucketList = function (url) {
  this.url = url;
  this.request = new RequestHelper(this.url);
}

BucketList.prototype.bindEvents = function () {
  PubSub.subscribe('FormView:New-list-item', (event) => {
    this.request.post(event.detail)
      .then((bucketList) => {
        PubSub.publish('BucketList:data-loaded', bucketList)
      })
      .catch(console.error);
  })

  PubSub.subscribe('ListItemView:list-item-delete-clicked', (event) => {
    this.deleteListItem(event.detail);
  })

}

BucketList.prototype.getData = function () {
  this.request.get()
    .then((bucket_list) => {
      PubSub.publish('BucketList:data-loaded', bucket_list);
    })
    .catch(console.error);
};

BucketList.prototype.deleteListItem = function (listItemID) {
  this.request.delete(listItemID)
    .then((bucketList) => {
      PubSub.publish('BucketList:data-loaded', bucketList)
    })
    .catch(console.error);
}



module.exports = BucketList;
