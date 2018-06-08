function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  document.querySelector('#nested').removeChild(document.querySelector('#nested .target'));
}
