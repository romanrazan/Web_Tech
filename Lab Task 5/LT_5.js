// Display current date and time in footer
document.addEventListener("DOMContentLoaded", () => {
    const dateTimeElement = document.getElementById("datetime");
    if (dateTimeElement) {
        const now = new Date();
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
        dateTimeElement.textContent = "Updated on: " + now.toLocaleDateString("en-US", options);
    }
});
