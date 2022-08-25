// Change image for each variation //
let img = document.querySelector('#imgSobre2');
let li1 = document.querySelector('#li1');
let li2 = document.querySelector('#li2');
let li3 = document.querySelector('#li3');
let li4 = document.querySelector('#li4');
let li5 = document.querySelector('#li5');
let li6 = document.querySelector('#li6');
let li7 = document.querySelector('#li7');

li1.addEventListener('click', () => {
    img.src = './assets/res/sub.png';
    img.style.width = "500px";
})
li2.addEventListener('click', () => {
    img.src = './assets/res/gift.png';
    img.style.width = "500px";
})
li3.addEventListener('click', () => {
    img.src = './assets/res/com.png';
    img.style.width = "500px";
})
li4.addEventListener('click', () => {
    img.src = './assets/res/cheer.png';
    img.style.width = "500px";
})
li5.addEventListener('click', () => {
    img.src = './assets/res/tip.png';
    img.style.width = "500px";
})
li6.addEventListener('click', () => {
    img.src = './assets/res/host.png';
    img.style.width = "500px";
})
li7.addEventListener('click', () => {
    img.src = './assets/res/raid.png';
    img.style.right = "100px";
    img.style.top = "100px";
    img.style.width = "350px";
    
})

const TECHNAME = document.getElementById('tech');
const LINK = document.getElementById('link');

const VSCODE = document.querySelector('.sk0');
const HTML = document.querySelector('.sk1');
const CSS3 = document.querySelector('.sk2');
const JS = document.querySelector('.sk3');
const TS = document.querySelector('.sk4');
const NODE = document.querySelector('.sk5');
const NPM = document.querySelector('.sk6');
const GIT = document.querySelector('.sk7');
const MYSQL = document.querySelector('.sk8');
const BOOT = document.querySelector('.sk9');
const REACT = document.querySelector('.sk10');
const MONGO = document.querySelector('.sk11');
const POSTGRE = document.querySelector('.sk12');
const BABEL = document.querySelector('.sk13');
const WEBPACK = document.querySelector('.sk14');
const JEST = document.querySelector('.sk15');
const HEROKU = document.querySelector('.sk16');
const ESLINT = document.querySelector('.sk17');


//  Change visibility of Techname label //
let SKILLS = document.querySelectorAll(".skills-item");
SKILLS.forEach(function(skill) {
    skill.addEventListener("click", function() {
        TECHNAME.style.visibility = "visible"
        TECHNAME.style.transform = "translateY(30px)"
        LINK.target = "_blank"
    });
});

VSCODE.addEventListener('click', () => {
    TECHNAME.innerHTML = "VS Code"
    LINK.href = "https://code.visualstudio.com/"
})
HTML.addEventListener('click', () => {
    TECHNAME.innerHTML = "HTML 5"
    LINK.href = "https://developer.mozilla.org/pt-BR/docs/Web/HTML"
})
CSS3.addEventListener('click', () => {
    TECHNAME.innerHTML = "CSS 3"
    LINK.href = "https://developer.mozilla.org/en-US/docs/Web/CSS"
})
JS.addEventListener('click', () => {
    TECHNAME.innerHTML = "JavaScript"
    LINK.href = "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript"
})
TS.addEventListener('click', () => {
    TECHNAME.innerHTML = "TypeScript"
    LINK.href = "https://www.typescriptlang.org/"
})
NODE.addEventListener('click', () => {
    TECHNAME.innerHTML = "Node.js"
    LINK.href = "https://nodejs.org/en/"
})
NPM.addEventListener('click', () => {
    TECHNAME.innerHTML = "NPM"
    LINK.href = "https://www.npmjs.com/"
})
GIT.addEventListener('click', () => {
    TECHNAME.innerHTML = "Git"
    LINK.href = "https://git-scm.com/"
})
MYSQL.addEventListener('click', () => {
    TECHNAME.innerHTML = "mySQL"
    LINK.href = "https://www.mysql.com/"
})
BOOT.addEventListener('click', () => {
    TECHNAME.innerHTML = "Bootstrap"
    LINK.href = "https://getbootstrap.com/"
})
REACT.addEventListener('click', () => {
    TECHNAME.innerHTML = "React"
    LINK.href = "https://pt-br.reactjs.org/"
})
MONGO.addEventListener('click', () => {
    TECHNAME.innerHTML = "Mongo DB"
    LINK.href = "https://www.mongodb.com/pt-br"
})
POSTGRE.addEventListener('click', () => {
    TECHNAME.innerHTML = "PostgreSQL"
    LINK.href = "https://www.postgresql.org/"
})
BABEL.addEventListener('click', () => {
    TECHNAME.innerHTML = "Babel"
    LINK.href = "https://babeljs.io/setup"
})
WEBPACK.addEventListener('click', () => {
    TECHNAME.innerHTML = "Webpack"
    LINK.href = "https://webpack.js.org/"
})
JEST.addEventListener('click', () => {
    TECHNAME.innerHTML = "JEST"
    LINK.href = "https://jestjs.io/pt-BR/"
})
HEROKU.addEventListener('click', () => {
    TECHNAME.innerHTML = "Heroku"
    LINK.href = "https://www.heroku.com/home"
})
ESLINT.addEventListener('click', () => {
    TECHNAME.innerHTML = "ESLint"
    LINK.href = "https://eslint.org/"
})