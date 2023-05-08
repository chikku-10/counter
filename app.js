//initial count
let count = 0;

// select value and buttons
const value = document.querySelector("#value");
const btnList = document.querySelectorAll(".btn");

//runs only once
console.log("running the JS file");

//forEach can be applied on the btnList(created using querySelectorAll) but other array methods might not work
btnList.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    //get all the classes in the currentTarget that is clicked
    const classes = e.currentTarget.classList;
    //check for decrease, increase class names in the button
    if (classes.contains("decrease")) {
      count--;
    } else if (classes.contains("increase")) {
      count++;
    } else {
      count = 0;
    }
    value.textContent = count;
  });
});
