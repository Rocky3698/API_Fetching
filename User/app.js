const loadusers = () => {
    fetch("https://fakestoreapi.com/users")
        .then((res) => res.json())
        .then((data) => displayUsers(data))
        .catch((err) => console.log(err));
};

const displayUsers = (users) => {
    // console.log(users);
    const parent = document.getElementById("users");
    const title = document.getElementById("title");
    title.innerText = `Available Users: ${users.length}`;
    parent.innerHTML = ``;
    users.forEach((user) => {

        const div = document.createElement('div');
        div.classList.add('card', 'col-sm-6', 'col-lg-4', 'col-xl-2', 'mx-1', 'mb-5');
        div.innerHTML = `
            
            <div class="card-body p-0 text-center mt-4 mb-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor"
                class=" bi bi-person-circle my-2" viewBox="0 0 16 16">
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                <path fill-rule="evenodd"
                d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
            </svg>
                <a onclick="loaduser(${user.id}),event.preventDefault()" class="m-0 nav-link text-wrap text-primary" href="">${user.name.firstname} ${user.name.lastname}</a>
                <p class="m-0 ">User ID: ${user.id} </p>
                <p class="m-0 ">Email: ${user.email} </p>
                <p class="m-0 ">Phone: ${user.phone} </p>
                <p class="m-0 ">Addess: ${user.address.city} ${user.address.street}</p>
            </div>
            `
        parent.appendChild(div);
    })
}
const displayUser = (user) => {
    console.log(user);
    const parent = document.getElementById("users");
    const div = document.createElement('div');
    div.classList.add('card', 'col-sm-6', 'col-lg-4', 'col-xl-4', 'mx-1', 'mb-5', 'p-5');
    div.innerHTML = `
    
    <div class="card-body p-0 text-center mt-4 mb-2">
    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor"
        class=" bi bi-person-circle my-2" viewBox="0 0 16 16">
        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
        <path fill-rule="evenodd"
        d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
    </svg>
        <div class="text-center lead">
        <p class="m-0 ">User ID: ${user.id} </p>
            <div class="d-flex justify-content-between">
                <p class="m-0 text-wrap">First Name: ${user.name.firstname} </p>
                <p class="m-0 text-wrap">Last Name: ${user.name.lastname} </p>
            </div>
            <div class="d-flex justify-content-between">
                <p class="m-0 text-wrap">username: ${user.username} </p>
                <p class="m-0 text-wrap">Password: ${user.password} </p>
            </div>
        <p class="m-0 ">Email: ${user.email} </p>
        <p class="m-0 ">Phone: ${user.phone} </p>
            <div>
                <div class="d-flex justify-content-between">
                    <p>city: ${user.address.city}</p>
                    <p>street: ${user.address.street}</p>
                </div>
                <div class="d-flex justify-content-between">
                    <p>number: ${user.address.number}</p>
                    <p>zipcode: ${user.address.zipcode}</p>
                </div>
                <p class="m-0 ">lat: ${user.address.geolocation.lat} <span class="ms-5">long: ${user.address.geolocation.long}</span></p>
            </div>
        </div>
    </div>
    `
    parent.appendChild(div);
}
const loaduser = (id) => {
    document.getElementById("users").innerHTML = ``;
    document.getElementById("title").innerText = ``;
    fetch(`https://fakestoreapi.com/users/${id}`)
        .then((res) => res.json())
        .then((data) => displayUser(data))
        .catch((err) => console.log(err));
};

const handleSearch = () => {
    const value = document.getElementById("search").value;
    console.log(value);
    loaduser(value);
};
loadusers()
