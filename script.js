document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menu-toggle');
    const navbar = document.getElementById('navbar');

    menuToggle.addEventListener('click', function () {
        navbar.classList.toggle('active'); // Toggle the active class to open/close the sidebar
    });

    document.addEventListener('click', function(event) {
        const navbar = document.getElementById('navbar');
        const menuToggle = document.getElementById('menu-toggle');
        
        if (!navbar.contains(event.target) && !menuToggle.contains(event.target)) {
            navbar.classList.remove('active'); // Close sidebar if clicking outside
        }
    });
});