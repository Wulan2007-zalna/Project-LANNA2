const dataKota = [
    {
        nama: "Surabaya",
        ikon: "Tugu Pahlawan",
        makanan: "Rawon, Rujak Cingur",
        map: "https://www.google.com/maps/embed?pb=!1m18..."
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
