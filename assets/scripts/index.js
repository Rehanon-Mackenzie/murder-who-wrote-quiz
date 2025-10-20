/**
 * Murder Who Wrote? — index.js
 * ---------------------------------
 * Author: Rehanon Mackenzie
 * Description:
 *   Controls interactions on the home page, including
 *   the modal instructions window and navigation to other pages.
 *
 * Associated Page: index.html
 *
 * Features:
 *   - Opens and closes instruction modal
 *   - Handles overlay visibility and click events
 *   - Provides entry point to quiz and highscores pages
 *
 * Last updated: 20 Oct 2025
 */


/* jshint esversion: 8 */
/* Index JS */

    let openModalButtons = document.querySelectorAll("[data-modal-target]");
    let closeModalButtons = document.querySelectorAll("[data-close-button]");
    let overlay = document.getElementById("overlay");

    function openModal(modal) {
        if (modal === null) {
            return;
        }
        modal.classList.add("active");
        overlay.classList.add("active");
    }

    function closeModal(modal) {
        if (modal === null) {
            return;
        }
        modal.classList.remove("active");
        overlay.classList.remove("active");
    }

    // Open via buttons
    
    openModalButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            var modal = document.querySelector(button.dataset.modalTarget);
            openModal(modal);
        });
    });

    // Close via close buttons
    closeModalButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            var modal = button.closest(".modal");
            closeModal(modal);
        });
    });

    // Optional: clicking the overlay closes any open modal
    overlay.addEventListener("click", function () {
        document.querySelectorAll(".modal.active").forEach(function (m) {
            closeModal(m);
        });
}());