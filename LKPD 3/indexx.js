  // NO 1
  let hargajeruk = 5000;
  let hargadiskon = 5;
  let beli = 5;

  let hasil = hargajeruk * hargadiskon;
  let total = hasil * 5/500;
  let bayar = hasil - total;

  console.log(`harga sebelum diskon: ${hasil} diskon: ${total} harga setelah diskon: ${bayar}`) 

  // NO 2
  let bilangan;   
  let satuan;
  let puluhan;
  let ratusan;

  console.log("Masukkan bilangan: ");
  bilangan = Number(prompt());

  satuan =Math.floor(bilangan % 10);

  puluhan =Math.floor(bilangan  % 100 / 10);

  ratusan =Math.floor(bilangan % 1000 / 100);

  console.log(`Satuan: ${satuan}`)
  console.log(`Puluhan: ${puluhan}`)
  console.log(`Ratusan: ${ratusan}`)


  // NO 3
  let suhu = 300;
  if (suhu > 300){
      jadi = "PANAS";
  } else if (suhu < 250){
      jadi = "DINGIN";
  } else{
      jadi = "NORMAL"
  }
  console.log(suhu)
  console.log(jadi)