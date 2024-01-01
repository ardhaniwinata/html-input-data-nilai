function submitForm() {
    var nama = document.getElementById("nama").value;
    var nim = document.getElementById("nim").value;
    var prodi = document.getElementById("prodi").value;

    var resultDiv = document.getElementById("result");

    // Menetapkan nilai yang diharapkan
    var expectedNama = "Ardhaniwinata";
    var expectedNIM = "2023806087";
    var expectedProdi = "Teknologi Informasi";

    // Memeriksa apakah nilai sesuai atau tidak
    if (nama === expectedNama && nim === expectedNIM && prodi === expectedProdi) {
        resultDiv.innerHTML = "Nilai: 85 <br>" +
                              "Nama: " + nama + "<br>" +
                              "NIM: " + nim + "<br>" +
                              "Prodi: " + prodi;
    } else {
        resultDiv.innerHTML = "Nama, NIM, atau Prodi tidak terdaftar!";
    }
}
