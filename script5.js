document.addEventListener("DOMContentLoaded", () => {
  const products = [
    { name: "Wireless Headphones", price: "$99", emoji: "🎧" },
    { name: "Smart Watch", price: "$199", emoji: "⌚" },
    { name: "Bluetooth Speaker", price: "$49", emoji: "🔊" },
    { name: "Gaming Console", price: "$299", emoji: "🎮" },
    { name: "Mobile Phone", price: "$599", emoji: "📱" },
    { name: "Camera", price: "$450", emoji: "📷" },
    { name: "Laptop", price: "$799", emoji: "💻" },
    { name: "Keyboard", price: "$69", emoji: "⌨️" },
    { name: "Mouse", price: "$29", emoji: "🖱️" },
    { name: "TV", price: "$899", emoji: "📺" },
    { name: "Books", price: "$15", emoji: "📚" },
    { name: "Backpack", price: "$40", emoji: "🎒" }
  ];

  const productList = document.getElementById("product-list");

  function displayProducts(filteredProducts) {
    productList.innerHTML = "";
    filteredProducts.forEach((product) => {
      const card = document.createElement("div");
      card.classList.add("card");
      card.innerHTML = `
        <div class="emoji">${product.emoji}</div>
        <h3>${product.name}</h3>
        <p>${product.price}</p>
      `;
      productList.appendChild(card);
    });
  }

  // Initial Load
  displayProducts(products);

  // Search Functionality
  document.getElementById("search").addEventListener("input", (e) => {
    const searchValue = e.target.value.toLowerCase();
    const filtered = products.filter(product =>
      product.name.toLowerCase().includes(searchValue)
    );
    displayProducts(filtered);
  });
});

