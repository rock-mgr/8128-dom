async function fetchData() {

    // when we use relative URL, the starting point
    // where the script is
    const response = await axios.get("books.json");
    console.log(response.data);

    // return the retrieved data as the result of the 
    // function
    return response.data;

    let books = response.data;

    let outputDiv = document.querySelector("#output");

    // Create a list element
    let ul = document.createElement("ul");
    outputDiv.appendChild(ul);

    // Loop through the books using for...of
    for (let book of books) {
        let li = document.createElement("li");
        li.innerHTML = `<strong>${book.title}</strong> by ${book.author} - ${book.pages} pages`;
        ul.appendChild(li);
    }
}

document.addEventListener("DOMContentLoaded", async function () {
    const books = await fetchData();
    const bookContainer = document.querySelector("#book");
    for (let b of books) {
        const div = document.createElement('div');
        div.className = "card col";
        div.style.width = "18rem";
        div.innerHTML = `
            <img src="${b.image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${b.title}</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                    card’s content.
                <ul>
                    <li>Author: ${b.author}</li>
                    <li>Pages: ${b.pages}</li>
                </ul>
                </p>
        `;
        bookContainer.appendChild(div);
    }
})


