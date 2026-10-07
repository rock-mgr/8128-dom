document.addEventListener("DOMContentLoaded", function(){
    document.querySelector("#btnSearch")
    .addEventListener("click", async function (){
        const symbol = document.querySelector("#symbol").value; 
        if (symbol){
            const data = await fetchWeeklyData(symbol);
            
            const stockData = data['Weekly Time Series'];
            const dates = Object.keys(stockData);
            const convertedDates = dates.map(d => new Date(d));

            //const closePrices = [];
            closesPrices = dates.map((d) => stockData[0]['4.close']);
            drawChart(closesPrices,dates);
        }
    })
})

function drawChart(yAxis, xAxis){
    //Use apexChart example here
}