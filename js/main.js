let cartCount = 0;

function addToCart(productName) {
  cartCount += 1;
  document.getElementById("cartCount").textContent = cartCount;
  document.getElementById("toastMessage").textContent = productName + " added to cart (demo)";
  const toastElement = document.getElementById("cartToast");
  if (window.bootstrap && toastElement) {
    bootstrap.Toast.getOrCreateInstance(toastElement, { delay: 2200 }).show();
  } else {
    alert(productName + " added to cart (demo)");
  }
}

function searchProducts() {
  const query = (document.getElementById("productSearch").value || "").trim().toLowerCase();
  const cards = document.querySelectorAll(".product-col");
  let visible = 0;
  cards.forEach(card => {
    const name = (card.dataset.name || card.innerText).toLowerCase();
    const match = !query || name.includes(query);
    card.classList.toggle("d-none", !match);
    if (match) visible++;
  });
  document.getElementById("noResults").classList.toggle("d-none", visible !== 0);
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("year").textContent = new Date().getFullYear();
  document.querySelectorAll(".btn-wish").forEach(button => {
    button.addEventListener("click", () => {
      button.classList.toggle("active");
      button.innerHTML = button.classList.contains("active")
        ? '<i class="bi bi-heart-fill"></i>'
        : '<i class="bi bi-heart"></i>';
    });
  });
  document.getElementById("productSearch").addEventListener("input", searchProducts);
  document.querySelectorAll(".category-item").forEach(item => {
    item.addEventListener("click", () => {
      const query = item.dataset.category || "";
      document.getElementById("productSearch").value = query;
      // Category matching can be adjusted when real product categories are added.
      const cards = document.querySelectorAll(".product-col");
      let visible = 0;
      cards.forEach(card => {
        const name = (card.dataset.name || "").toLowerCase();
        const category = query.toLowerCase();
        const words = category.split(/[\s&]+/).filter(Boolean);
        const match = words.some(word => word.length > 3 && name.includes(word));
        card.classList.toggle("d-none", !match);
        if (match) visible++;
      });
      document.getElementById("noResults").classList.toggle("d-none", visible !== 0);
    });
  });
});
