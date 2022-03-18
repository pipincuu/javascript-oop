function kenalanDong(nama, umur) {
    console.log(`Halo, nama saya ${nama}`);
    console.log(`Umur saya ${umur}`);
}

kenalanDong("Sabrina", 20);

function luasPersegiPanjang (panjang, lebar) {
    const hasil = panjang * lebar;
    return hasil;
}

const luasPersegiPanjang1 = luasPersegiPanjang(20, 5);
console.log(luasPersegiPanjang1);

const luasPersegiPanjang2 = luasPersegiPanjang(120, 90);
console.log(luasPersegiPanjang2);


function volumeBalok (panjang, lebar, tinggi) {
    const hasilHitung = panjang * lebar * tinggi;
    return hasilHitung;
} 

const hitungVolumeBalok1 = volumeBalok (10, 10, 20);
console.log(hitungVolumeBalok1);

const hitungVolumeBalok2 = volumeBalok (20, 30, 50);
console.log(hitungVolumeBalok2);