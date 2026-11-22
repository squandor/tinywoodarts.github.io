document.addEventListener("DOMContentLoaded", async () => {
    const tracking = await fetch("/js/google_tag_manager.html");

    if (tracking.ok) {
        const html = await tracking.text();
        document.head.insertAdjacentHTML("beforeend", html);
    }
});