const container = document.getElementById("detail-container");

const params = new URLSearchParams(window.location.search);
const id = params.get("id");

async function loadDetail() {
  const response = await fetch(`https://jsonplaceholder.typicode.com/photos/${id}`);
  const item = await response.json();

  container.innerHTML = `
    <img src="${item.url}" alt="${item.title}">
    <h2>${item.title}</h2>
    <p>Album ID: ${item.albumId}</p>
    <p>ID: ${item.id}</p>
  `;
}

loadDetail();
