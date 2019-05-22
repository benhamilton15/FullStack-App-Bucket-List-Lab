const PubSub = require('../helpers/pub_sub.js')
const ListItemView = require('./list_item_view.js')


const BucketListGridView = function (containerElement) {
  this.containerElement = containerElement;
};

BucketListGridView.prototype.bindEvents = function () {
  PubSub.subscribe('BucketList:data-loaded', (event) => {
    this.render(event.detail);
  });
};

BucketListGridView.prototype.render = function (bucketList) {
  this.containerElement.innerHTML = '';
  const listItemView = new ListItemView(this.containerElement);
  bucketList.forEach((bucketListItem) => listItemView.render(bucketListItem));
};

module.exports = BucketListGridView;
