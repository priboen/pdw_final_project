import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

var addToCartButtons = document.getElementsByClassName("addToCartBtn");

// Fungsi untuk menampilkan pop-up
function showPopup() {
    alert("Product has been added to cart.");
}

// Menambahkan event listener untuk setiap tombol "Add to cart"
for (var i = 0; i < addToCartButtons.length; i++) {
    addToCartButtons[i].addEventListener("click", showPopup);
}

// Mendapatkan elemen dengan class "notAvailableBtn"
var notAvailableButtons = document.getElementsByClassName("notAvailableBtn");

// Fungsi untuk menampilkan pop-up
function showNotAvailablePopup() {
    alert("Fitur belum tersedia.");
}

// Menambahkan event listener untuk setiap tombol "Not Available"
for (var i = 0; i < notAvailableButtons.length; i++) {
    notAvailableButtons[i].addEventListener("click", showNotAvailablePopup);
}

function kirimData() {
    var username = document.getElementById("username").value;
    var item = document.querySelector("input[name=item]:checked").value
    var payment = document.getElementById("payment-method").value

    alert(
        "Username: " + username +
        "\nItem: " + item +
        "\nPayment Method: " + payment
    )
}
