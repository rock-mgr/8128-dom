// document.querySelector("#title")
const titleEl = document.getElementById('title');
titleEl.style.fontFamily = "verdana";

// get all by class name of 'important'
const importantEls =document.getElementsByClassName('important');
Array.from (importantEls).forEach(function(el) {
    el.style.backgroundColor = "yellow";
});

// get all li by the class name of important
// and change to font color red
// consider using : document.querySelectorAll
const importantEl2 = document.getElementsByClassName('important');
for(let el of importantEl2){
    if (el.tagName.toLowerCase() == "li"){
        el.style.color="red";
    }
}

// const submitBtnEl = document.getElementById('submitBtn');
const submitBtnEl = document.querySelector('#submitBtn');
submitBtnEl.addEventListener("click", function(){
    // const emailEl = document.getElementsByName('email');
    // const email = emailEl[0];
    // const emailEl = document.querySelector(`[name="email"]`);
    const emailEl = document.querySelector("#email");
    const email = emailEl.value;
    console.log("email = ", email);

    const selectedHearAboutEl = document.querySelector(".hear-about:checked");
    const hearAbout = selectedHearAboutEl.value;
    console.log ("hear about = ", hearAbout);

    const selectedCheckboxes = document.querySelectorAll(".interest:checked");
    // const interests = [];
    // for (let c of selectedCheckboxes){
    //     interests.push(c);
    // }
    
    const interests = Array.from(selectedCheckboxes).map(function(checkbox){
        return checkbox.value;
    });
});