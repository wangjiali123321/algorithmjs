function Element(tagName, attributes, children) {
  this.tagName = tagName;
  this.attributes = attributes;
  this.children = children;
}

Element.prototype.render = function () {
  let root = document.createElement(this.tagName);
  let attributes = this.attributes;
  let children = this.children;
  for (let k in attributes) {
      if (attributes.hasOwnProperty(k)) {
          root.setAttribute(k, attributes[k]);
      }
  }
  children.forEach((item,index)=>{
      let itemDom = null;
      if(item instanceof Element) {
          itemDom = item.render();
      } else {
          itemDom = document.createTextNode(item)
      }
      root.appendChild(itemDom)
  })
  return root;
}

var el = function (tagName, attributes, children) {
  return new Element(tagName, attributes, children)
}


var ul = el('ul', { id: 'list' }, [
  el('li', { class: 'item' }, ['item 1']),
  el('li', { class: 'item' }, ['item 2']),
  el('li', { class: 'item' }, ['item 3']),
])


var ulRoot = ul.render()
console.log(ulRoot)
document.querySelector("#id").appendChild(ulRoot);