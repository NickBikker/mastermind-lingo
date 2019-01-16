var buttons = document.getElementById('container');
var background = document.body;


var color = ['red', 'blue', 'green'];

function buttoncreate(){
    for(var i = 0; i < color.length; i++){
        var button = document.createElement('button');
        buttons.appendChild(button);
        button.style.backgroundColor = color[i];
        button.innerHTML = 'dit is een mooie knop' + i;
        button.onclick = changecolor;
    }

}

function changecolor(){
    console.log(background);
    background.style.backgroundColor = this.style.backgroundColor;
}



buttoncreate();