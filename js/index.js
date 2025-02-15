//INTERalliance Index Functions. Functions added to this are available on every page.

//This function detects whether a user is accessing the site on Desktop or Mobile.
let mode;
let test;
function checkMobile() {
    if (window.matchMedia("(min-width: 1164px)").matches) {
        
        mode = "desktop"
        document.querySelectorAll(".mobile-collapsible").forEach(function(collapsible) {
            collapsible.open = true
            text = collapsible.outerHTML
            text = text.replace('open=""', 'open="" onclick="return false"')
            collapsible.outerHTML = text
        })
    }
    else {
        mode = "mobile"
        document.querySelectorAll(".mobile-collapsible").forEach(function(collapsible) {
            collapsible.open = false
            text = collapsible.outerHTML
            text = text.replace('onclick="return false"', '')
            collapsible.outerHTML = text
        })
    }
    return mode;
}
checkMobile()

window.addEventListener("resize", function(event) {
    checkMobile()
})

function openCollapsible(button) {
    button.classList.toggle("active");
    var content = button.nextElementSibling;
    if (content.style.display === "flex") {
    content.style.display = "none";
    } else {
    content.style.display = "flex";
    }
};

function dropdown(section) {
    checkMobile()
    if ((mode == "desktop") && (document.querySelector('.accessible') == null)) {
        if (section == "for-you") {
            window.location = `/faq`

        }
    }
    else {
        document.getElementById(`${section}-dropdown`).className = "dropdown-content active"
    }

}


//This functions closes any and all of the dropdown menus if the user taps outside of the popup.

window.ontouchstart = function(event) {
    updateTarget(event)

} 

window.onclick = function(event) {
    updateTarget(event)
} 

function updateTarget(event) {
    if (!event.target.matches('.information')) {
        document.getElementById("information-dropdown").className = "dropdown-content"

    }
    if (!event.target.matches('.for-you')) {
        document.getElementById("for-you-dropdown").className = "dropdown-content"

    }
    if (!event.target.matches('.forms')) {
        document.getElementById("forms-dropdown").className = "dropdown-content"

    }
}

let index;

//This section of the code handles the Dark Mode popup.
document.querySelector("body").innerHTML += `<img onfocusin="gainFocus('light)" onfocusout="loseFocus('light')" tabindex=0 onclick="theme('light')" id="new-dark" src="/images/light.webp" class="" alt="Light Mode">`

//Checks if the user has already turned on Dark Mode.
if (localStorage.lightMode == "true") {
    theme("light")
}
else {
    //Check if the user's OS prefers Dark Mode
    if (window.matchMedia("(prefers-color-scheme: light)") == true) 
        { theme("light") }
    //Otherwise, enable light mode.
    else { theme("dark") }
}


//This function switches Dark Mode on and off.
function theme(theme) {
    baseurl = ``
    //DARK MODE
    if (theme == "dark") {
        document.getElementById("theme").href = `${baseurl}/css/dark.css`
        document.getElementById("new-dark").outerHTML = `<img tabindex=0 onfocusin="gainFocus('light')" onfocusout="loseFocus('light')" onclick="theme('light')" id="new-dark" src="/images/light.webp" class="" alt="Light Mode">`
        localStorage.lightMode = "false"
    }
    //LIGHT MODE
    else {
        localStorage.lightMode = "true"
        document.getElementById("theme").href = `${baseurl}/css/light.css`
        document.getElementById("new-dark").outerHTML = `<img tabindex=0  onfocusin="gainFocus('dark')" onfocusout="loseFocus('dark')" onclick="theme('dark')" id="new-dark" src="/images/dark.webp" class="" alt="Dark Mode">`


    }
}

let currentlyFocused = "";

function gainFocus(element) {
    currentlyFocused = element
}

function loseFocus(element) {
    currentlyFocused = ""
}

//Keyboard accessibility
window.onkeydown= function(key){
    //Note if currently using accessibility changes - for CSS
    if (key.key == "Tab"){ 
        document.querySelector("html").className = "accessible"
    }
    // Close dropdowns
    else if (key.key == "Escape"){
        document.querySelectorAll(".active").forEach(function(element) {
            element.className = "dropdown-content"

        })
        document.querySelector("html").className = ""
    } 
    //Open dropdowns/links
    else if (key.key == "Enter"){
        if (document.getElementById(currentlyFocused + "-dropdown") != null) {
            document.getElementById(currentlyFocused + "-dropdown").className = "dropdown-content active"
        }
        else if (currentlyFocused == "light") {
            theme("light")
        }
        else if (currentlyFocused == "dark") {
            theme("dark")
        }
        else if (currentlyFocused == "home") {
            document.location.href = "https://techolympics.org"
        }
    } 
}