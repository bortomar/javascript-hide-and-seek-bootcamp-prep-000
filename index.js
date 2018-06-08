function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  document.querySelector('#nested .target').parentNode.removeChild(document.querySelector('#nested .target'));
}

function deepestChild() {
  /*var children =*/return [].slice.call(document.querySelectorAll('#grand-node *'), 0).pop();
  //return children[children.length-1];
}
