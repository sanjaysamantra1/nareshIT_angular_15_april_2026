const productContainer = document.getElementById('productContainer');

function displayProducts(productArr) {
    for (product of productArr) {
        const col = document.createElement('div');
        col.className = 'col-sm-3 mb-2';
        col.innerHTML = `
        <div class="card">
            <img src="${product.image}" class="card-img-top" alt="...">
                <div class="card-body text-center">
                    <h5 class="card-title">${product.category}</h5>
                    <p class="card-text text-truncate">${product.title}</p>
                    <p class="card-text text-truncate">${product.description}</p>
                    <p class="card-text">${product.price}</p>
                    <p class="card-text">${product.rating.rate}</p>
                    <a href="#" class="btn btn-primary">Buy Now</a>
                </div>
        </div>`;
        productContainer.appendChild(col);
    }
}

async function fetchProducts() {
    let response = await fetch('https://fakestoreapi.com/products');
    let productArr = await response.json();
    console.log(productArr);

    displayProducts(productArr);
}