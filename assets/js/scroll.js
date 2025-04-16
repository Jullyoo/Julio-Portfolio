document.addEventListener("scroll", function () {
    const header = document.getElementById("header");
    const secondSection = document.querySelector(".about_section"); 
    const sectionPosition = secondSection.getBoundingClientRect().top; 
    if (sectionPosition <= 0) {
        header.classList.add("scrolled"); 
    } else {
        header.classList.remove("scrolled");
    }
});