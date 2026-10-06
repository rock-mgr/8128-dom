async function fetchData() {
    // when using relative URLS with axios
    // the starting point is the HTML file
    // that the script is called from
    const response = await axios.get('./data.json');
    console.log(response.data);

    // response.data will be the object from the JSON file
    console.log("book = ", response.data.book);
    console.log("pages = ", response.data.pages);
    return response.data;
}

document.addEventListener("DOMContentLoaded", async function(){
    const book = await fetchData();
    const bookUl = document.querySelector("#book");
    bookUl.innerHTML = `
        <li> Title: ${book.book}</li>
        <li> Pages: ${book.pages}</li>
        <li> Author: ${book.author}</li>
        <li> Borrow: ${book.borrow}</li>
    `
});