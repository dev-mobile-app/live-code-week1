// Competencies: Loopings
/*
=============
Number Ladder
=============
Instruksi
=========
Buatlah sebuah proses beberapa penghitungan dengan menggunakan looping (boleh dengan while atau for)
Disediakan variable height. 
Buatlah sebuah tangga angka dengan pola berikut:
contoh 1 (height = 3):
1
12
123
contoh 2 (height = 5):
1
12
123
1234
12345
 
contoh 3 (height = 1):
1
tinggi tangga sesuai dengan nilai variable height, dan isi dari tangga adalah angka dari height itu sendiri.
Ketentuan
=========
Wajib menggunakan looping!
*/

var height = 0
for(var i = 1; i <=3; i++){
  height = String(height + i)
  console.log(height)
  }
  
var height = 0
for(var i = 1; i <=5; i++){
  height = String(height + i)
  console.log(height)
  }

var height = 0
for(var i = 1; i <=1; i++){
  height = String(height + i)
  console.log(height)
  }
