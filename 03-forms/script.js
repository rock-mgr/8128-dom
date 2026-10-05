const submitBtn = document.querySelector("#submitBtn");
submitBtn.addEventListener("click",function(){
    //it works for input type: text password email number
    const emailEl = document.querySelector("#email");
    const email = emailEl.value;
    console.log("email =", email);

    //const ageGroupRadioButtons = 
    // document.querySelectorAll("[name='age-group]");

    const selectAgeGroupRadioButton = 
    document.querySelector(".age-group:checked");
    const ageGroup = selectAgeGroupRadioButton.value;
    console.log("age group = ", ageGroup);

    const selectedHobbiesCheckboxes = document.querySelectorAll(".hobbies:checked");
    
    // let hobbies= [];
    // for(let c of selectedHobbiesCheckboxes) {
    //     hobbies.push(c.value);
    // }

    //selectedHobbiesCheckboxes is a Nodelist object
    // it does not support .map() to support we neeed Array.from
    let hobbies = Array.from(selectedHobbiesCheckboxes).map(c => c.value);

})