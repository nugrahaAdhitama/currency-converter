const API_URL = 'https://api.exchangerate-api.com/v4/latest/USD';

async function fetchExchangeRate() {
    try {
        const response = await fetch(API_URL);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching exchange rates:', error);
    }
}