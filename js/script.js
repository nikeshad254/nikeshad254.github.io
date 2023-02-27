// home image changing handeler
const homeFlipImgs = [
  {
    msg: "my mission",
    img: "../medias/homeImg1.png",
  },

  {
    msg: "my moto",
    img: "../medias/homeImg2.png",
  },

  {
    msg: "my plans",
    img: "../medias/homeImg3.png",
  },

  {
    msg: "welcome",
    img: "../medias/homeImgLast.png",
  },
];

let homeImg = document.querySelector("#homeImg");
homeImg.innerHTML = `
        <p class="message">${homeFlipImgs[homeFlipImgs.length - 1]["msg"]}</p>
        <img id="homeImg_image" src="${
          homeFlipImgs[homeFlipImgs.length - 1]["img"]
        }" alt="">
    `;

let i = 0;
let imgFilp = setInterval(() => {
  homeImg.classList.toggle("active");
  homeImg.innerHTML = `
        <p class="message">${homeFlipImgs[i]["msg"]}</p>
        <img id="homeImg_image" src="${homeFlipImgs[i]["img"]}" alt="">
    `;
  i++;
  if (i == homeFlipImgs.length) {
    i = 0;
  }
}, 6000);

// home resume change handler

const ResumeProtfolio = {
  js: {
    logo: "../medias/icons/js.png",

    projects: [
      {
        title: "Typooz Typing Game",
        thumbnail: "../medias/projectImg/typooz.png",
        link: "https://github.com/ultimatum254/Typing-Tutor-Game-",
      },
      {
        title: "Typooz Typing Game",
        thumbnail: "../medias/projectImg/typooz.png",
        link: "https://github.com/ultimatum254/Typing-Tutor-Game-",
      },
    ],
  },

  jks: {
    logo: "../medias/icons/js.png",

    projects: [
      {
        title: "Typooz Typing Game",
        thumbnail: "../medias/projectImg/typooz.png",
        link: "https://github.com/ultimatum254/Typing-Tutor-Game-",
      },
      {
        title: "Typooz Typing Game",
        thumbnail: "../medias/projectImg/typooz.png",
        link: "https://github.com/ultimatum254/Typing-Tutor-Game-",
      },
    ],
  },
};

let resumeTechStack = document.getElementById("containers");
let projectContainer = document.getElementById("projectContainer");

for (let stack in ResumeProtfolio) {
  console.log(stack);
  resumeTechStack.innerHTML += `
          <a class="containerStack" onclick="changeBestProject('${stack}', this)">
            <img src="${ResumeProtfolio[stack].logo}" alt="">
            <p>${stack}</p>
          </a>
        `;
}

let containerStack = document.querySelectorAll(".containerStack");

// change button color back
function reColorStack() {
  for (let i = 0; i < containerStack.length; i++) {
    console.log("change color");
    containerStack[i].style.background =
      "linear-gradient(0deg, #5E28A7, #A76DE5)";
  }
}

// click to see special stack one
function changeBestProject(stack, e) {
  console.log(ResumeProtfolio[stack]);
  projectContainer.innerHTML = `
  <img src="${ResumeProtfolio[stack].projects[0].thumbnail}" alt="">
  <h3>${ResumeProtfolio[stack].projects[0].title}</h3>
  <a href="${ResumeProtfolio[stack].projects[0].link}">See Project</a>
  `;
  reColorStack();
  e.style.background = "#5E28A7";
}
