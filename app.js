document.body.style.border = "10px solid red";

setTimeout(() => {
    const element = document.querySelector('[data-icon="status-v3-unread"]');
    console.log(element);
    element.style.display = "none";
}, 5000);

