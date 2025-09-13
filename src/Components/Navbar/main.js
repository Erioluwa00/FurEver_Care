document.addEventListener('DOMContentLoaded', function () {
    // Navbar Toggle (for main site)
    const navbarToggler = document.getElementById('navbar-toggler');
    const navbarCollapse = document.getElementById('navbarNav');

    if (navbarToggler) {
        navbarToggler.addEventListener('click', function () {
            navbarCollapse.classList.toggle('show');
            navbarToggler.classList.toggle('is-active');
        });
    }


    const sidebarToggler = document.getElementById('sidebar-toggler');
    const sidebar = document.querySelector('.sidebar');
    const mainContent = document.querySelector('.dashboard-main');

    if (sidebarToggler && sidebar) {
        sidebarToggler.addEventListener('click', function (e) {
            e.stopPropagation();
            sidebar.classList.toggle('is-open');
        });
    }

    // Click outside to close sidebar
    if (mainContent && sidebar) {
        mainContent.addEventListener('click', function () {
            if (sidebar.classList.contains('is-open')) {
                sidebar.classList.remove('is-open');
            }
        });
    }

    // // Landing Page Form Redirect
    // const landingForm = document.getElementById('landing-form');
    // if (landingForm) {
    //     landingForm.addEventListener('submit', function(e) {
    //         e.preventDefault();
    //         const userType = document.getElementById('user-type').value;
    //         if (userType) {
    //             // In a real app, you'd handle login/session here.
    //             // For this static version, we just redirect.
    //             window.location.href = `${userType}/index.html`;
    //         }
    //     });
    // }
});