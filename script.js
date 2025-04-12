document.querySelectorAll('[data-code]').forEach(function(button) {
    button.addEventListener('click', function() {
        // Get the id of the code block to copy from
        const codeId = button.getAttribute('data-code');
        const codeElem = document.getElementById(codeId);
        if (codeElem) {
            const code = codeElem.textContent;
            navigator.clipboard.writeText(code);
        } else {
            alert('Code block not found!');
        }
    });
});
