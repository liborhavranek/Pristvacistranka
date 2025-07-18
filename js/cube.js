document.addEventListener("DOMContentLoaded", () => {
    const overlay = document.querySelector(".grid-overlay");
    const cols = 12;
    const rows = 8;

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            const tile = document.createElement("div");
            tile.style.animationDelay = `${(r * 80) + (c * 40)}ms`;
            overlay.appendChild(tile);
        }
    }

    // Po dokončení animace dlaždice odstraníme
    setTimeout(() => {
        overlay.remove();
    }, 3000); // raději + buffer (celková doba animace)
});