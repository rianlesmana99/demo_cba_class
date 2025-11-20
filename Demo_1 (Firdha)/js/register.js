const regisForm = document.getElementById("register_form");
// Data Structure: variable yang menyimpan banyak data
// - Array : const list_data = ["Data1", "Data2", "Data3"] | akan diakses melalui urutan datanya
// - Object : const list_data = {"key": value} | akan diakses berdasarkan key nya

// Untuk membuat variable obejct kosong
let listUser = []; // Array Kosong

if (localStorage.getItem("user") !== null) {
    listUser = JSON.parse(localStorage.getItem("user"));
}

let user = {};

// change: membaca perubahan data pada input
regisForm.addEventListener("change", function(event) {
    // console.log(event.target.value);
    user = {
        // Get data sebelumnya: spread operator
        ...user,
        [event.target.name]: event.target.value
    };
})

// click, change, submit, scroll, focus,
regisForm.addEventListener("submit", function(e) {
    // e.preventDefault();
    // setItem(key) : local storage hanya bisa menerima string
    // JSON.stringify(): mengkonversi tipe data apapun menjadi string dengan teratur
    // toString(): hanya bisa menconversi data tunggal
    // localStorage.setItem("user", JSON.stringify(user));

    listUser.push(user);
    localStorage.setItem("user", JSON.stringify(listUser));
    // console.log(localStorage.getItem("user"));
})
