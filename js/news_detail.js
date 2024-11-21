document.addEventListener("DOMContentLoaded", () => {
    // Get the tab elements
    const activitiesTab = document.getElementById("activities");
    const yearbookTab = document.getElementById("yearbook");

    // Get the page elements
    const activitiesPage = document.getElementById("activities__page");
    const yearbookPage = document.getElementById("yearbook__page");

    const handleTabClick = (clickedTab, otherTab, showPage, hidePage) => {
        // Remove the active class from both tabs
        activitiesTab.classList.remove("border__bottom__line");
        yearbookTab.classList.remove("border__bottom__line");

        // Add the active class to the clicked tab
        clickedTab.classList.add("border__bottom__line");

        // Show the corresponding page
        showPage.style.display = "block";

        // Hide the other page
        hidePage.style.display = "none";
    };

    // Add event listeners
    activitiesTab.addEventListener("click", () => handleTabClick(activitiesTab, yearbookTab, activitiesPage, yearbookPage));
    yearbookTab.addEventListener("click", () => handleTabClick(yearbookTab, activitiesTab, yearbookPage, activitiesPage));
});
