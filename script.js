const allSearch = "https://dummyjson.com/products?limit=10";
const specSearch = "https://dummyjson.com/products/search?q=";


// function fetchAll() {
//         fetch(allSearch)
//         .then((response) => response.json())
//         .then((data => {
//             alert(data);
//             const resultGrids = document.getElementById("resultDisplay");
//             for (const product of data.products) {
//                 const item = document.createElement("div")
//                 item.innerHTML = `<p>${product.category}\n$${product.price}\n${product.rating}\n${product.availabilityStatus}</p>`;

//                 resultGrids.appendChild(item);
//             }
//         }))
//         .catch(console.error);
// }

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
      item.innerHTML = `<p>${product.category}</p>
                        <p>$${product.price}</p>
                        <p>${product.rating}</p>
                        <p>${product.availabilityStatus}</p>`;
      resultGrids.appendChild(item);
    }
  } catch (error) {
    console.error(error.message);
  }
}

async function search() {
  const keyword = document.getElementById("keyword").value;

  try {
    const response = await fetch(`${specSearch}${keyword}`);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const data = await response.json();
    const resultGrids = document.querySelector(".resultDisplay");
    
    for (const product of data.products) {
      const item = document.createElement("div");
      item.innerHTML = `<p>${product.category}</p>
                        <p>$${product.price}</p>
                        <p>${product.rating}</p>
                        <p>${product.availabilityStatus}</p>`;
      resultGrids.appendChild(item);
    }
  } catch (error) {
    console.error(error.message);
  }
}