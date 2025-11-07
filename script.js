const allSearch = "https://dummyjson.com/products?limit=10";
const specSearch = "https://dummyjson.com/products/search?q=";

window.onload = () => {
  const input = document.querySelector("input");
  input.addEventListener("input", search);
};

async function fetchAll() {
  try {
    const response = await fetch(allSearch);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const data = await response.json();
    const resultGrids = document.querySelector(".resultDisplay");
    
    for (const product of data.products) {
      const item = document.createElement("div");
      item.className = "itemGrid";
      item.innerHTML = `<img href = ${product.images[0]} alt="Demo Image">
                        <p>${product.category}</p>
                        <p>$${product.price}</p>
                        <p>${product.rating}</p>
                        <p>${product.availabilityStatus}</p>`;
      resultGrids.appendChild(item);
    }
  } catch (error) {
    console.error(error.message);
  }
}

async function search(e) {
  try {
    const keyword = e.target.value.trim();
    let url;
    
    url = `https://dummyjson.com/products/search?q=${encodeURIComponent(keyword)}`;

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const data = await response.json();
    const resultGrids = document.querySelector(".resultDisplay");
    resultGrids.innerHTML = "";
    for (const product of data.products) {
      const item = document.createElement("div");
      item.className = "itemGrid";
      item.innerHTML = `<img src = ${product.images[0]} alt="Demo Image" class="demoImage">
                        <p>${product.category}</p>
                        <p>$${product.price}</p>
                        <p>Rating: ${product.rating}/5.0 stars</p>
                        <p>${product.availabilityStatus}</p>`;
      resultGrids.appendChild(item);
    }
  } catch (error) {
    console.error(error.message);
  }
}