const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');

const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
let p1 = document.getElementById('p1');
let p2 = document.getElementById('p2');

button1.onclick = function(){
    p1.textContent  = Number(input1.value) + Number(input2.value)
}
button2.onclick = function(){
    p1.textContent = Number(input1.value) - Number(input2.value)
 }

 eel.get_variable_i()(function(result) {
    // 'result' will contain the value of the Python variable 'i'
    console.log(result);
    // Now you can use 'result' in your JavaScript code
});
