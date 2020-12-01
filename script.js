
var $ = function(id){
    return document.getElementById(id);
}

let textarea = $("words");

const input = 'input.txt';
const reader = new FileReader();
reader.onload = function(){
    console.log(reader.result)
}

reader.readAsText(input);
