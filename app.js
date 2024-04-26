const loadCategories = () => {
    fetch("https://fakestoreapi.com/products/categories")
        .then((res) => res.json())
        .then((data) => displaycategories(data))
        .catch((err) => console.log(err));
};

const displaycategories = (categories) => {
    categories.forEach((category) => {
        const parent = document.getElementById("categories");
        const a = document.createElement('button');
        a.classList.add('nav-link');
        a.innerText = `${category}`;
        a.addEventListener('click', () => {
            loadProductsByCategory(category);
        });
        parent.appendChild(a);
    })
}

const loadProducts = () => {
    fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((data) => displayProducts(data))
        .catch((err) => console.log(err));
};

const loadProductsByCategory = (category) => {
    fetch(`https://fakestoreapi.com/products/category/${category}`)
        .then((res) => res.json())
        .then((data) => displayProducts(data))
        .catch((err) => console.log(err));
}
const displayProducts = (products) => {
    const parent = document.getElementById("products");
    const title = document.getElementById("title");
    title.innerText=`Available Prodcucts: ${products.length}`;
    parent.innerHTML = ``;
    products.forEach((product) => {
        const div = document.createElement('div');
        div.classList.add('card', 'col-sm-6', 'col-lg-4', 'col-xl-3', 'mx-1', 'mb-5');
        div.innerHTML = `
        <img src="${product.image}" class="card-img-top" alt="img">
        <div class="card-body p-0 text-start mt-4">
            <p class="m-0 text-wrap">${product.title} </p>
            <p class="m-0 ">Price: ${product.price} </p>
            <a href="products_details.html?id=${product.id}" class=" my-2 btn btn-small btn-secondary">View details</a>
        </div>
        `
        parent.appendChild(div);
    })
}



loadCategories();
loadProducts();
