const productDetails = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');
    fetch(`https://fakestoreapi.com/products/${id}`)
        .then((res) => res.json())
        .then((data) => displayDetails(data))
        .catch((err) => console.log(err));
}
const displayDetails = (product) => {
    const parent = document.getElementById('tbody');
    const img= document.getElementById('product-img')
    parent.innerHTML = `
    <tr>
        <th scope="row">product Title: </th>
        <td>${product.title}</td>
    </tr>
    <tr>
        <th scope="row">product ID: </th>
        <td>${product.id}</td>
    </tr>
    <tr>
        <th scope="row">product price: </th>
        <td>${product.price} TK</td>
    </tr>
    <tr>
        <th scope="row">product category: </th>
        <td>${product.category}</td>
    </tr>
    <tr>
        <th scope="row" class="text-nowrap">product description: </th>
        <td>${product.description}</td>
    </tr>
    `;
    img.innerHTML=`
    <img class="book " src="${product.image}" alt="book image">
    `;
}
productDetails()