/*jslint browser */
/*global document, window */

(function () {
    "use strict";

    var openModalButtons = document.querySelectorAll("[data-modal-target]");
    var closeModalButtons = document.querySelectorAll("[data-close-button]");
    var overlay = document.getElementById("overlay");

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
    });
}());