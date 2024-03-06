const kmPrice = 0.21;

let tripLength = document.getElementById("kilometers");
let clientAge = document.getElementById("age");

function calcTicket() {
    if (clientAge.value < 18) {
        document.getElementById("result").innerHTML = ((((kmPrice * tripLength.value) * 80) / 100).toFixed(2) + '€');
    }
    else if (clientAge.value > 65) {
        document.getElementById("result").innerHTML = ((((kmPrice * tripLength.value) * 60) / 100).toFixed(2) + '€');
    }
    else {
        document.getElementById("result").innerHTML = ((kmPrice * tripLength.value).toFixed(2) + '€');
    }
}

const clearButton = document.querySelector('#clear-button');
clearButton.addEventListener('click', function() {
    document.querySelector('#kilometers').value = '';
    document.querySelector('#age').value = '';
    
    const userMessageDiv = document.querySelector('#result');
    userMessageDiv.innerHTML = '';
    userMessageDiv.classList.remove('active');
});