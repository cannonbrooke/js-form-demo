
var item = [];

window.onload = function() {
  var request = new XMLHttpRequest(); // runs after everything loads
  request.onload = function() {
    items = this.response;
    appendItemList(items);

  };
  request.responseType = 'json';
  request.open('GET', 'http://localhost:3000/items', true);
  request.send();
}

function appendItemList(items){
  if (!(items instanceof Array)){
    items = [items];
  }
  console.log(items);
  items.forEach(function (item){
    if (item.hasOwnProperty('description')){
    var paragraph = document.createElement('p');
    paragraph.innerHTML = item.description;
    document.body.appendChild(paragraph);
    }
  });
}

//=====================================================



var form = document.createElement('form');
// form.method = "POST"; //creates on server
// form.action = "http://localhost:3000/items";



form.onsubmit = function(event){
  event.preventDefault();
  var itemValue = document.querySelector('input').value;
  submitItem({description: itemValue});
  this.reset();
};

function submitItem(item){
  var request = new XMLHttpRequest();
  request.onload = function() {
    items = this.response;
    appendItemList(item);
  };
  request.responseType = 'json';
  request.open('POST', 'http://localhost:3000/items', true);
  request.setRequestHeader('Content-type', 'application/json')
  request.send(JSON.stringify(item));
}




// var input = document.createElement('input');
// input.name = "description";

// var input2 = document.createElement('input');
// input2.name = "name";

// var button = document.createElement('button');

new InputField('name');
new InputField('description');
new InputField('email');

function InputField(name){
  var input     = document.createElement('input');
      input.name = name;
      input.placeholder = name;
      form.appendChild(input);
}



var button = document.createElement('button');

button.innerHTML = "Submit";
button.type = "submit";
document.body.appendChild(form);
form.appendChild(button);
// form.appendChild(input);
// form.appendChild(input2);
// form.appendChild(button);
