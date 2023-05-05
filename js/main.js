let exchangeRates;

document.getElementById('convert').addEventListener('click', convertCurrency);

async function init() {
    exchangeRates = await fetchExchangeRate();
    populateCurrencyList('from-currency');
    populateCurrencyList('to-currency');
}

function populateCurrencyList(selectId) {
    const select = document.getElementById(selectId);
    for (const currency in exchangeRates.rates) {
        const option = document.createElement('option');
        option.value = currency;
        option.textContent = currency;
        select.appendChild(option);
    }
}

function convertCurrency() {
    const amount = document.getElementById('amount').value;
    const fromCurrency = document.getElementById('from-currency').value;
    const toCurrency = document.getElementById('to-currency').value;

    if (!amount || !fromCurrency || !toCurrency) {
        alert('Please fill in all fields');
        return;
    }

    const fromExchangeRate = exchangeRates.rates[fromCurrency];
    const toExchangeRate = exchangeRates.rates[toCurrency];
    const convertedAmount = (amount / fromExchangeRate) * toExchangeRate;

    document.getElementById('result').textContent = `${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`;
}

init ();