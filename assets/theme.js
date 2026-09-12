document.addEventListener('DOMContentLoaded', function () {
  var menuToggle = document.querySelector('[data-menu-toggle]');
  var searchToggle = document.querySelector('[data-search-toggle]');
  var searchModal = document.querySelector('[data-search-modal]');
  var cartToggle = document.querySelector('[data-cart-toggle]');
  var miniCart = document.querySelector('[data-mini-cart]');

  if (menuToggle) {
    menuToggle.addEventListener('click', function () {
      document.body.classList.toggle('menu-open');
    });
  }

  if (searchToggle && searchModal) {
    searchToggle.addEventListener('click', function () {
      searchModal.classList.toggle('is-open');
      searchModal.setAttribute('aria-hidden', String(!searchModal.classList.contains('is-open')));
      if (searchModal.classList.contains('is-open')) {
        var input = searchModal.querySelector('input[type="search"]');
        if (input) { input.focus(); }
      }
    });
    searchModal.addEventListener('click', function (event) {
      if (event.target === searchModal) {
        searchModal.classList.remove('is-open');
      }
    });
  }

  if (cartToggle && miniCart) {
    cartToggle.addEventListener('click', function () {
      miniCart.classList.toggle('is-open');
    });
  }

  document.querySelectorAll('.quantity-wrap button[data-quantity]').forEach(function (button) {
    button.addEventListener('click', function () {
      var input = button.parentElement.querySelector('input');
      var current = parseInt(input.value || '1', 10);
      var next = button.dataset.quantity === 'plus' ? current + 1 : Math.max(1, current - 1);
      input.value = next;
    });
  });
});
