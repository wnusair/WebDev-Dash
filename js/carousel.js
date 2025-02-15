function loadAnnouncements() {
    new Glide('#competitions').mount()


}

//anything that needs the page to have loaded before executing
window.onload = function() {
    loadAnnouncements()
}

