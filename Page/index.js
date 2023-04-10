
const modules = document.querySelectorAll('.module');

modules.forEach((module) => {
    const details = module.querySelector('.details');
    const expandBtn = module.querySelector('.expand-btn');
    const arrowImg = expandBtn.querySelector('.arrow');

    expandBtn.addEventListener('click', () => {
        details.classList.toggle('show');
        arrowImg.src = details.classList.contains('show') ? 'Resources/uparrow.png' : 'Resources/downarrow.png';
        arrowImg.alt = details.classList.contains('show') ? '&uarr;' : '&darr;';
    });
});
