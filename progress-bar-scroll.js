const content = document.querySelector(`.super-content`);
const progress = document.querySelector('progress');
let inViewport = false;
let observer = new IntersectionObserver(handler);
observer.observe(content);

// Whenever the content comes in or out of view, this handler is invoked.
function handler(entries, observer) {
    for (entry of entries) {
        toggleVisibility(entry.isIntersecting);
    }
}

function toggleVisibility(isIntersecting) {
    const progressContainer = document.querySelector('progress[value]');
    if (isIntersecting) {
        progressContainer.style.height = '0.5rem';
    } else {
        progressContainer.style.height = '0';
    }
}

// Get the percentage scrolled of an element. It returns zero if its not in view.
function getScrollProgress(el) {
    let coords = el.getBoundingClientRect();
    let height = coords.height;
    let progressPercentage = 0;

    if (coords.top < 0) {
        progressPercentage = Math.min(
            (Math.abs(coords.top) / height) * 100,
            100
        );
    }

    return progressPercentage;
}

function showReadingProgress() {
    progress.setAttribute('value', getScrollProgress(content));
}

// Scroll Event Listener
window.onscroll = showReadingProgress;

/* Show on content & info page */
if (location.pathname !== '/' && location.pathname !== '/not-work') {
    progress.style.display = 'block';
}
