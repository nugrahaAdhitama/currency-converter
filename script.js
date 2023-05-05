const amountInput = document.getElementById("amount");
const fromCurrency = document.getElementById("from");
const toCurrency = document.getElementById("to");
const convertBtn = document.getElementById("convert-btn");
const resultText = documnet.getElementById("result-text");

convertBtn.addEventListener("click", convertCurrency);

async function fetchCurrencyData() {
    const response = await fetch("https://api.exchangeratesapi.io/latest?base=USD");
    const data = await response.json();
    return data.rates;
}

async function populateCurrencyList() {
    const rates = await fetchCurrencyData();
    const currencies = Object.keys(rates);

    for (const currency of currencies) {
        const option1 = document.createElement("option");
        const option2 = document.createElement("option");

        option1.value = currency;
        option1.text = currency;
        option2.value = currency;
        option2.text = currency;

        fromCurrency.add(option1);
        fromCurrency.add(option2)
    }
}

populateCurrencyList();

async function convertCurrency() {
    const amount = amountInput.value;
    const from = fromCurrency.value;
    const to = toCurrency.value;

    const rates = await fetchCurrencyData();
    const result =  amount * (rates[to] / rates[from]);

    resultText.textContent = `${amount} ${from} = ${result.toFixed(2)} ${to}`;
}