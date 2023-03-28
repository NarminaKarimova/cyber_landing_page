const modules = document.querySelectorAll('.module');

modules.forEach((module) => {
    const details = module.querySelector('.details');
    const expandBtn = module.querySelector('.expand-btn');

    expandBtn.addEventListener('click', () => {
        details.classList.toggle('show');
        expandBtn.textContent = details.classList.contains('show') ? 'Read Less' : 'Read More';
    });
});
