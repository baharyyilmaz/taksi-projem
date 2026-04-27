console.log("Hendek Taksi sitesi çalışıyor.");

function alanlariKontrolEt() {
    const kalkisInput = document.getElementById("kalkisInput");
    const varisInput = document.getElementById("varisInput");

    if (!kalkisInput || !varisInput) {
        alert("Form alanları bulunamadı. Lütfen sayfayı yenileyin.");
        return null;
    }

    const kalkis = kalkisInput.value.trim();
    const varis = varisInput.value.trim();

    if (kalkis === "" || varis === "") {
        alert("Lütfen kalkış ve varış yerini giriniz.");
        return null;
    }

    return { kalkis, varis };
}

function whatsappFiyatAl() {
    const bilgiler = alanlariKontrolEt();

    if (bilgiler === null) {
        return;
    }

    const telefon = "905405543534";

    const mesaj = `Merhaba, taksi fiyat bilgisi almak istiyorum.

Kalkış yeri: ${bilgiler.kalkis}
Varış yeri: ${bilgiler.varis}

Güncel fiyat bilgisi alabilir miyim?`;

    const whatsappLink = `https://wa.me/${telefon}?text=${encodeURIComponent(mesaj)}`;

    window.location.href = whatsappLink;
}

function haritadaRotaGor() {
    const bilgiler = alanlariKontrolEt();

    if (bilgiler === null) {
        return;
    }

    const mapsLink = `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(bilgiler.kalkis)}&destination=${encodeURIComponent(bilgiler.varis)}&travelmode=driving`;

    window.location.href = mapsLink;
}
