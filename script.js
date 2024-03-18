var swiper = new Swiper('.swiper-container', {
    direction: 'vertical', // Menentukan arah slide menjadi vertikal
    slidesPerView: 'auto', // Mengatur jumlah slide yang terlihat dalam satu waktu
    spaceBetween: 30, // Mengatur jarak antara slide
    mousewheel: true, // Memungkinkan navigasi slide menggunakan scroll mouse
  });


  const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const carouselSlide = document.querySelector('.carousel-slide');

let counter = 0;

nextBtn.addEventListener('click', () => {
  carouselSlide.scrollLeft += 350; // Adjust scroll distance according to your content width
  counter++;
});

prevBtn.addEventListener('click', () => {
  if (counter > 0) {
    carouselSlide.scrollLeft -= 350; // Adjust scroll distance according to your content width
    counter--;
  }
});



// Buat instance Hammer.js pada elemen carousel-slide
const hammer = new Hammer(carouselSlide);

// Atur opsi swipe
hammer.get('swipe').set({ direction: Hammer.DIRECTION_HORIZONTAL });

// Tambahkan event listener untuk swipe kiri
hammer.on('swipeleft', () => {
  carouselSlide.scrollLeft += 350; // Sesuaikan dengan jarak yang sesuai
});

// Tambahkan event listener untuk swipe kanan
hammer.on('swiperight', () => {
  carouselSlide.scrollLeft -= 350; // Sesuaikan dengan jarak yang sesuai
});




window.addEventListener('scroll', function() {
  var footer = document.getElementById('myFooter');
  var contentHeight = document.querySelector('.content').offsetHeight;
  var windowHeight = window.innerHeight;
  var scrollY = window.scrollY;

  if ((contentHeight - windowHeight - scrollY) > 0) {
    footer.style.position = 'absolute';
    footer.style.bottom = '0';
  } else {
    footer.style.position = 'fixed';
    footer.style.bottom = '0';
  }
});

  