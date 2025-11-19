    const dataKota = [
    {
        nama: "Surabaya",
        ikon: "Tugu Pahlawan",
        makanan: "Rawon, Rujak Cingur, Lontong Balap, Semanggi Suroboyo",
        sejarah: "Surabaya adalah ibu kota Jawa Timur dan dikenal sebagai Kota Pahlawan.",
        julukan: "Kota Pahlawan",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.7396216637033!2d112.731!3d-7.250445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fa0688bffa7b%3A0xfd004d6b7f57e9ec!2sTugu%20Pahlawan!5e0!3m2!1sid!2sid!4v1697030000000"
    },


    {
        nama: "Malang",
        ikon: "Alun-Alun Tugu",
        makanan: "Bakso Malang, Orem-orem",
        map: "https://www.google.com/maps/embed?pb=!1m18..."
    }
    // lanjutkan semua kota...
];

// Ambil dari URL → ?id=Malang
const urlParams = new URLSearchParams(window.location.search);
const namaKota = urlParams.get("id");

// Cari datanya
const kota = dataKota.find(k => k.nama === namaKota);

// Tampilkan ke halaman
document.getElementById("namaKota").textContent = kota.nama;
document.getElementById("ikon").textContent = "Ikon Kota: " + kota.ikon;
document.getElementById("makanan").textContent = "Makanan Khas: " + kota.makanan;
document.getElementById("mapDetail").src = kota.map;
