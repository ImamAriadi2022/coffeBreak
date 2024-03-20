//ini adalah fitur untuk menampilkan pop up pada card 1


// Ambil elemen modal
var modal = document.getElementById("orderForm");

// Ambil elemen untuk menutup modal
var span = document.getElementsByClassName("close")[0];

// Ambil semua tautan order
var orderLinks = document.getElementsByClassName("order-link");

// Tambahkan event listener untuk setiap tautan order
Array.from(orderLinks).forEach(function(link) {
  link.addEventListener("click", function(event) {
    event.preventDefault(); // Mencegah tindakan default dari link

    // Ambil data dari atribut data pada tautan
    var coffeeName = this.getAttribute("data-name");
    var price = this.getAttribute("data-price");

    // Setel nilai input pada form
    document.getElementById("coffeeName").value = coffeeName;
    document.getElementById("price").value = price;

    // Tampilkan modal
    modal.style.display = "block";
  });
});

// Tambahkan event listener untuk menutup modal ketika tombol close diklik
span.onclick = function() {
  modal.style.display = "none";
};

// Tambahkan event listener untuk menutup modal ketika klik di luar modal
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// Tambahkan event listener untuk mengirimkan form
document.getElementById("orderFormContent").addEventListener("submit", function(event) {
  event.preventDefault(); // Mencegah tindakan default dari form
  // Ambil nilai-nilai dari form
  var coffeeName = document.getElementById("coffeeName").value;
  var price = document.getElementById("price").value;
  var quantity = document.getElementById("quantity").value;
  
  // Lakukan sesuatu dengan nilai-nilai tersebut, misalnya kirim pesanan ke server
  // Di sini Anda bisa menambahkan kode untuk mengirim data pesanan ke server
  
  // Setelah selesai, tutup modal
  modal.style.display = "none";
}); //ini adalah fitur untuk menampilkan pop up pada card 1


//nah kalau ini adalah fitur link to whatsapp untuk card 1
function orderNow() {
  var coffeeName = document.getElementById("coffeeName").value; // Anda perlu mendapatkan nilai coffeeName dari elemen HTML, mungkin dari input atau elemen lainnya
  var price = document.getElementById("price").value; // Anda perlu mendapatkan nilai price dari elemen HTML, mungkin dari input atau elemen lainnya
  var quantity = document.getElementById("quantity").value; // Anda perlu mendapatkan nilai quantity dari elemen HTML, mungkin dari input atau elemen lainnya

  var message = "Pesanan Anda:\n" + coffeeName + "\nHarga Satuan: " + price + "\nHarga Total: " + (price * quantity); // Gunakan \n untuk membuat baris baru

  var adminPhoneNumber = "6285788322061";
  var whatsappURL = "https://api.whatsapp.com/send?phone=" + adminPhoneNumber + "&text=" + encodeURIComponent(message);

  window.open(whatsappURL);

  // Tampilkan tombol "Kembali ke Halaman Utama"
  document.getElementById("backButton").style.display = "block";
}//nah kalau ini adalah fitur link to whatsapp untuk card 1
