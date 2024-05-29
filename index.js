document.getElementById("about_btn").click()
//list_books();

function change_dark_light_theme() {
    let new_string = document.body.className.replace("light", "dark")
    dark_mode_switcher_icon.innerHTML = "light_mode"
    if (new_string == document.body.className) {
        new_string = document.body.className.replace("dark", "light")
        dark_mode_switcher_icon.innerHTML = "dark_mode"
    }
    document.body.className = new_string;
}

function nav_button_click(event) {
    getting_started_btn.style.cssText = "width: 7em;"
    about_btn.style.cssText = "width: 7em;"
    methods_btn.style.cssText = "width: 7em;"
    event.srcElement.style.background = "var(--color-tertiary-container)"
    event.srcElement.style.width = "9em"
    let str = document.body.className
    
    if (event.srcElement.id == "methods_btn")
    {
        container_main.style.cssText = `grid-template-columns: 1fr 1fr 100fr;`
        document.body.className = `red_${str.substring(str.indexOf("_") + 1)}`;
        inside_panel_1.style.translate = "0px 10px"
        inside_panel_1.style.opacity = "0.2"
        inside_panel_2.style.translate = "0px 10px"
        inside_panel_2.style.opacity = "0.2"
        inside_panel_3.style.translate = "0px 0px"
        inside_panel_3.style.opacity = "1"
    }
    if (event.srcElement.id == "getting_started_btn")
    {
        container_main.style.cssText = `grid-template-columns: 1fr 100fr 1fr;`
        document.body.className = `blue_${str.substring(str.indexOf("_") + 1)}`;
        inside_panel_1.style.translate = "0px 10px"
        inside_panel_1.style.opacity = "0.2"
        inside_panel_2.style.translate = "0px 0px"
        inside_panel_2.style.opacity = "1"
        inside_panel_3.style.translate = "0px 10px"
        inside_panel_3.style.opacity = "0.2"
    }
    if (event.srcElement.id == "about_btn")
    {
        container_main.style.cssText = `grid-template-columns: 100fr 1fr 1fr;`
        document.body.className = `green_${str.substring(str.indexOf("_") + 1)}`;
        inside_panel_3.style.translate = "0px 10px"
        inside_panel_3.style.opacity = "0.2"
        inside_panel_2.style.translate = "0px 10px"
        inside_panel_2.style.opacity = "0.2"
        inside_panel_1.style.translate = "0px 0px"
        inside_panel_1.style.opacity = "1"
    }
}


function createRipple(event) {
    const button = event.currentTarget;

    const circle = document.createElement("span");
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
    circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
    circle.classList.add("ripple");

    const ripple = button.getElementsByClassName("ripple")[0];

    if (ripple) {
        ripple.remove();
    }

    button.appendChild(circle);
}

const buttons = document.getElementsByTagName("button");
for (const button of buttons) {
    button.addEventListener("mousedown", createRipple);
}

/*
const ctx = document.getElementById("book_cover_canvas").getContext("2d");
const book_cover_canvas = document.getElementById("book_cover_canvas");
book_cover_canvas.style.width = "1000px";
book_cover_canvas.style.height = "1000px";
book_cover_canvas.width = 1000;
book_cover_canvas.height = 1000;
ctx.fillStyle = "#FFFFFF";
ctx.fillRect(0, 0, 270, 420);
ctx.fillStyle = "#000000";
ctx.font = "30px poppinss    "
ctx.fillText("lung cancer", 10, 30)
ctx.font = "15px serif"
ctx.fillText("by Gringinu Deposits", 10, 60)
ctx.drawImage(document.getElementById("imag"), -40, 100, 340, 250)
ctx.fillText("(tutorial)", 10, 405)

javascript:
var elementsToKeep = document.querySelectorAll('img');
document.body.remove();
document.head.remove();
document.body = document.createElement("body");
document.head = document.createElement("head");
document.body.style.backgroundColor = 'rgb(26, 28, 24)';
var newImage = new Image();
newImage.src = elementsToKeep[4].currentSrc;
document.body.appendChild(newImage);
import PocketBase from 'pocketbase';
const pb = new PocketBase('http://127.0.0.1:8090');
const data = {
    "isbn": "test"
};
const record = await pb.collection('book_covers').create(data);*/

