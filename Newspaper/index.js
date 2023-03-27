const readMoreLess = document.querySelector("#read-more-less");
const hiddenContent = document.querySelector("#hidden-content");
hiddenContent.style.display = "none";

readMoreLess.addEventListener('click', () => {
    if (readMoreLess.textContent === "Read More") {
        hiddenContent.style.display = "inline";
        readMoreLess.textContent = "Read Less";
    }
    else {
        hiddenContent.style.display = "none";
        readMoreLess.textContent = "Read More";
    }
});