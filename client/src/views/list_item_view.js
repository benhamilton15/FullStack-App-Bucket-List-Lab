const PubSub = require('../helpers/pub_sub.js');

const ListItemView = function (containerElement) {
  this.containerElement = containerElement;
};

ListItemView.prototype.render = function (listItem) {
  const listItemContainer = document.createElement('div');
  listItemContainer.id = "list-item-container";

  const task = this.createDetail('Task', listItem.task);
  listItemContainer.appendChild(task);

  const difficulty = this.createDetail('Difficulty', listItem.difficulty);
  listItemContainer.appendChild(difficulty);

  const date = this.createDetail('Date', listItem.date);
  listItemContainer.appendChild(date);

  const deleteButton = this.createDeleteButton(listItem._id);
  listItemContainer.appendChild(deleteButton)



  this.containerElement.appendChild(listItemContainer);
}

ListItemView.prototype.createDeleteButton = function (listItemID) {
  const button = document.createElement('button');
  button.classList.add('delete-button');
  button.textContent = 'Delete'
  button.value = listItemID
  button.addEventListener('click', (event) => {
    PubSub.publish('ListItemView:list-item-delete-clicked', event.target.value)
  })

  return button;
}

ListItemView.prototype.createDetail = function (label, text) {
  const detail = document.createElement('h3');
  detail.textContent = `${label}: ${text}`;
  return detail;
}

module.exports = ListItemView;
