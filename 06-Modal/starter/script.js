'use strict';

const modals = document.querySelectorAll('.show-modal');

modals.forEach(modal => {
  modal.addEventListener('click', function () {
    console.log(this.textContent);
  });
});
