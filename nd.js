let user = {
    "email": "admin@gmail.com",
    "password": "12345678"
}

let string_user = JSON.stringify(user)

let parse_user = JSON.parse(string_user)

console.log(parse_user.password)