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

async function search() {
  const input = document.getElementById("keyword").value;
  const keyword = input ? input.value.trim() : "";
  let url;
  if (!keyword) {
    url = allSearch;
  }
  else {
    url = specSearch + encodedURIComponent(keyword);
  }
  alert(url);
  try {
    const response = await fetch(url);
    alert(response);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const data = await response.json();
    const resultGrids = document.querySelector(".resultDisplay");
    
    for (const product of data.products) {
      const item = document.createElement("div");
      item.innerHTML = `<img src = ${product.images[0]} alt="Demo Image">
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