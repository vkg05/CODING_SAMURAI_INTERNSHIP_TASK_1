let inputBox = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = ''

buttons.forEach(element => {
    element.addEventListener('click', (btn)=> {
        if(btn.target.innerText == '='){
            string = String(eval(string))
            inputBox.value = string;
        }
        else if (btn.target.innerText == 'AC') {
            string = ''
            inputBox.value = string;
        }
        else if (btn.target.innerText == 'DEL') {
            string = string.substring(0,string.length-1);
            inputBox.value = string;
        } 
        else if (btn.target.id == 'plusMinus'){
            string = String(-eval(string))
            inputBox.value = string;
        }
        else {
            string += btn.target.innerText;
            inputBox.value = string;
        }
    })
});