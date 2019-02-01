// Competencies: Conditional

/*
==============
Shop Till Drop
==============
Instruksi 
---------
Bu Tini sedang berbelanja di supermarket menggunakan debit card dengan sejumlah saldo.
Apa yang ia belanjakan menyesuaikan dengan beberapa kondisi:
Jika debit card tidak bernama (nama kosong), maka tampilkan di log "Tidak bisa belanja. Pulang lagi deh." Kemudian, hentikan program.
Jika saldo debit card dibawah 10.000, maka tampilkan di log "Tidak bisa belanja. Saldo minimal 10.000.". Kemudian, hentikan program.
Setelah saldo mencukupi, ibu Tini dihadapkan pilihan untuk membeli jenis daging sesuai uang yang tersedia:
- Jika saldo debit minimal 200.000, maka bu Tini akan membeli daging sapi. Ubah nilai shoppingBag dengan "Beef", dan kurangi saldo dengan nilai 200000.
- Jika saldo debit minimal 100.000 (dan dibawah 200.000), bu Tini akan membeli daging ikan. Ubah nilai ShoppingBag dengan "Fish", dan kurangi saldo dengan nilai 100000. 
- Jika saldo debit minimal 50.000 (dan dibawah 100.000), bu Tini akan membeli daging ayam. Ubah nilai ShoppingBag dengan "Chicken", dan kurangi saldo dengan nilai 50000.
- Jika saldo tidak memenuhi untuk pembelian ketiga nya, maka bu Tini akan membeli indomie. Ubah nilai ShoppingBag dengan "Indomie", dan kurangi saldo dengan nilai 10000.
Di akhir program, tampilkan di log "Ibu Tini membeli <nilai Shopping Bag> dan sisa uang: <nilai sisa saldo>"
*/

var debitCard = 'Ibu Tini'
var saldo = 700000

var hargaBeef = 200000
var hargaFish = 100000
var hargaChicken = 50000
var hargaIndomie = 10000
// var nilaiShoppingBag =
// var sisaUang

if(debitCard === '' || debitCard === undefined){
  console.log ('Tidak bisa belanja. Pulang lagi deh.')
  }else if(saldo < 10000){
  console.log('Tidak bisa belanja. Saldo minimal 10.000.')
  }else if(debitCard === 'Ibu Tini' && saldo >= 200000){
    console.log( debitCard + '  membeli <"beef"> dan sisa uang: ');
    console.log(saldo-hargaBeef)
  }else if(debitCard === 'Ibu Tini' && saldo < 200000 && saldo >= 100000){
    console.log( debitCard + '  membeli <"Fish"> dan sisa uang: ');
    console.log(saldo-hargaFish)
  }else if(debitCard === 'Ibu Tini' && saldo < 100000 && saldo >= 50000){
    console.log( debitCard + '  membeli <"Chicken"> dan sisa uang: ');
    console.log(saldo-hargaChicken)
  }else if(debitCard === 'Ibu Tini' && saldo < 50000){
    console.log( debitCard + '  membeli <"Indomie"> dan sisa uang: ');
    console.log(saldo-hargaIndomie)
  }
