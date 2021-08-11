document.onmousemove = (e) => {
    cursor.style.left = (e.pageX - 25) + "px";
    cursor.style.top = (e.pageY -25 ) + "px";
    cursor.style.display ="block"
}
