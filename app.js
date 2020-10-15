const slider = document.querySelector('.items');
let isDown = false;
let startX;
let scrollLeft;
slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('active')
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
    console.log(scrollLeft)
})
slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('active')
})
slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('active')
})
slider.addEventListener('mousemove', (e) => {
    if (!isDown) return //stop running it;
    e.preventDefault();
    let x = e.pageX - slider.offsetLeft;
    let walk = (x - startX) * 3;
    slider.scrollLeft = scrollLeft - walk;
})