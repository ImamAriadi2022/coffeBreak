// Ini adalah fitur untuk menampilkan pop up pada card 1
var modal = document.getElementById("orderForm");
var span = document.getElementsByClassName("close close-1")[0];
var orderLinks = document.getElementsByClassName("order-link");

Array.from(orderLinks).forEach(function(link) {
  link.addEventListener("click", function(event) {
    event.preventDefault(); 
    var coffeeName = this.getAttribute("data-name");
    var price = this.getAttribute("data-price");

    document.getElementById("coffeeName").value = coffeeName;
    document.getElementById("price").value = price;

    modal.style.display = "block";
  });
});

span.onclick = function() {
  modal.style.display = "none";
};

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

document.getElementById("orderFormContent").addEventListener("submit", function(event) {
  event.preventDefault(); 
  var coffeeName = document.getElementById("coffeeName").value;
  var price = document.getElementById("price").value;
  var quantity = document.getElementById("quantity").value;

  modal.style.display = "none";
});

// Ini adalah fitur link to WhatsApp untuk card 1
function orderNow() {
  var coffeeName = document.getElementById("coffeeName").value; 
  var price = document.getElementById("price").value; 
  var quantity = document.getElementById("quantity").value;

  var message = "Pesanan Anda:\n" + coffeeName + "\nHarga Satuan: " + price + "\nHarga Total: " + (price * quantity); 

  var adminPhoneNumber = "6285788322061";
  var whatsappURL = "https://api.whatsapp.com/send?phone=" + adminPhoneNumber + "&text=" + encodeURIComponent(message);

  window.open(whatsappURL);

  document.getElementById("backButton").style.display = "block";
}

// Ini adalah fitur order untuk card 2
var modalkedua = document.getElementById("orderForm2");
var spankedua = document.getElementsByClassName("close close-2")[0]; // Gunakan indeks pertama
var orderLinkKedua = document.getElementsByClassName("order-link-2");

Array.from(orderLinkKedua).forEach(function(link) {
  link.addEventListener("click", function(event) {
    event.preventDefault();
    var coffeeNameKedua = this.getAttribute("data-name-2");
    var priceKedua = this.getAttribute("data-price-2");

    document.getElementById("coffeeName2").value = coffeeNameKedua; // Tetapkan nilai kopi
    document.getElementById("price2").value = priceKedua; // Tetapkan harga kopi

    modalkedua.style.display = "block";
  });
});


spankedua.onclick = function() {
  modalkedua.style.display = "none";
};

window.onclick = function(event) {
  if (event.target == modalkedua) {
    modalkedua.style.display = "none";
  }
};

document.getElementById("orderFormContent2").addEventListener("submit", function(event) {
  event.preventDefault();
  var coffeeNameKedua = document.getElementById("coffeeName2").value;
  var priceKedua = document.getElementById("price2").value;
  var quantityKedua = document.getElementById("quantity2").value;

  modalkedua.style.display = "none";
});


//link to whats app cars 2
function orderNow2 (){
  var coffeeNameKedua = document.getElementById("coffeeName2").value;
  var priceKedua = document.getElementById("price2").value;
  var quantityKedua = document.getElementById("quantity2").value;

  var message = "Pesanan Anda : \n" + coffeeNameKedua + "\nHarga satuan : " + priceKedua + "\nHarga Total : " + (priceKedua * quantityKedua);

  var adminPhoneNumber = "6285788322061";
  var whatsappURL = "https://api.whatsapp.com/send?phone=" + adminPhoneNumber + "&text=" + encodeURIComponent(message);
  
  window.open(whatsappURL);

  document.getElementById("backButton").style.display = "block";

}//ini adalah baris terakhir dari link to what app


// Ini adalah fitur order untuk card 3
var modalketiga = document.getElementById("orderForm3");
var spanketiga = document.getElementsByClassName("close close-3")[0]; // Gunakan indeks pertama
var orderLinkketiga = document.getElementsByClassName("order-link-3");

Array.from(orderLinkketiga).forEach(function(link) {
  link.addEventListener("click", function(event) {
    event.preventDefault();
    var coffeeNameketiga = this.getAttribute("data-name-3");
    var priceketiga = this.getAttribute("data-price-3");

    document.getElementById("coffeeName3").value = coffeeNameketiga; // Tetapkan nilai kopi
    document.getElementById("price3").value = priceketiga; // Tetapkan harga kopi

    modalketiga.style.display = "block";
  });
});


spanketiga.onclick = function() {
  modalketiga.style.display = "none";
};

window.onclick = function(event) {
  if (event.target == modalketiga) {
    modalketiga.style.display = "none";
  }
};

document.getElementById("orderFormContent3").addEventListener("submit", function(event) {
  event.preventDefault();
  var coffeeNameketiga = document.getElementById("coffeeName3").value;
  var priceketiga = document.getElementById("price3").value;
  var quantityketiga = document.getElementById("quantity3").value;

  modalketiga.style.display = "none";
});


//link to whats app card 3
function orderNow3 (){
  var coffeeNameketiga = document.getElementById("coffeeName3").value;
  var priceketiga = document.getElementById("price3").value;
  var quantityketiga = document.getElementById("quantity3").value;

  var message = "Pesanan Anda : \n" + coffeeNameketiga + "\nHarga satuan : " + priceketiga + "\nHarga Total : " + (priceketiga * quantityketiga);

  var adminPhoneNumber = "6285788322061";
  var whatsappURL = "https://api.whatsapp.com/send?phone=" + adminPhoneNumber + "&text=" + encodeURIComponent(message);
  
  window.open(whatsappURL);

  document.getElementById("backButton").style.display = "block";

}//ini adalah baris terakhir dari link to what app


