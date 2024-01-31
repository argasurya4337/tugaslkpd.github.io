// // NO 1
for(let go = 1; go <= 50; go++) {
    console.log(go)
}

// NO 2
for(let go = 1; go <= 50; go++) {
    if(go % 2 == 1){
    console.log(go)
}
}

// NO 3
for(let go = 1; go <= 50; go++) {
    if(go % 2 == 0){
    console.log(go)
}
}

// NO 4
for(let go = 1; go <= 50; go++) {
    if(go % 2 == 1){
        console.log(go + " bilangan ganjil")
    }
    else{
        console.log(go + " bilangan genap")
    }
}

// NO 5
let total = 0;
let bilanganTerbesar = -Infinity;
let bilanganTerkecil = Infinity;

for (let i = 1; i <= 20; i++) {
  let bilangan = parseFloat(prompt(`Masukkan bilangan ke-${i}:`));
  total += bilangan;

  if (bilangan > bilanganTerbesar) {
    bilanganTerbesar = bilangan;
  }

  if (bilangan < bilanganTerkecil) {
    bilanganTerkecil = bilangan;
  }
}

let rataRata = total / 20;
console.log(`Bilangan Terbesar: ${bilanganTerbesar}`);
console.log(`Bilangan Terkecil: ${bilanganTerkecil}`);
console.log(`Rata-rata: ${rataRata}`);