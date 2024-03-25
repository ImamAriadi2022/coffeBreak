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


// Ini adalah fitur order untuk card 4
var modalkeempat = document.getElementById("orderForm4");
var spankeempat = document.getElementsByClassName("close close-4")[0]; // Gunakan indeks pertama
var orderLinkkeempat = document.getElementsByClassName("order-link-4");

Array.from(orderLinkkeempat).forEach(function(link) {
  link.addEventListener("click", function(event) {
    event.preventDefault();
    var coffeeNamekeempat = this.getAttribute("data-name-4");
    var pricekeempat = this.getAttribute("data-price-4");

    document.getElementById("coffeeName4").value = coffeeNamekeempat; // Tetapkan nilai kopi
    document.getElementById("price4").value = pricekeempat; // Tetapkan harga kopi

    modalkeempat.style.display = "block";
  });
});


spankeempat.onclick = function() {
  modalkeempat.style.display = "none";
};

window.onclick = function(event) {
  if (event.target == modalkeempat) {
    modalkeempat.style.display = "none";
  }
};

document.getElementById("orderFormContent4").addEventListener("submit", function(event) {
  event.preventDefault();
  var coffeeNamekeempat = document.getElementById("coffeeName4").value;
  var pricekeempat = document.getElementById("price4").value;
  var quantitykeempat = document.getElementById("quantity4").value;

  modalkeempat.style.display = "none";
});


//link to whats app card 4
function orderNow4 (){
  var coffeeNamekeempat = document.getElementById("coffeeName4").value;
  var pricekeempat = document.getElementById("price4").value;
  var quantitykeempat = document.getElementById("quantity4").value;

  var message = "Pesanan Anda : \n" + coffeeNamekeempat + "\nHarga satuan : " + pricekeempat + "\nHarga Total : " + (pricekeempat * quantitykeempat);

  var adminPhoneNumber = "6281367010835";
  var whatsappURL = "https://api.whatsapp.com/send?phone=" + adminPhoneNumber + "&text=" + encodeURIComponent(message);
  
  window.open(whatsappURL);

  document.getElementById("backButton").style.display = "block";

}//ini adalah baris terakhir dari link to what app



// Ini adalah fitur order untuk card 5
var modalkelima = document.getElementById("orderForm5");
var spankelima = document.getElementsByClassName("close close-5")[0]; // Gunakan indeks pertama
var orderLinkkelima = document.getElementsByClassName("order-link-5");

Array.from(orderLinkkelima).forEach(function(link) {
  link.addEventListener("click", function(event) {
    event.preventDefault();
    var coffeeNamekelima = this.getAttribute("data-name-5");
    var pricekelima = this.getAttribute("data-price-5");

    document.getElementById("coffeeName5").value = coffeeNamekelima; // Tetapkan nilai kopi
    document.getElementById("price5").value = pricekelima; // Tetapkan harga kopi

    modalkelima.style.display = "block";
  });
});


spankelima.onclick = function() {
  modalkelima.style.display = "none";
};

window.onclick = function(event) {
  if (event.target == modalkelima) {
    modalkelima.style.display = "none";
  }
};

document.getElementById("orderFormContent5").addEventListener("submit", function(event) {
  event.preventDefault();
  var coffeeNamekelima = document.getElementById("coffeeName5").value;
  var pricekelima = document.getElementById("price5").value;
  var quantitykelima = document.getElementById("quantity5").value;

  modalkelima.style.display = "none";
});


//link to whats app card 5
function orderNow5 (){
  var coffeeNamekelima = document.getElementById("coffeeName5").value;
  var pricekelima = document.getElementById("price5").value;
  var quantitykelima = document.getElementById("quantity5").value;

  var message = "Pesanan Anda : \n" + coffeeNamekelima + "\nHarga satuan : " + pricekelima + "\nHarga Total : " + (pricekelima * quantitykelima);

  var adminPhoneNumber = "6281367010835";
  var whatsappURL = "https://api.whatsapp.com/send?phone=" + adminPhoneNumber + "&text=" + encodeURIComponent(message);
  
  window.open(whatsappURL);

  document.getElementById("backButton").style.display = "block";

}//ini adalah baris terakhir dari link to what app



// Ini adalah fitur order untuk card 6
var modalkeenam = document.getElementById("orderForm6");
var spankeenam = document.getElementsByClassName("close close-6")[0]; // Gunakan indeks pertama
var orderLinkkeenam = document.getElementsByClassName("order-link-6");

Array.from(orderLinkkeenam).forEach(function(link) {
  link.addEventListener("click", function(event) {
    event.preventDefault();
    var coffeeNamekeenam = this.getAttribute("data-name-6");
    var pricekeenam = this.getAttribute("data-price-6");

    document.getElementById("coffeeName6").value = coffeeNamekeenam; // Tetapkan nilai kopi
    document.getElementById("price6").value = pricekeenam; // Tetapkan harga kopi

    modalkeenam.style.display = "block";
  });
});


spankeenam.onclick = function() {
  modalkeenam.style.display = "none";
};

window.onclick = function(event) {
  if (event.target == modalkeenam) {
    modalkeenam.style.display = "none";
  }
};

document.getElementById("orderFormContent6").addEventListener("submit", function(event) {
  event.preventDefault();
  var coffeeNamekeenam = document.getElementById("coffeeName6").value;
  var pricekeenam = document.getElementById("price6").value;
  var quantitykeenam = document.getElementById("quantity6").value;

  modalkeenam.style.display = "none";
});


//link to whats app card 6
function orderNow6 (){
  var coffeeNamekeenam = document.getElementById("coffeeName6").value;
  var pricekeenam = document.getElementById("price6").value;
  var quantitykeenam = document.getElementById("quantity6").value;

  var message = "Pesanan Anda : \n" + coffeeNamekeenam + "\nHarga satuan : " + pricekeenam + "\nHarga Total : " + (pricekeenam * quantitykeenam);

  var adminPhoneNumber = "6281367010835";
  var whatsappURL = "https://api.whatsapp.com/send?phone=" + adminPhoneNumber + "&text=" + encodeURIComponent(message);
  
  window.open(whatsappURL);

  document.getElementById("backButton").style.display = "block";

}//ini adalah baris terakhir dari link to what app


console.log("PRESSTYLE DULU BOS WKWK")