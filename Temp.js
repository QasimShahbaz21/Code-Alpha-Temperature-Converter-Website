document.addEventListener('DOMContentLoaded', function () {
    const converterForm = document.getElementById('converter-form');
    const resultField = document.getElementById('result-field');

    converterForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const temperature = parseFloat(document.getElementById('temperature').value);
        const fromUnit = document.getElementById('from-unit').value;
        const toUnit = document.getElementById('to-unit').value;

        const convertedTemperature = convertTemperature(temperature, fromUnit, toUnit);

        resultField.value = convertedTemperature.toFixed(2);
    });

    function convertTemperature(value, fromUnit, toUnit) {
        if (fromUnit === toUnit) {
            return value;
        }

        if (fromUnit === 'Celsius' && toUnit === 'Fahrenheit') {
            return (value * 9/5) + 32;
        } else if (fromUnit === 'Fahrenheit' && toUnit === 'Celsius') {
            return (value - 32) * 5/9;
        } else if (fromUnit === 'Celsius' && toUnit === 'Kelvin') {
            return value + 273.15;
        } else if (fromUnit === 'Kelvin' && toUnit === 'Celsius') {
            return value - 273.15;
        } else if (fromUnit === 'Fahrenheit' && toUnit === 'Kelvin') {
            return (value - 32) * 5/9 + 273.15;
        } else if (fromUnit === 'Kelvin' && toUnit === 'Fahrenheit') {
            return (value - 273.15) * 9/5 + 32;
        } else {
            return value;
        }
    }

    const fromUnitSelect = document.getElementById('from-unit');
    const toUnitSelect = document.getElementById('to-unit');

    // Populate the dropdowns with temperature scales dynamically
    /*const temperatureScales = ['Celsius', 'Fahrenheit', 'Kelvin'];*/

    temperatureScales.forEach(scale => {
        const option = document.createElement('option');
        option.value = scale;
        option.textContent = scale;
        fromUnitSelect.appendChild(option.cloneNode(true));
        toUnitSelect.appendChild(option.cloneNode(true));
    });
});