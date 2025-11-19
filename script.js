const dataKota = [
    {
        nama: "Surabaya",
        ikon: "Tugu Pahlawan",
        makanan: "Rawon, Rujak Cingur",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126917.80756496238!2d112.631!3d-7.2756"
    },
    {
        nama: "Malang",
        ikon: "Alun-Alun Tugu",
        makanan: "Bakso Malang, Orem-orem",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126904.82066328363!2d112.558!3d-7.9666"
    },
    {
        nama: "Kediri",
        ikon: "Simpang Lima Gumul",
        makanan: "Tahu Takwa, Nasi Pecel",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126946.62599570241!2d112.046!3d-7.848"
    },
    {
        nama: "Blitar",
        ikon: "Makam Bung Karno",
        makanan: "Pecel Blitar",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126938.4!2d112.15!3d-8.095"
    },
    {
        nama: "Banyuwangi",
        ikon: "Taman Sritanjung",
        makanan: "Sego Tempong, Pecel Rawon",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126948.2!2d114.34!3d-8.21"
    },
    {
        nama: "Lamongan",
        ikon: "Monumen Bandeng Lele",
        makanan: "Soto Lamongan, Wingko",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126922.4!2d112.42!3d-7.118"
    },
    {
        nama: "Madiun",
        ikon: "Alun-Alun Madiun",
        makanan: "Brem, Pecel Madiun",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126998.3!2d111.509!3d-7.62"
    },
    {
        nama: "Jember",
        ikon: "Alun-Alun Jember",
        makanan: "Pecel Gudeg, Suwar-suwir",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126991.2!2d113.69!3d-8.16"
    },
    {
        nama: "Probolinggo",
        ikon: "Matahari Terbit Bromo",
        makanan: "Soto Kraksaan",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126979.4!2d113.2!3d-7.75"
    },
    {
        nama: "Mojokerto",
        ikon: "Candi Tikus",
        makanan: "Sambel Wader",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126926.1!2d112.42!3d-7.47"
    }
];

const container = document.getElementById("container");

dataKota.forEach(kota => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
        <h2>${kota.nama}</h2>
        <p><strong>Ikon:</strong> ${kota.ikon}</p>
        <p><strong>Makanan:</strong> ${kota.makanan}</p>
    `;

    card.addEventListener("click", () => {
        window.location.href = `detail.html?id=${kota.nama}`;
    });

    container.appendChild(card);
});
