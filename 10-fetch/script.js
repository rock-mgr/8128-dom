// fetch the content of an external asset
// as long as it is accessible by the HTTP protocol
// and is available via the internet

// fetch is an example of async operation
// when we called fetch, JS returns a promise (function that is executing in the background)
// we can call a function when the promise finishes
const promise = fetch("https://raw.githubusercontent.com/kunxin-chor/data-files-and-stuff/master/fruits.txt");

// call a function when the 
promise.then(function(response){
    console.log(response);
    return response.text();
}).then(function(data){
    console.log(data);
});

console.log("Just after calling fetch");
console.log(promise);

const response = axios.get("https://raw.githubusercontent.com/kunxin-chor/data-files-and-stuff/master/fruits.txt");
promise.then(function(response){
    console.log(response.data);
    const mainDiv = document.querySelector("#main");
    mainDiv.innerHtml = response.data;
});
