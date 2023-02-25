let homeImg = document.querySelector("#homeImg");

const homeFlipImgs = [

]

let imgFilp = setInterval(() => {
    homeImg.classList.toggle("active");
}, 3000);