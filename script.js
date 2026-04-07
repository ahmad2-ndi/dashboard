// script.js
document.addEventListener('DOMContentLoaded', () => {
    // Nav icon switching (Works with both structures)
    const navIcons = document.querySelectorAll('.nav-icon');
    navIcons.forEach(icon => {
        icon.addEventListener('click', () => {
            navIcons.forEach(i => i.classList.remove('active'));
            icon.classList.add('active');
        });
    });

    // Chart bar interaction
    const barBoxes = document.querySelectorAll('.bar-box');
    const chartTooltip = document.querySelector('.chart-tooltip');
    const monthLabels = document.querySelectorAll('.chart-labels span');

    barBoxes.forEach((bar, index) => {
        bar.addEventListener('click', () => {
            barBoxes.forEach(b => b.classList.remove('active'));
            bar.classList.add('active');
            
            // Update tooltip text based on clicked bar
            if (chartTooltip && monthLabels[index]) {
                chartTooltip.innerText = `${monthLabels[index].innerText} 2021`;
            }
        });
    });

    // Dropdown toggle
    const optionsMenu = document.querySelector('.dropdown-menu');
    const optionsTrigger = document.querySelector('.chart-options');

    if (optionsTrigger && optionsMenu) {
        optionsTrigger.addEventListener('click', (e) => {
            e.stopPropagation();
            optionsMenu.style.display = optionsMenu.style.display === 'block' ? 'none' : 'block';
        });

        document.addEventListener('click', () => {
            if (optionsMenu) optionsMenu.style.display = 'none';
        });
    }
});
