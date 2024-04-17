


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



//in js buat rss feed



//dahlah
        // URL RSS feed
          // URL RSS feed
          const rssFeedUrl = 'https://rss.app/feeds/bYqLnWg0BL0BPUTh.xml';

          // Mendapatkan elemen div untuk menampilkan RSS feed
          const rssContainer = document.getElementById('rss-feed');
  
          // Mendapatkan data dari RSS feed
          fetch(rssFeedUrl)
              .then(response => response.text())
              .then(xmlData => {
                  // Parsing XML data
                  const parser = new DOMParser();
                  const xmlDoc = parser.parseFromString(xmlData, 'text/xml');
                  const items = xmlDoc.querySelectorAll('item');
  
                  // Menampilkan setiap item RSS feed
                  items.forEach(item => {
                      const title = item.querySelector('title').textContent;
                      const link = item.querySelector('link').textContent;
                      const thumbnailUrl = item.querySelector('enclosure').getAttribute('url'); // Mengambil URL gambar thumbnail
  
                      // Membuat elemen untuk menampilkan judul dan link
                      const feedItem = document.createElement('div');
                      feedItem.classList.add('feed-item');
                      const titleElement = document.createElement('h2');
                      const thumbnailElement = document.createElement('img'); // Membuat elemen gambar
                      const linkElement = document.createElement('a');
  
                      // Mengatur judul dan link
                      titleElement.textContent = title;
                      linkElement.textContent = 'Read more';
                      thumbnailElement.src = thumbnailUrl; // Mengatur URL gambar thumbnail
                      linkElement.href = link;
                      linkElement.target = '_blank'; // Buka link di tab baru
  
                      // Menambahkan elemen ke dalam div RSS feed
                      feedItem.appendChild(titleElement);
                      feedItem.appendChild(thumbnailElement); // Menambahkan elemen gambar
                      feedItem.appendChild(linkElement);
                      rssContainer.appendChild(feedItem);
                  });
              })
              .catch(error => {
                  console.error('Error fetching or parsing RSS feed:', error); // Tambahkan penanganan kesalahan
              });