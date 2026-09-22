(function () {
  var header = document.getElementById("header");
  var burger = header && header.querySelector(".header-burger");
  if (burger) {
    burger.addEventListener("click", function () {
      var open = header.classList.toggle("header--menu-open");
      burger.setAttribute("aria-expanded", open ? "true" : "false");
      burger.setAttribute("aria-label", open ? "Close Menu" : "Open Menu");
      document.body.classList.toggle("no-scroll", open);
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && header.classList.contains("header--menu-open")) {
        burger.click();
      }
    });
  }

  var qty = document.querySelector(".product-quantity-input");
  if (qty) {
    document.querySelector(".product-quantity-decrement").addEventListener("click", function () {
      qty.value = Math.max(1, (parseInt(qty.value, 10) || 1) - 1);
    });
    document.querySelector(".product-quantity-increment").addEventListener("click", function () {
      qty.value = (parseInt(qty.value, 10) || 1) + 1;
    });
  }
})();
