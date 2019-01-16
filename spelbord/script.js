var container = document.createElement('div');
container.classList.add('container');
document.body.appendChild(container);

var text = document.createElement('p');
var textvalue = document.createTextNode('Lingo');
text.appendChild(textvalue);
container.appendChild(text);