// Write your code here.
async function fetchData(){
  const response = await axios.get("https://raw.githubusercontent.com/kunxin-chor/data-files-and-stuff/refs/heads/master/book.json");
  return response.data;
}

document.addEventListener("DOMContentLoaded", async function () {
    const bookData = await fetchData();
    console.log(bookData);

    document.querySelector("#title").textContent = bookData.title;
    document.querySelector("#author").textContent = bookData.author;
    document.querySelector("#year").textContent = bookData.year;
    const tagList = document.querySelector("#tags-list");

    // const tags  = [];
    // for(let t of bookData.tags){
    //     const liElement = document.createElement('li');
    //     liElement.textContent = t;  
    //       tags.push(liElement);
    // }

    const tagElements = bookData.tags.map(function(t){
        const liElement = document.createElement('li');
        liElement.className = "list-group-item";
        liElement.textContent = t;
        return liElement;
    });
    tagElements.forEach(function(tagElement){
        tagList.appendChild(tagElement);
    });


    const characterList = document.querySelector("#characters-list");
    for(let c of bookData.characters){
        const liElement = document.createElement("li");
        liElement.className = "list-group-item";
        liElement.innerText = `${c.name} - ${c.role} (${c.race})`
        characterList.appendChild(liElement);
    }






    // const bookTitle = document.querySelector("#title");
    // const bookAuthor = document.querySelector("#author");
    // const bookYear = document.querySelector("#year");

    // const spanBookTitle = document.createElement("span");
    // const spanBookAuthor = document.createElement("span");
    // const spanBookYear = document.createElement("span");

    // spanBookTitle.innerHTML = bookData.title;
    // spanBookAuthor.innerHTML = bookData.author;
    // spanBookYear.innerHTML = bookData.year;

    // bookTitle.appendChild(spanBookTitle);
    // bookAuthor.appendChild(spanBookAuthor);
    // bookYear.appendChild(spanBookYear);
    
});


// Use axios + async/await to fetch the book.json file from the URL
// above and render:
// - the book metadata into #title, #author, #year
// - one <li> per tag into #tags-list
// - one <li> per character into #characters-list, with text in the
//   format: "<name> — <role> (<race>)"