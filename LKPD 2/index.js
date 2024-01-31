//no 1//
let nama = `zacky`;
let gajipokok = 3000000;
let tunjangan = 0.20 * gajipokok;
let pajak = 0.15 * (gajipokok + tunjangan);
let gajibersih = gajipokok + (tunjangan - pajak);

console.log(`nama karyawan ${nama} besar tunjangannnya adalah ${tunjangan} besar pajaknya adalah ${pajak} dan gaji bersihnya adalah ${gajibersih}`)

//no 2//
let jam = 1;
let menit = 30;
let detik = 40;
let totaldetik = (jam * 3600) + (menit * 60) + (detik);
 console.log(totaldetik)

//no 3//
let todet = 433051
let jm = Math.floor(todet / 3600)
let sisadetik = Math.floor(todet % 3600)
let mnt = Math.floor(sisadetik / 60)
let dtk = sisadetik % 60
console.log(`${jm} jam ${mnt} menit ${dtk} detik`)
