function toggleBackgroundColor() {
    document.body.classList.toggle('dark-mode');
    document.querySelector('.container').classList.toggle('dark-mode');


    const elementsToToggleColor = document.querySelectorAll('.dark-mode-text');
    elementsToToggleColor.forEach(element => {
        element.classList.toggle('dark-mode-text');
    });
}
