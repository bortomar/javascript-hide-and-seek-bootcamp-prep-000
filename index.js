function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  document.querySelector('#nested .target').parentNode.removeChild(document.querySelector('#nested .target'));
}
