const menuIcon = document.querySelector('.navigation_menu .nav_menu_icon');

function handleMenu() {
    const menuContainer = document.querySelector('.left_container');
    const contentDiv = document.querySelector('.content');
    const mainTopics = document.querySelector('.main_topics');

    if (!menuContainer.classList.contains('active')) {
        menuContainer.classList.add('active');
        menuIcon.classList.remove('fa-circle-right');
        menuIcon.classList.add('fa-circle-left');
        contentDiv.style.display = 'none';
        mainTopics.style.display = 'block';

    } else {
        menuContainer.classList.remove('active');
        menuIcon.classList.remove('fa-circle-left');
        menuIcon.classList.add('fa-circle-right');
        contentDiv.style.display = 'flex';
        mainTopics.style.display = 'none';
    }

}









//Event Listeners
menuIcon.addEventListener('click', handleMenu);