document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("swap-form");
    const inputAmount = document.getElementById("input-amount");
    const outputAmount = document.getElementById("output-amount");
    const loading = document.getElementById("loading");
    const button = form.querySelector("button");
    form.addEventListener("submit", async function (e) {
        e.preventDefault();
        const amount = parseFloat(inputAmount.value);
        if (inputAmount.value.trim() === "" || amount <= 0) {
            alert("Please enter a valid number");
            return;
        }
        loading.classList.remove("hidden");
        button.disabled = true;
        outputAmount.value = "";
        try {
            const response = await fetch("https://api.exchangerate-api.com/v4/latest/USD");
            const data = await response.json();
            const rate = data.rates["VND"];
            if (rate) {
                const result = (amount * rate).toFixed(2);
                outputAmount.value = result;
            } else {
                alert("Unable to fetch exchange rate. Please try again");
            }
        } catch (err) {
            alert("An error occurred, please check your network connection");
        }

        setTimeout(() => {
            loading.classList.add("hidden");
            button.disabled = false;
        }, 2000);
    });
});
