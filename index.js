let about = document.getElementsByClassName("about")[0];
about.addEventListener("click", function (e) {
    e.preventDefault();
    document.getElementById("about").scrollIntoView({
        behavior: "smooth"
    });
});

let contact = document.getElementsByClassName("contact")[0];
contact.addEventListener("click", function (e) {
    e.preventDefault();
    document.getElementById("contact").scrollIntoView({
        behavior: "smooth"
    });
});

let services = document.getElementsByClassName("services")[0];
services.addEventListener("click", function(e){
    e.preventDefault();
    document.getElementById("services").scrollIntoView({
        behavior:"smooth"
    });
});

let project = document.getElementsByClassName("project")[0];
project.addEventListener("click", function(e){
    e.preventDefault();
    document.getElementById("project").scrollIntoView({
        behavior:"smooth"
    });
});

let certificate = document.getElementsByClassName("certificate")[0];
certificate.addEventListener("click", function(e){
    e.preventDefault();
    document.getElementById("certificate").scrollIntoView({
        behavior:"smooth"
    });
});

