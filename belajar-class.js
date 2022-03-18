/* COntoh belajar di kelas tentang OOP */
class Manusia {
    constructor(nama, alamat, namaPanggilan, tahunLahir){
        this.nama = nama;
        this.alamat = alamat;
        this.namaPanggilan = namaPanggilan;
        this.tahunLahir = tahunLahir;
    }

    kenalanDong(){
        console.log(
            `Halo, nama saya ${this.nama}, 
             Saya tinggal di ${this.alamat},
             Panggilan saya adalah ${this.tahunLahir}`
        );
    }

    hitungUmur(){
        const umur = 2022 - this.tahunLahir;
        return umur;
    }

    makan (){
        console.log(`${this.nama} suka makan nasi nyamnyamnyam`);
    }
}

class Dokter extends Manusia {
    constructor (nama, alamat, namaPanggilan, tahunLahir, spesialis){
        super (nama, alamat, namaPanggilan, tahunLahir);

        this.spesialis = spesialis;
    }
}

class Supir extends Manusia {
    constructor (nama, alamat, namaPanggilan, tahunLahir, kendaraan, sim){
        super (nama, alamat, namaPanggilan, tahunLahir);

        this.kendaraan = kendaraan;
        this.sim = sim;
    }

}