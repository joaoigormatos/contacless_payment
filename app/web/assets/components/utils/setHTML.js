function setHTML(o, html, clear) {
  // o: container to set the innerHTML
  // html: html text to set.
  // clear: if true, the container is cleared first (children removed)
  if (clear) o.innerHTML = '';

  // Generate a parseable object with the html:
  var dv = document.createElement('div');
  dv.innerHTML = html;

  // Handle edge case where innerHTML contains no tags, just text:
  if (dv.children.length === 0) {
    o.innerHTML = html;
    return;
  }

  for (var i = 0; i < dv.children.length; i++) {
    var c = dv.children[i];

    // n: new node with the same type as c
    var n = document.createElement(c.nodeName);

    // copy all attributes from c to n
    for (var j = 0; j < c.attributes.length; j++)
      n.setAttribute(c.attributes[j].nodeName, c.attributes[j].nodeValue);

    // If current node is a leaf, just copy the appropriate property (text or innerHTML)
    if (c.children.length == 0) {
      switch (c.nodeName) {
        case 'SCRIPT':
          if (c.text) n.text = c.text;
          break;
        default:
          if (c.innerHTML) n.innerHTML = c.innerHTML;
          break;
      }
    }
    // If current node has sub nodes, call itself recursively:
    else setHTML(n, c.innerHTML, false);
    o.appendChild(n);
  }
}

export default setHTML;
