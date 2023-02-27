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
        desc: "this typing game generate random alphabates from key sets and records your play, also has audios",
        thumbnail: "../medias/projectImg/typooz.png",
        link: "https://github.com/ultimatum254/Typing-Tutor-Game-",
      },
      {
        title: "Live Contest News",
        desc: "this site fetchs you live contests news from worlwide, made for learning fetch api",
        thumbnail: "../medias/projectImg/contest.png",
        link: "http://bit.ly/3yeoyvX",
      },
      {
        title: "Todo App",
        desc: "saves your task, you can create read or delete it's todo",
        thumbnail: "../medias/projectImg/todoBS.png",
        link: "http://bit.ly/3SzxGED",
      },
    ]
  },

  HTML_CSS: {
    logo: "../medias/icons/htmlncss.png",

    projects: [
      {
        title: "Instagram Clone",
        desc: "tried to copy designs of instagram as it is , quite nice right?",
        thumbnail: "../medias/projectImg/instaCopyCSS.png",
        link: "http://bit.ly/3mbvGGh",
      },
      {
        title: "Water Droplet Effect",
        desc: "text background changed into water droplet type, used gradients",
        thumbnail: "../medias/projectImg/waterDropCSS.png",
        link: "http://bit.ly/3KHOirQ",
      },
      {
        title: "Facebook Profile Copy",
        desc: "copied mobile version of facebook and created sth similar",
        thumbnail: "../medias/projectImg/fbCopyCSS.png",
        link: "http://bit.ly/3SFaHIf",
      },
    ]
  },

  Java: {
    logo: "../medias/icons/java.png",

    projects: [
      {
        title: "Login and Form Validation",
        desc: "login system with id and pass, then results in some action after login",
        thumbnail: "../medias/projectImg/loginFormJava.png",
        link: "http://bit.ly/3xSsrpY",
      },
      {
        title: "Input Print Graphical",
        desc: "accept input from user and prints all made in java swing",
        thumbnail: "../medias/projectImg/inputPrintJava.png",
        link: "http://bit.ly/3IXdYj2",
      }
    ]
  },

  PHP: {
    logo: "../medias/icons/php.png",

    projects: [
      {
        title: "Login and Adv. CRUD",
        desc: "advanced crud made using advanced topics of php, like session.. accepts files and handeles too",
        thumbnail: "../medias/projectImg/mvcLogin.png",
        link: "http://bit.ly/3IyOcjx",
      },
      {
        title: "Baic CRUD",
        desc: "accept data from user and stores in mysql data base allows to delete, read and update too",
        thumbnail: "../medias/projectImg/simpleCURD.png",
        link: "http://bit.ly/3Zj3hfQ",
      },
    ]
  },

  BootStrap: {
    logo: "../medias/icons/bootstrap.png",

    projects: [
      {
        title: "Todo By Bootstrap",
        desc: "todo app backend by js but front end made using bootstrap quite reponsive",
        thumbnail: "../medias/projectImg/todoBS.png",
        link: "http://bit.ly/3SzxGED",
      },
      {
        title: "CRUD BootStrap",
        desc: "crud php project all login, display else.. done using bootstrap classes",
        thumbnail: "../medias/projectImg/mvcLogin.png",
        link: "http://bit.ly/3IyOcjx",
      }
    ]
  },

  React: {
    logo: "../medias/icons/react.png",

    projects: [
      {
        title: "News App",
        desc: "news reading app using react , has spinner, can previous next, made using api which works on development version only",
        thumbnail: "../medias/projectImg/newsMonkey.png",
        link: "http://bit.ly/3y0p9AU",
      }
    ]
  },

  C: {
    logo: "../medias/icons/c.png",

    projects: [
      {
        title: "Institute DB System",
        desc: "a whole data base system for institute to create institute, for student to login , teacher to manage data all in C",
        thumbnail: "../medias/projectImg/institute.png",
        link: "http://bit.ly/3mef9RW",
      }
    ]
  },
};

let resumeTechStack = document.getElementById("containers");
let projectContainer = document.getElementById("projectContainer");
let portfolioTopic = document.getElementById("portfolioTopic");
let portfolioProjects = document.getElementById("portfolioProjects");

for (let stack in ResumeProtfolio) {
  // console.log(stack);
  resumeTechStack.innerHTML += `
          <a class="containerStack" onclick="changeBestProject('${stack}', this)">
            <img src="${ResumeProtfolio[stack].logo}" alt="">
            <p>${stack.toUpperCase()}</p>
          </a>
        `;
  portfolioTopic.innerHTML += `
    <li class="onePortfolio" onclick="changePortfolioProject('${stack}', this)">${stack.toUpperCase()}</li>
  
  `;

}

let containerStack = document.querySelectorAll(".containerStack");

// change button color back
function reColorStack() {
  for (let i = 0; i < containerStack.length; i++) {
    // console.log("change color");
    containerStack[i].style.background =
      "linear-gradient(0deg, #5E28A7, #A76DE5)";
  }
}

// click to see special stack one
function changeBestProject(stack, e) {
  // console.log(ResumeProtfolio[stack]);
  let proj = ResumeProtfolio[stack].projects[0];
  projectContainer.innerHTML = `
  <img src="${proj.thumbnail}" alt="">
  <h3>${proj.title}</h3>
  <a href="${proj.link}" target="_blank">See Project</a>
  `;
  reColorStack();
  e.style.background = "#5E28A7";
}


let onePortfolio = document.querySelectorAll(".onePortfolio");

function reColorProject() {
  for (let i = 0; i < onePortfolio.length; i++) {
    // console.log("change color");
    onePortfolio[i].style.background = "none";
  }
}

//click to see projects on side
function changePortfolioProject(stack, e){

  portfolioProjects.innerHTML = "";
  for(let i=0; i<ResumeProtfolio[stack].projects.length; i++){
    let proj = ResumeProtfolio[stack].projects[i];
    portfolioProjects.innerHTML +=
    `
                <li class="one-proj">
                    <img src="${proj.thumbnail}" alt="">
                    <h2>${proj.title}</h2>
                    <p>${proj.desc}</p>
                    <a href="${proj.link}" target="_balnk">See Project..</a>
                </li>
    `;
  }
  reColorProject();
  e.style.background = "#0d0245";
}