
    onload = () => {
      const c = setTimeout(() => {
        document.body.classList.remove("not-loaded");

        const titles = ('Happy birthday to the one and only, my Lee Haechan').split('');
        const titleElement = document.getElementById('title');
        let index = 0;

 function play() {
          //Link Audio Bisa Diganti
          var audio = new Audio('anchor.mp3');
          audio.play();
        }

        function appendTitle() {
          if (index < titles.length) {
            titleElement.innerHTML += titles[index];
            index++;
            setTimeout(appendTitle, 300); // 300ms delay per huruf
          } else {
            // Setelah teks utama selesai, tambahkan subtitle kecil
            const subtitle = document.createElement('p');
            subtitle.innerText = "Hey love, this is your day, i hope it's filled with laughter, love, and everything that makes your heart light up. You've brought so much warmth into my life. I'm so proud of you, and so lucky to witness your magic. So here's to you, my favorite Haechan. May your day be as bright as your smile, and your year be as unforgettable as you are. 🩷";
            subtitle.style.fontSize = '20px'; // Ukuran font lebih kecil
            subtitle.style.marginTop = '2px'; // Spasi antara teks utama dan subtitle
            subtitle.style.color = '#fff'; // Warna abu-abu untuk teks subtitle

            // Menambahkan subtitle di bawah #title
            titleElement.appendChild(subtitle);
          }
        }

    appendTitle();

    clearTimeout(c);
  }, 1000);
};
