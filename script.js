console.log("Hendek Taksi sitesi çalışıyor.");

function whatsappFiyatAl() {
    const kalkis = document.getElementById("kalkisInput").value.trim();
    const varis = document.getElementById("varisInput").value.trim();

    if (kalkis === "" || varis === "") {
        alert("Lütfen kalkış ve varış yerini giriniz.");
        return;
    }

    const telefon = "905405543534";

    const mesaj = `Merhaba, taksi fiyat bilgisi almak istiyorum.

Kalkış yeri: ${kalkis}
Varış yeri: ${varis}

Güncel fiyat bilgisi alabilir miyim?`;

    const whatsappLink = `https://wa.me/${telefon}?text=${encodeURIComponent(mesaj)}`;

    window.open(whatsappLink, "_blank");
}
