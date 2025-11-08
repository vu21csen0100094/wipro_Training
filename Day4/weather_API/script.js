const amountInput = document.getElementById("amount");
const fromCurrency = document.getElementById("fromCurrency");
const toCurrency = document.getElementById("toCurrency");
const resultDiv = document.getElementById("result");
const convertBtn = document.getElementById("convertBtn");

// ExchangeRate API (Free)
const API_URL = "https://api.exchangerate-api.com/v4/latest/";

convertBtn.addEventListener("click", async () => {
  const amount = amountInput.value;
  const from = fromCurrency.value;
  const to = toCurrency.value;

  if (!amount) {
    resultDiv.textContent = "⚠️ Please enter an amount.";
    return;
  }

  try {
    // Fetch exchange rates for the selected 'from' currency
    const response = await fetch(`${API_URL}${from}`);
    if (!response.ok) throw new Error("Network error");
    
    const data = await response.json();
    const rate = data.rates[to];
    const converted = (amount * rate).toFixed(2);

    resultDiv.textContent = `${amount} ${from} = ${converted} ${to}`;
  } catch (error) {
    console.error("Error fetching data:", error);
    resultDiv.textContent = "❌ Failed to convert. Try again.";
  }
});
