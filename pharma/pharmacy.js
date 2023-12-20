function comparePrices() {
    // In a real-world scenario, you would make an API call to fetch prices from different sites
    // For simplicity, let's assume you have the prices in an array
    const medicinePrices = {
        "SiteA": 10.99,
        "SiteB": 9.99,
        "SiteC": 12.99
    };

    const medicineName = document.getElementById("medicineName").value.trim().toLowerCase();

    if (!medicineName) {
        alert("Please enter a valid medicine name.");
        return;
    }

    const lowestPriceSite = findLowestPriceSite(medicinePrices);
    displayResult(medicineName, lowestPriceSite);
}

function findLowestPriceSite(prices) {
    let lowestPrice = Infinity;
    let lowestPriceSite = "";

    for (const site in prices) {
        if (prices.hasOwnProperty(site)) {
            const price = prices[site];
            if (price < lowestPrice) {
                lowestPrice = price;
                lowestPriceSite = site;
            }
        }
    }

    return lowestPriceSite;
}

function displayResult(medicineName, lowestPriceSite) {
    const resultTextElement = document.getElementById("resultText");
    if (lowestPriceSite) {
        resultTextElement.innerHTML = `The lowest price for ${medicineName} is available at ${lowestPriceSite}.`;
    } else {
        resultTextElement.innerHTML = `Sorry, we couldn't find prices for ${medicineName}.`;
    }
}
