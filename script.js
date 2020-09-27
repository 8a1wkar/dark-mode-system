// دۆخى رەش
function toggle_dark_mode() {
var app = document.getElementsByTagName("BODY")[0];
    if (localStorage.lightMode == "dark") {
			localStorage.lightMode = "dark";
app.setAttribute("data-light-mode", "dark");
} else {
localStorage.lightMode = "dark";
app.setAttribute("data-light-mode", "dark");
}		
}


// دۆخى سپى
function toggle_light_mode() {
var app = document.getElementsByTagName("BODY")[0];
    if (localStorage.lightMode == "light") {
			localStorage.lightMode = "light";
app.setAttribute("data-light-mode", "light");
} else {
localStorage.lightMode = "light";
app.setAttribute("data-light-mode", "light");
}		
}


var app = document.getElementsByTagName("BODY")[0];
    if (localStorage.lightMode == "dark"){
app.setAttribute("data-light-mode", "dark");
}