var container = document.getElementById('container');
var button;
var colors = ['red', 'purple', 'black'];

function createbutton() {
    for (var i = 0; i < 24; i++){
        button = document.createElement('button');
        container.appendChild(button);
        button.onclick = changecolor;
        button.innerHTML = i;
    }
}

function changecolor(){
    event.target.style.backgroundColor = colors[0];
    event.target.onclick = color2;
}

function color2(){
    event.target.style.backgroundColor = colors[1];
    event.target.onclick = color3;
}

function color3(){
    event.target.style.backgroundColor = colors[2];
    event.target.onclick = weg;
}

function weg(){
    event.target.remove()
}



createbutton();