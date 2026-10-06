const fruits = ["apple", "banana", "orange", "pineapples"];
const fruitList = document.querySelector("#fruit-list"); 
for (let f of fruits){
    fruitList.innerHTML += `<li class="list-group-item">${f}</li>`;
}

// using appendChild
const fruitList2 = document.querySelector("#fruit-list2");
fruits.forEach(function(f){
    const liElement = document.createElement('li');
    liElement.classList.add("list-group-item");
    liElement.innerHTML = f;
    // liElement.className = "list-group-item";

    fruitList2.appendChild(liElement);
})