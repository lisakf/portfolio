// scripts.js
document.addEventListener("DOMContentLoaded", function() {
    const tabs = document.querySelectorAll(".tab");
    const projects = document.querySelectorAll(".project");

    tabs.forEach(tab => {
        tab.addEventListener("click", function() {
            // Remove active class from all tabs
            tabs.forEach(t => t.classList.remove("active"));
            // Add active class to clicked tab
            tab.classList.add("active");

            // Filter projects
            const category = tab.getAttribute("data-category");
            projects.forEach(project => {
                if (category === "all" || project.classList.contains(category)) {
                    project.style.display = "block";
                } else {
                    project.style.display = "none";
                }
            });
        });
    });
});
