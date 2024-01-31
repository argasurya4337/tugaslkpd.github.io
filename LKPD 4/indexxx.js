// NO 1
let nama = "iqbaal"
let PABP = 90;
let MTK = 90;
let DPK = 87;
let RATARATA = PABP + MTK + DPK /3;

if(RATARATA >= 80 && RATARATA <= 100){
    hasil = "A"
}
else if (RATARATA >= 75 && RATARATA <= 80){
    hasil = "B"
}
else if (RATARATA >= 65 && RATARATA <= 75){
    hasil = "C"
}
else if (RATARATA >= 45 && RATARATA <= 65){
    hasil = "D"
}
else if (RATARATA >= 0 && RATARATA <= 45){
    hasil = "E"
}
else{
    hasil = "K"
}

console.log(hasil)
console.log(RATARATA)



// NO 2
const input = Number(prompt('Masukan kode pegawai (11 digit) : '))

const golongan = Math.floor(input % 100000000000 / 10000000000)
const tgl = Math.floor(input % 10000000000 / 100000000)
const bln = Math.floor(input % 100000000 / 1000000)
const thn = Math.floor(input % 1000000 / 100)
const nn = Math.floor(input % 10000)

if (golongan >=1 && golongan <= 4) {
    let bulanName;
    switch(bln) {
case 1: bulanName = 'JAN'; break;
case 2: bulanName = 'FEB'; break;
case 3: bulanName = 'MAR'; break;
case 4: bulanName = 'APR'; break;
case 5: bulanName = 'MEI'; break;
case 6: bulanName = 'JUN'; break;
case 7: bulanName = 'JUL'; break;
case 8: bulanName = 'AGU'; break;
case 9: bulanName = 'SEP'; break;
case 10: bulanName = 'OKT'; break;
case 11: bulanName = 'NOV'; break;
case 12: bulanName = 'DES'; break;
        default: bulanName = 'Invalid';
    } console.log(`${input} adalah seorang pegawai bergolongan ${golongan}, 
    lahir pada tanggal ${tgl} ${bulanName} ${thn} dan bernomor urut ${3}`)
} else {
    console.log('Golongan tidak valid.')
}