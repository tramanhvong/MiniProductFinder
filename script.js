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

    const result = response.json();
    const data = JSON.parse(result);
    for (var product of data.products) {
            const item = document.createElement("div")
            item.innerHTML = `<p>${product.category}\n$${product.price}\n${product.rating}\n${product.availabilityStatus}</p>`;

            resultGrids.appendChild(item);
    }
  } catch (error) {
    console.error(error.message);
  }
}

function search() {
        const keyword = document.getElementById("keyword").value;

        fetch(specSearch +`${keyword}`)
            .then((response) => response.json())
            .then((data => {
                const resultGrids = document.getElementById("resultDisplay");
                for (const product of data.products) {
                    const item = document.createElement("li");
                    item.appendChild(document.createElement("strong")).textContent = product.title;
                    item.appendChild(document.createElement("p")).innerHTML = `${product.category}\n$${product.price}\n${product.rating}\n${product.availabilityStatus}`;

                    resultGrids.appendChild(item);
                }
            }))
            .catch(console.error);
}