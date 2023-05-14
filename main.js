/*
------------( Main Function )------------
-1- showAge()
-2- validatInputs()
*/
// Get Inputs
const dayInput = document.getElementById('DD');
const monthInput = document.getElementById('MM');
const yearInput = document.getElementById('YY');
const allInputs = Array.from(document.getElementsByTagName('input'));
const submitBtn = document.getElementById('submit')
// Get output element
const yearEl = document.getElementById('year');
const monthEl = document.getElementById('month');
const dayEl = document.getElementById('day');
const monthsDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
let date = new Date();
let day = date.getDate();
let month = 1 + date.getMonth();
let year = date.getFullYear();
submitBtn.onclick = () => {
    validate()
}

function validate() {
    if (dayInput.value != '' || monthInput.value != '' || yearInput.value != '') {
        preventInputsErrors(allInputs)
        if (yearInput.value > date.getFullYear() || yearInput.value < 1970) {
            yearInput.nextElementSibling.innerHTML = 'Must be a valid date';
            yearInput.nextElementSibling.style.display = 'block';
            yearInput.style.borderColor = 'hsl(0, 100%, 67%)'
            yearInput.previousElementSibling.style.color = 'hsl(0, 100%, 67%)'
        }
        if (monthInput.value > 12 || monthInput.value < 1) {
            monthInput.nextElementSibling.innerHTML = 'Must be a valid date';
            monthInput.nextElementSibling.style.display = 'block';
            monthInput.style.borderColor = 'hsl(0, 100%, 67%)'
            monthInput.previousElementSibling.style.color = 'hsl(0, 100%, 67%)'
        }
        if (dayInput.value > monthsDays[monthInput.value - 1] || dayInput.value < 1) {
            dayInput.nextElementSibling.innerHTML = 'Must be a valid date';
            dayInput.nextElementSibling.style.display = 'block';
            dayInput.style.borderColor = 'hsl(0, 100%, 67%)'
            dayInput.previousElementSibling.style.color = 'hsl(0, 100%, 67%)'
        }
    }
    // else { } 
    if (dayInput.value == '') {
        dayInput.style.borderColor = 'hsl(0, 100%, 67%)'
        dayInput.nextElementSibling.innerHTML = 'This Field Is Required';
        dayInput.nextElementSibling.style.display = 'block';
        dayInput.previousElementSibling.style.color = 'hsl(0, 100%, 67%)'
    }
    if (monthInput.value == '') {
        monthInput.style.borderColor = 'hsl(0, 100%, 67%)'
        monthInput.nextElementSibling.innerHTML = 'This Field Is Required';
        monthInput.nextElementSibling.style.display = 'block';
        monthInput.previousElementSibling.style.color = 'hsl(0, 100%, 67%)'
    }
    if (yearInput.value == '') {
        yearInput.style.borderColor = 'hsl(0, 100%, 67%)'
        yearInput.nextElementSibling.innerHTML = 'This Field Is Required';
        yearInput.nextElementSibling.style.display = 'block';
        yearInput.previousElementSibling.style.color = 'hsl(0, 100%, 67%)';
    }
    showAge()
}

function showAge() {
    if (dayInput.value > day) {
        day = day + monthsDays[month - 1];
        month = month - 1;
    }
    if (monthInput.value > month) {
        month = month + 12;
        year = year - 1;
    }
    dayEl.innerHTML = day - dayInput.value;
    monthEl.innerHTML = month - monthInput.value;
    yearEl.innerHTML = year - yearInput.value;
}

function preventInputsErrors(inputs) {
    inputs.forEach(input => {
        input.style.borderColor = 'hsl(0, 0%, 86%)';
        input.nextElementSibling.style.display = 'none';
        input.previousElementSibling.style.color = 'hsl(0, 1%, 44%)'
    })
}
