function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  document.querySelector('#nested .target').parentNode.removeChild(document.querySelector('#nested .target'));
}

function deepestChild() {
  return [].slice.call(document.querySelectorAll('#grand-node *'), 0).pop();
}
