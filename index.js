function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  document.querySelector('#nested .target').parentNode.removeChild(document.querySelector('#nested .target'));
}

function deepestChild() {
  var children = document.querySelectorAll('#grand-node *');
  children[children.length-1].parentNode.removeChild(children[children.length-1]);
}