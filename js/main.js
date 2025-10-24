document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
    let count = 1;

    sections.forEach(section => {
        const title = section.querySelector("h2");
        if (title) {
            title.textContent = "Section " + count + ": " + title.textContent;
            count++;
        }
    });
});
