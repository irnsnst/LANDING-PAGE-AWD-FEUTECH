for (let index = 0; index < 2000; index++) {
    const element = document.createElement('span');
    document.querySelector('.container').appendChild(element);
}

document.addEventListener("DOMContentLoaded", function() {
    const spans = document.querySelectorAll('.container span');
    spans.forEach(span => {
        span.addEventListener('mouseenter', function() {
            span.classList.add('hovered');
        });
        span.addEventListener('mouseleave', function() {
            span.classList.remove('hovered');
        });
    });
});
