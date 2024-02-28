document.addEventListener("DOMContentLoaded", function() {
    var footwearLink = document.querySelector('.footwear-link');
    var dropdown = document.querySelector('.footwear-dropdown');

    footwearLink.addEventListener('click', function(event) {
        event.preventDefault();
        dropdown.style.display = dropdown.style.display === 'none' ? 'block' : 'none';
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var accLink = document.querySelector('.acc-link');
    var accdropdown = document.querySelector('.acc-dropdown');

    accLink.addEventListener('click', function(event) {
        event.preventDefault();
        accdropdown.style.display = accdropdown.style.display === 'none' ? 'block' : 'none';
    });
});

let modebtn = document.querySelector("button");
let currMode = "light";
let body = document.querySelector("body");

modebtn.addEventListener("click", () =>{
    if(currMode==="light"){
        currMode = "dark";
        // document.querySelector("body").style.backgroundColor="black";
        body.classList.add("dark");
        body.classList.remove("light");
    }
    else{
        currMode = "light";
        body.classList.add("light");
        body.classList.remove("dark");
        // document.querySelector("body").style.backgroundColor="white";
    }
    console.log(currMode);
})