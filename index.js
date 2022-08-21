// Your code goes here

// Change the text content of p tag after the DOM is fully built
document.addEventListener('DOMContentLoaded', () => {
    const p = document.querySelector('#text');
    p.textContent = "This is really cool!";
})

// Alternative to 'DOMContentLoaded' is 'defer' attribute in <script> tages
// <script src="index.js" defer></script>