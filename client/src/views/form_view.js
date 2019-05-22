const PubSub = require('../helpers/pub_sub.js');

const FormView = function (form) {
  this.form = form;
};

FormView.prototype.bindEvents = function () {
  this.form.addEventListener('submit', (event) => {
    this.handleSubmit(event);
  })
}

FormView.prototype.handleSubmit = function (event) {
  event.preventDefault();
  const newListItem = this.getDetails(event.target);
  PubSub.publish('FormView:New-list-item', newListItem)
  event.target.reset();
}

FormView.prototype.getDetails = function (event) {
  const newListItem = {
    task: event.task.value,
    difficulty: event.difficulty.value,
    date: event.date.value
  }
  return newListItem
}


module.exports = FormView;
