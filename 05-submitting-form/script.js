document.querySelector("#title")
.addEventListener('click',function(event){
    // event contains all event information
    console.log(event);
});

document.querySelector("#enquiry-form")
    .addEventListener("submit",function(event){

    // when the browser calls the event handler, it will pass
    // an event object as the first parameter 
    console.log(event.log);
    // preventDefault will cancel any browser's default action for the event
        event.preventDefault();
    console.log("the form has been submitted");

    const form = event.target; // get the form that is being submitted
    const elements = form.elements;
    console.log(elements);

    const email = elements.email.value;
    const hearAbout = elements["hear-about"].value;
    console.log(email,hearAbout);
    console.log(elements.interest);
    // let interests = [];
    // for (let i of elements.interests){
    //     if(i.checked){
    //         interests.push(i.value);
    //     }
    // }
    let interestCheckboxes = 
    Array.from(elements.interests).filter(function(i){
        return i.checked;
    })
    let interests = interestCheckboxes.map(function(checkbox){
        return checkbox.value;
    })
    console.log(interestCheckboxes);
    console.log(interests);

    // extreme advanced JS
    const selectedInterests = 
    Array.from(elements.interest)
    .filter(i => i.checked).map(i => i.value);

});
