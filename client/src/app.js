const BucketListGridView = require('./views/grid_view.js');
const FormView = require('./views/form_view.js');
const BucketList = require('./models/bucket_list.js');
const url = 'http://localhost:3000/api/bucket-list';

document.addEventListener('DOMContentLoaded', () => {

  const bucketListForm = document.querySelector('form#bucket-list-form');
  const bucketListFormView = new FormView(bucketListForm)
  bucketListFormView.bindEvents();

  const bucketListContainer = document.querySelector('div#bucket-list');
  const bucketListGridView = new BucketListGridView(bucketListContainer);
  bucketListGridView.bindEvents();

  const bucketList = new BucketList(url);
  bucketList.bindEvents();
  bucketList.getData();


})
