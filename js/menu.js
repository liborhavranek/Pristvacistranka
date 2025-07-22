document.addEventListener("DOMContentLoaded", function () {
    var header = document.querySelector("[data-header]");
    if (!header) return;

    function toggleScrollClass() {
        if ((window.scrollY || window.pageYOffset) >= 50) {
            header.classList.add("is-scroll");
        } else {
            header.classList.remove("is-scroll");
        }
    }

    toggleScrollClass();
    window.addEventListener("scroll", toggleScrollClass);
});