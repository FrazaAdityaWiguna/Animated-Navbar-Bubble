const sections = document.querySelectorAll("section");
const bubble = document.querySelector(".bubble");
const gradients = [
    "linear-gradient(to right top, #4da0b0, #d39d38)",
    "linear-gradient(to right top, #6a3093, #a044ff)",
    "linear-gradient(to right top, #8e0e00, #1f1c18)",
];

const options = {
    threshold: 0.7,
};

let observer = new IntersectionObserver(navCheck, options);

// Check jarak section
function navCheck(entries) {
    entries.forEach((entry) => {
        const className = entry.target.className;
        const activeAnchor = document.querySelector(`[data-page=${className}]`);

        const gradientIndex = entry.target.getAttribute("data-index");
        // getBoundingClientRect() : dapat mengakses width , height, position etc setiap tag ancor(a)
        const coords = activeAnchor.getBoundingClientRect();
        const directions = {
            height: coords.height,
            width: coords.width,
            top: coords.top,
            left: coords.left,
        };

        if (entry.isIntersecting) {
            bubble.style.setProperty("left", `${directions.left}px`);
            bubble.style.setProperty("top", `${directions.top}px`);
            bubble.style.setProperty("width", `${directions.width}px`);
            bubble.style.setProperty("height", `${directions.height}px`);
            bubble.style.background = gradients[gradientIndex];
        }
    });
}

sections.forEach((section) => {
    observer.observe(section);
});