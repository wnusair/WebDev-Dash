 // Logic for tabs on showcase page.
 function showcase(evt, project) {
    var i, project, header;
    theme = project.split("-")
    theme = theme[0]
    projects = document.querySelectorAll(`.${theme}.projects`);
    projects.forEach(function (project) {
        project.style.display = "none"
    })
    header = document.querySelectorAll(`.${theme}-header`);
    header.forEach(function (element) {
        element.className = element.className.replace(" active", "");
    })
    document.getElementById(project).style.display = "block";
    evt.currentTarget.className += " active";
}
//Automatically open First Place tab.
let first = document.querySelectorAll(".First")
first.forEach(function (element) {
    element.click()
})