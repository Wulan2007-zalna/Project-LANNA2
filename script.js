document.getElementById("btnUbah").addEventListener("click", () => {
    const judul = document.getElementById("judul");

    judul.classList.remove("fade-in");   // reset animasi
    setTimeout(() => {
        judul.textContent = "Teksnya jadi jauh lebih keren! 😎";
        judul.classList.add("fade-in");  // animasi muncul lagi
    }, 100);
});
