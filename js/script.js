// home image changing handeler

let homeImg = document.querySelector("#homeImg");

const homeFlipImgs = [
    {
        msg: "first message",
        img: "../medias/homeImg1.png"
    },

    {
        msg: "second msg",
        img: "../medias/homeImg2.png"
    }

]

let i=0;
let imgFilp = setInterval(() => {
    homeImg.classList.toggle("active");
    homeImg.innerHTML = `
        <p class="message">${homeFlipImgs[i]["msg"]}</p>
        <img id="homeImg_image" src="${homeFlipImgs[i]["img"]}" alt="">
    `
    i++;
    if(i == homeFlipImgs.length){
        i = 0;
    }
}, 6000);