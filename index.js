function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  document.querySelector('#nested .target').parentNode.removeChild(document.querySelector('#nested .target'));
}

function deepestChild() {
  /*var children =*/return document.querySelectorAll('#grand-node *').pop();
  //return children[children.length-1];
}
