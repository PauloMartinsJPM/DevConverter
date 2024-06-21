
const form = document.getElementById('form');

form.addEventListener('submit', handleSubmit)

const inputValue = document.getElementById('value-real');
const selectedCurrency = document.getElementById('currency');
const result = document.getElementById('result');

let valueConverted = 0;

//form.addEventListener('submit', handleSubmit)

function handleSubmit(e) {

    e.preventDefault();

    if (!inputValue.value || inputValue.value < 0) {
        alert('Informe um valor correto!');
        return;
    } else if (!selectedCurrency.value) {
        alert('Escolha uma moeda');
        return;
    }  
    
    converter();
};

function converter() {
    if (selectedCurrency.value === 'eur') {
        valueConverted = inputValue.value * 6.22;
        result.innerHTML = valueConverted;
    } else if (selectedCurrency.value === 'dol') {
        valueConverted = inputValue.value * 5.37;
        result.innerHTML = valueConverted;
    }

    inputValue.value = '';
    selectedCurrency.value = '';

};

