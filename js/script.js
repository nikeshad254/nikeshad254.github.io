// home image changing handeler
const homeFlipImgs = [
    {
      "msg": "my mission",
      "img": "../medias/homeImg1.png"
    },
    
    {
      "msg": "my moto",
      "img": "../medias/homeImg2.png"
    },

    {
      "msg": "my plans",
      "img": "../medias/homeImg3.png"
    },

    {
      "msg": "welcome",
      "img": "../medias/homeImgLast.png"
    }
]



let homeImg = document.querySelector("#homeImg");
homeImg.innerHTML = `
        <p class="message">${homeFlipImgs[homeFlipImgs.length-1]["msg"]}</p>
        <img id="homeImg_image" src="${homeFlipImgs[homeFlipImgs.length-1]["img"]}" alt="">
    `

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