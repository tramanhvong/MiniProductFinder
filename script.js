const allSearch = "https://dummyjson.com/products?limit=10";
const specSearch = "https://dummyjson.com/products/search?q=";


async function search() {
    try {
        const keyword = document.getElementById("keyword").value;
        let url = specSearch + keyword;
        alert(url);

        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
        
        const result = await response.json();
        alert(result);
    } catch (error) {
        console.error(error.message);
    }
}