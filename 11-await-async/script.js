
// await can only be used in a function marked as async
async function fetchFruits() {
    // we put await in front of a promise
    // to make JS to wait for the promise to finish 
    // before moving onto the next line
    const response = await axios.get("https://raw.githubusercontent.com/kunxin-chor/data-files-and-stuff/master/fruits.txt");
    const fruits = response.data.split("\n");
    console.log(fruits);
    const fruitUl = document.querySelector("#fruits");
    for (let f of fruits){
        if (f) {
            const liElement = document.createElement('li');
            liElement.innerHTML = f;
            fruitUl.appendChild(liElement);
        }
    }
}

