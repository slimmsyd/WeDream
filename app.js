
// Getting Elements and Classes 


var x = document.querySelector(".menu");
var y = document.querySelector(".header")





x.addEventListener("click", () => {
    if (x.style.display !== "block") {
        x.style.display ="none"
        y.style.display = "block"
      console.log("fjlsfj")
    }
})
