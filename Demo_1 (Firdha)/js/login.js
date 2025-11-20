// console.log("Ini working!!!!");
// Single Line Comment
/**
 * Multi line comment
 * Variable: sebagai tempat untuk penyimpanan data
 * Data Type: String, Number, Float, BigInt, Boolean, undefined, null
 * DOM (Document Object Model) & Event
 * Conditional Statements
 */

// Variable : tempat untuk menyimpan data
// 1. Keyword const
// Syntax: const namaVar = data;
// const myName = "Rian";

// 2. Keywird let
// Syntax: let namaVar = data;
// let hobby = "Coding";
// hobby = "Volly"; // update data dari variable

// let isCoding = true;
/**
 * Tipe data:
 * String : untuk menyimpan data berupa teks atau character
 * Number : untuk menyimpan bilangan bulat 20
 * float : untuk menyimpan bilangan desimal 1.25
 * Boolean : hanya memiliki 2 nilai true / false
 * Object : menyimpan tag HTML
 * Array : dapat menyimpan banyak hal dalam sebuah variable
 * 
 */
// Hanya digunakan untuk debuging
// console.log("Halo selamat datang " + myName);
// console.log("Hari ini" + myName + ", kita akan belajar javascripts");
// console.log(hobby)

// for (let i = 0; i < 10;i++) {
//     console.log("Hello");
// }
// 1. Harus simpan tag yang ingin dimanipulasi ke dalam variable
// -- menggunakan DOM (Document Object Model)
// 2. Atur isi kontentnya menggunakan javasctips

const msg = document.getElementById("message");
const email = document.getElementById("email");
const password = document.getElementById("password");
const btn_login = document.querySelector(".login-btn");

// variable untuk ilustrasi email & password yang benar
// const true_email = "admin@gmail.com";
// const true_password = "123456789";
let dataUser = JSON.parse(localStorage.getItem("user")); // Biar yang tadinya string dikembalikan ke bentuk aslinya

// menambahkan event sebagai triger
btn_login.addEventListener("click", function(event) {
    event.preventDefault(); // membuat page tidak melakukan refresh
    
    // console.log(email.value);
    // conditional statement
    // <, >, <=, >=, ===, !==, &&, ||
    if (email.value === dataUser.email && password.value === dataUser.password) {
        // code ... ketika perbandingannya benar
        msg.innerText = "kamu berhasil login!";
        // msg.style.background = "red";
        msg.className = "green";
    } else {
        // akan dijalankan ketika perbadingan pada if itu salah
        msg.innerText = "Ada kesalah pada email atau password!";
        msg.className = "crimson";
    }

});

// innerText : untuk memodifikasi konten dari tag yang ada di html
// msg.innerText = "<strong>Selamat Datang!</strong>";
// msg.innerHTML = "<div><p>Ini baru!</p><strong>Ini Kontent</strong></div>";

