const BASE_API_URL= "https://www.alphavantage.co/query";

async function fetchWeeklyData(symbol) {
    const response = await axios.get(BASE_API_URL, {
        params: {
            function: "TIME_SERIES_WEEKLY",
            symbol: symbol,
            apikey: "FNK0EJF9CLXXUMCV" // NOT SECURED, NOT RECOMMENDED
        }
    });
    return response.data;
}

async function fetchDailyData(symbol){
    const response = await axios.get(BASE_API_URL);
}