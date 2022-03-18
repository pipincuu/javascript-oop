class Tumbuhan {
    constructor (namaTumbuhan, jenisTumbuhan, tempatHidup) {
        this.namaTumbuhan = namaTumbuhan;
        this.jenisTumbuhan = jenisTumbuhan;
        this.tempatHidup = tempatHidup;
    }

    fotosintesisTumbuhan(){
        console.log(`${this.namaTumbuhan} memproduksi energi dengan bantuan sinar matahari dan menjadi bahan makanan`)
    } 
}

class TanamanHias extends Tumbuhan {
    constructor (namaTumbuhan, jenisTumbuhan, tempatHidup, cirikhasTumbuhan, fungsiTumbuhan) {
        super (namaTumbuhan, jenisTumbuhan, tempatHidup)
        this.cirikhasTumbuhan = cirikhasTumbuhan
        this.fungsiTumbuhan = fungsiTumbuhan
    }

    fotosintesis() {
        super.fotosintesisTumbuhan();
        console.log("tanaman hias juga berfotosintesis dongg :) ")
    }
    hiasLingkungan(){
        console.log(`${this.namaTumbuhan} ini mempunyai karakteristik ${this.cirikhasTumbuhan} dan dapat digunakan untuk menghias rumah/taman dan ${this.fungsiTumbuhan[0]}, dan juga menjadi ${this.fungsiTumbuhan[1]}`)
    }
}

const algaHijau = new Tumbuhan ("Alga Hijau", "Tumbuhan Hijau", "Daratan")
algaHijau.fotosintesisTumbuhan();

const lidahMertua = new TanamanHias ("Sansevieria", "Tumbuhan Tropis", "Di dalam rumah", "Daunnya keras dan ujungnya tegak meruncing", ["menghisap polusi udara", "pajangan dalam rumah"])
lidahMertua.hiasLingkungan();
