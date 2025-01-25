document.querySelector('.contact-btn').addEventListener('click', () => {
    const contactBtn = document.querySelector('.contact-btn');
    const originalHTML = contactBtn.innerHTML; // Save the original HTML structure

    // Change the button content to "Copied!"
    contactBtn.innerHTML = 'Copied!';

    // Revert the button back to its original state after 2 seconds
    setTimeout(() => {
        contactBtn.innerHTML = originalHTML;
    }, 2000);

    // Copy the text to clipboard
    navigator.clipboard.writeText('teddangamer')
        .then(() => {
            // Optionally, you can also add a success message if needed
        })
        .catch(err => {
            console.error('Failed to copy text: ', err);
        });
});
