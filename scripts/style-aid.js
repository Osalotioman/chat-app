const sendButton = document.querySelector(".send_icon");
const micButton = document.querySelector(".audio_icon");
const inputContainer = document.querySelector(".input_container");
const HTML = document.querySelector("html");
const defaultPX = parseFloat(window.getComputedStyle(HTML).fontSize.replace(/[^\d.-]/g, ""));

function expandTextarea(textarea) {
    const maxRows = 8; // Set the maximum number of rows you want
    const computedStyle = getComputedStyle(textarea);
    const fontSize = parseFloat(computedStyle.fontSize.replace(/[^\d.-]/g, ""));
    const currentRows = Math.floor(textarea.scrollHeight / fontSize);
    if (currentRows > maxRows) {
        textarea.style.overflowY = 'scroll';
        textarea.rows = maxRows;
    } else {
        textarea.style.height = 'auto';
        textarea.style.height = `${Math.max(3 * defaultPX, textarea.scrollHeight)}px`;
        textarea.style.overflowY = 'hidden';
    }
    inputContainer.style.height = textarea.style.height + (0.25 * defaultPX);
    const textContent = textarea.value.trim();
    if (textContent == "") {
        micButton.style.display = 'inline-block';
        sendButton.style.display = 'none';
    } else {
        micButton.style.display = 'none';
        sendButton.style.display = 'inline-block';
    }
}