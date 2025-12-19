const hamburger = document.getElementById("hamburger");
const menubar = document.getElementById("menubar");


hamburger.addEventListener("click", () => {
    menubar.classList.toggle("hidden");
})

document.getElementById("buttonSubmit").addEventListener("click", function (e) {
    e.preventDefault();

    const nama = document.getElementById("nama").value;
    const tanggal = document.getElementById("tanggal").value;
    const genderEl = document.querySelector('input[name="jeniskelamin"]:checked');
    const jeniskelamin = genderEl ? genderEl.value : "Belum dipilih";
    const pesan = document.getElementById("pesan").value;

    document.getElementById("outputNama").textContent = `nama :` + nama;
    document.getElementById("outputTanggal").textContent = `tanggal :` + tanggal;
    document.getElementById("outputGender").textContent = `Jenis kelamin :` + jeniskelamin;
    document.getElementById("outputPesan").textContent = `Pesan :` + pesan;

});
