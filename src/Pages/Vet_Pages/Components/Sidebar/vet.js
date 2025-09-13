// document.querySelectorAll(".time-slot").forEach((slot) => {
//   slot.addEventListener("click", function () {
//     document.querySelectorAll(".time-slot").forEach((s) => {
//       s.style.backgroundColor = "var(--color-hover)";
//       s.style.color = "var(--color-text)";
//     });
//     this.style.backgroundColor = "var(--color-primary)";
//     this.style.color = "white";
//   });
// });

// // Toggle sidebar on mobile
// function toggleSidebar() {
//   const sidebar = document.querySelector(".sidebar");
//   const overlay = document.querySelector(".overlay");
//   const hamburgerIcon = document.querySelector(".hamburger-menu i");

//   sidebar.classList.toggle("active");
//   overlay.classList.toggle("active");

//   if (sidebar.classList.contains("active")) {
//     hamburgerIcon.classList.remove("fa-bars");
//     hamburgerIcon.classList.add("fa-times");
//   } else {
//     hamburgerIcon.classList.remove("fa-times");
//     hamburgerIcon.classList.add("fa-bars");
//   }
// }

// // Add event listeners
// document.addEventListener("DOMContentLoaded", function () {
//   // Hamburger menu click
//   document
//     .querySelector(".hamburger-menu")
//     .addEventListener("click", toggleSidebar);

//   // Sidebar toggler click
//   const sidebarToggler = document.getElementById("sidebar-toggler");
//   if (sidebarToggler) {
//     sidebarToggler.addEventListener("click", toggleSidebar);
//   }

//   // Overlay click to close sidebar
//   document.querySelector(".overlay").addEventListener("click", toggleSidebar);

//   // Close sidebar when clicking on a link (for mobile)
//   document.querySelectorAll(".sidebar-links a").forEach((link) => {
//     link.addEventListener("click", function () {
//       if (window.innerWidth <= 768) {
//         toggleSidebar();
//       }
//     });
//   });
// });
