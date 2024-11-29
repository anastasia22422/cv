// JavaScript for Tabs
document.addEventListener("DOMContentLoaded", () => {
    const tabs = document.querySelectorAll(".tab");
    const contentItems = document.querySelectorAll(".content-item");

    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            // Deactivate all tabs
            tabs.forEach(t => t.classList.remove("active"));
            // Activate the clicked tab
            tab.classList.add("active");

            // Show the relevant content
            const target = tab.getAttribute("data-content");
            contentItems.forEach(item => {
                if (item.id === target) {
                    item.classList.remove("hidden");
                } else {
                    item.classList.add("hidden");
                }
            });
        });
    });
});
