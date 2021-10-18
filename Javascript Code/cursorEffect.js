var cursor = document.getElementById("cursor-event"); 
const scrollContainer = document.querySelector(".main-body");

// scrollContainer.addEventListener("wheel", e => { 
//     e.preventDefault();
//     scrollContainer.scrollLeft += e.deltaY
// })




document.onmousemove = e => { 
    cursor.setAttribute("style", "top: " + (e.pageY - 25) +  "px; left: " + (e.pageX - 25) + "px;")
}




