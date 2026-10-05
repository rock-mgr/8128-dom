// try
// 1. make sure the number in the counter cannot go above 10
// and cannot go below -10
// 2. when the number is even, counter is green. 
// when the number is odd, counter is red.
// 3. explore on what localstorage is, add a button


// Student's solution
  function studentSolution() {
    // Implement the counter functionality
    const incrementBtnEl = document.querySelector("#incrementBtn");
    incrementBtnEl.addEventListener("click",function(){
        const counterEl = document.querySelector("#countDisplay");
        counterEl.innerHTML= Number(counterEl.innerHTML) + 1;
    })
    const decrementBtnEl = document.querySelector("#decrementBtn");
    decrementBtnEl.addEventListener("click",function(){
        const counterEl = document.querySelector("#countDisplay");
        counterEl.innerHTML= Number(counterEl.innerHTML) - 1;
    })
  }
  
  // Call the student's solution
  studentSolution();

  function betterSolution(){
    let counterValue = 0;
    const incrementBtnEl = document.querySelector("#incrementBtn");
    const decrementBtnEl = document.querySelector("#decrementBtn");
    const counterEl = document.querySelector("#countDisplay");

    function updateCounter(){
        counterEl.innerHTML = counterValue;
    }

    incrementBtnEl.addEventListener("click", function(){
        counterValue++;
        updateCounter();
    })
     decrementBtnEl.addEventListener("click", function(){
        counterValue--;
        updateCounter();
    })

  }

  betterSolution();