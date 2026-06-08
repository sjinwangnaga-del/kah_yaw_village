let current = 0;

function showSlide(n){
    let slides = document.querySelectorAll(".slide");

    if(n >= slides.length) current = 0;
    if(n < 0) current = slides.length - 1;

    slides.forEach(s => s.classList.remove("active"));
    slides[current].classList.add("active");
}

function changeSlide(n){
    current += n;
    showSlide(current);
}

setInterval(()=>{
    current++;
    showSlide(current);
},4000);

showSlide(current);

// IMAGE POPUP
function openImg(img){
    window.open(img.src);
}