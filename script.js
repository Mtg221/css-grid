const grid = document.getElementById("product-grid");

async function loadProducts() {
  const response = await fetch("https://jsonplaceholder.typicode.com/photos?_limit=9");
  const products = await response.json();

  products.forEach(item => {
    const div = document.createElement("div");
    div.classList.add("grid-item");

    div.innerHTML = `
      <img src="${item.thumbnailUrl}" alt="${item.title}">
      <h3>${item.title}</h3>
      <button onclick="goToDetail(${item.id})">View Details</button>
    `;

    grid.appendChild(div);
  });
}

function goToDetail(id) {
  window.location.href = `detail.html?id=${id}`;
}

loadProducts();
