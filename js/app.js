pgh = document.querySelector("#paragraph");

icon = document.querySelector("#icon-sample");

icon.addEventListener("mouseover", (event) => {
    pgh.classList.remove('sink')
    pgh.classList.add('rise');
});

icon.addEventListener("mouseleave", (event) => {
    pgh.classList.remove('rise')
    pgh.classList.add('sink');
})