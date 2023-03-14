const carousel = document.querySelector("carousel");
const dragging = (e) =>{
    console.scrollleft = e.pageX;
}
carousel.addEventListener("mousemove",dragging);