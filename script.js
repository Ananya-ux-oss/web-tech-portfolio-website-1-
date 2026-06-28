// Smooth scrolling for navigation links
const links = document.querySelectorAll('a[href^="#"]');

links.forEach(function(link) {

    link.addEventListener("click", function(event) {

        event.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }

    });

});

// Contact form message
const form = document.getElementById("contactForm");

if (form) {

    form.addEventListener("submit", function(event) {

        event.preventDefault();

        alert("Thank you for contacting me!");

        form.reset();

    });

}

// Log button clicks
const buttons = document.querySelectorAll("button");

buttons.forEach(function(button) {

    button.addEventListener("click", function() {

        console.log("A button was clicked!");

    });

});

// Change project card background when clicked
const projects = document.querySelectorAll(".project-card");

projects.forEach(function(project) {

    project.addEventListener("click", function() {

        this.style.backgroundColor = "#d3d3d3";

    });

});

// Display skill name when clicked
const skills = document.querySelectorAll(".skills-table td");

skills.forEach(function(skill) {

    skill.addEventListener("click", function() {

        alert("Skill: " + this.textContent);

    });

});

// Welcome message
window.onload = function () {

    console.log("Portfolio Loaded Successfully!");

};
