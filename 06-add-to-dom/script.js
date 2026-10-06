document.querySelector("#addBtn")
    .addEventListener("click",function(){
       // string to number 
        const newNumber = Number(document.querySelector("#addNumber").value);
        const numberList = document.querySelector("#numberList");
        //numberList.innerHTML = "<li>" + newNumber + "</li>";
        numberList.innerHTML += `<li>${newNumber}</li>`;
    });

document.querySelector("#addBtnAppendChild")
    .addEventListener("click",function(){
        // create a new <li> element
        // but it is detached from bod (not in the DOM)
        const liElement= document.createElement('li');
        liElement.innerHTML = newNumber;

        //add the new <li> element as child of the existing ul
        const numberList = document.querySelector("#numberList");
        numberList.appendChild(liElement);
    });