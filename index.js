function toggleMenu() {
    const navLinks = document.querySelector('#nav-links');
    navLinks.classList.toggle('active');
}

function toggleFeatures(id) {
    const content = document.getElementById(id);
    
    if (content.style.display === "none" || content.style.display === "") {
        content.style.display = "flex";
    } else {
        content.style.display = "none";
    }
}

document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Form submitted!');
});