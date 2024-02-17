const listProduktu = [
    { nazev: "Tužka", cenaZaKus: 10, pocetNaSklade: 100 },
    { nazev: "Sešit", cenaZaKus: 20, pocetNaSklade: 150 },
    { nazev: "Batoh", cenaZaKus: 500, pocetNaSklade: 50 },
    { nazev: "Pravítko", cenaZaKus: 30, pocetNaSklade: 75 },
    { nazev: "Pero", cenaZaKus: 40, pocetNaSklade: 200 },
    { nazev: "Kalkulačka", cenaZaKus: 200, pocetNaSklade: 30 },
    { nazev: "Barvy", cenaZaKus: 150, pocetNaSklade: 80 },
    { nazev: "Štětce", cenaZaKus: 60, pocetNaSklade: 120 },
    { nazev: "Ležidlo", cenaZaKus: 300, pocetNaSklade: 40 },
    { nazev: "Mapa světa", cenaZaKus: 180, pocetNaSklade: 60 }
];

const vypis = document.getElementById("list");
const filtvstup = document.getElementById("filtvstup");

const zrusitfilt = document.getElementById("zrusitfilt");

function obraz(produkty = listProduktu) {
    if (!vypis) {
        alert.error("Nejde načíst seznam");
        return;
    }

    vypis.innerHTML = "";

    produkty.forEach(produkt => {
        const okno = document.createElement("tr");
        okno.innerHTML = '<td>' + produkt.nazev + '</td>' +
                         '<td>' + produkt.cenaZaKus + '</td>' +
                         '<td>' + produkt.pocetNaSklade + '</td>' +
                         '<td><input type="number" class="aktulizovatvstup" placeholder="Nové množství"></td>' +
                         '<td><button class="aktualizovat">Aktualizovat</button></td>';
        vypis.appendChild(okno);
    });
    
    const aktualizovat = document.querySelectorAll(".aktualizovat");
    aktualizovat.forEach((button, hodnota) => {
        button.addEventListener("click", () => aktualizovatmnozstvi(hodnota));
        const filtrovanyprodukty = listProduktu.filter(product => product.pocetNaSklade < uzivatelvstup);
        obraz(filtrovanyprodukty);
    });
}


function nejdržší() {
    let drahy = listProduktu[0];
    for (let i = 1; i < listProduktu.length; i++) {
        if (listProduktu[i].cenaZaKus > drahy.cenaZaKus) {
            drahy = listProduktu[i];
        }
    }
    alert("Nejdražší produkt je: " + drahy.nazev + " za " + drahy.cenaZaKus);
}

function filtmn() {
    const uzivatelvstup = filtvstup.value;

    if (uzivatelvstup === null || isNaN(uzivatelvstup)) {
        alert("Neplatná vstup");
        return;
    }

    const  vyfiltrprodutk= listProduktu.filter(product => product.pocetNaSklade < uzivatelvstup);
    obraz(vyfiltrprodutk);

    if (vyfiltrprodutk.length === 0) {
        alert("Žádný produkt neobsahuje méně než " + uzivatelvstup + " kusů.");

    }
}

function zrusFiltr() {
    filtvstup.value = "";
    obraz(listProduktu);
}

function celkem() {
    let maxhodnota = 0;
    for (let i = 0; i < listProduktu.length; i++) {
        maxhodnota += listProduktu[i].cenaZaKus * listProduktu[i].pocetNaSklade;
    }
    alert("Celková hodnota zásob je: " + maxhodnota + ".");
}

function aktualizovatmnozstvi(hodnota) {
    const novuzivstup = document.querySelectorAll(".aktulizovatvstup")[hodnota];
    const novemnoz = Number(novuzivstup.value);

    if (isNaN(novemnoz)) {
        alert("Neplatná vstup");
        return;
    }

    listProduktu[hodnota].pocetNaSklade = novemnoz;
    obraz(listProduktu);
}

zrusitfilt.addEventListener("click", zrusFiltr);

    obraz(listProduktu);
obraz();
