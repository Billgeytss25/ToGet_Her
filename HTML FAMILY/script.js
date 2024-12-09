document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".fireworks-container");
    const colors = ["#ff4d4d", "#ff66b2", "#ffcc00", "#33cc33", "#3399ff", "#9900cc"];
  
    setInterval(() => {
      // Buat elemen hati
      const heart = document.createElement("div");
      heart.classList.add("heart");
  
      // Posisi acak
      const x = Math.random() * 100; // Horizontal
      const y = Math.random() * 100; // Vertikal
      const size = Math.random() * 40 + 60; // Ukuran acak (60-100px)
      const color = colors[Math.floor(Math.random() * colors.length)]; // Warna acak
  
      heart.style.left = `${x}vw`;
      heart.style.top = `${y}vh`;
      heart.style.width = `${size}px`;
      heart.style.height = `${size}px`;
      heart.style.color = color;
  
      // Tambahkan ke container
      container.appendChild(heart);
  
      // Hapus elemen setelah animasi selesai
      setTimeout(() => {
        heart.remove();
      }, 3000); // Durasi animasi sesuai keyframes
    }, 400); // Frekuensi kembang api
  });
  