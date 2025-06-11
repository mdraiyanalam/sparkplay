// Scroll to top function
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Show/hide scroll-up button
const scrollUpBtn = document.getElementById('scrollUpBtn');
window.onscroll = () => {
    if (window.scrollY > 200) {
        scrollUpBtn.style.display = 'flex';
    } else {
        scrollUpBtn.style.display = 'none';
    }
};


document.addEventListener("DOMContentLoaded", function () {
    const yearSpan = document.getElementById("footer-year");
    yearSpan.textContent = new Date().getFullYear();
});
