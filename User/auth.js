const Registration = (event) => {
    event.preventDefault();
    const username = getValue("username");
    const first_name = getValue("firstname");
    const last_name = getValue("lastname");
    const name={
        first_name,
        last_name,
    }
    const email = getValue("email");
    const password = getValue("password");
    const confirm_password = getValue("confirm_password");
    const city = getValue("city");
    const street = getValue("street");
    const number = getValue("number");
    const zipcode = getValue("zipcode");
    const lat = getValue("lat");
    const long = getValue("long");
    geolocation={
        lat,
        long,
    }
    const address={
        city,
        street,
        number,
        zipcode,
        geolocation,
    }
    const info = {
        email,
        username,
        password,
        name,
        address,
        phone,
    };

    if (password === confirm_password) {
        document.getElementById("error").innerText = "";
        if (
            /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(
                password
            )
        ) {
            console.log(info);

            fetch("https://fakestoreapi.com/users", {
                method: "POST",
                headers: { "content-type": "application/json" },
                body: JSON.stringify(info),
            })
                .then((res) => res.json())
                .then((data) => console.log(data));
        } else {
            document.getElementById("error").innerText =
                "pass must contain eight characters, at least one letter, one number and one special character:";
        }
    } else {
        document.getElementById("error").innerText =
            "password and confirm password do not match";
        alert("password and confirm password do not match");
    }
};

const getValue = (id) => {
    const value = document.getElementById(id).value;
    return value;
};
const Login = (event) => {
    event.preventDefault();
    const username = getValue("login-username");
    const password = getValue("login-password");
    console.log(username, password);
    if ((username, password)) {
        fetch("https://fakestoreapi.com/auth/login", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ username, password }),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.token ) {
                    localStorage.setItem("token", data.token);
                    window.location.href = "index.html";
                }
            });
    }
};