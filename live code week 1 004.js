/*
==================================
Array Mastery: Love Me Not
==================================
[INSTRUKSI]
Seorang perempuan sedang menggalaui apakah seseorang menyukai dia atau tidak. Ketimbang mencabut kelopak bunga untuk menghitung jika dia 
suka atau tidak, perempuan tersebut membuat sebuah program.
Function loveMeNot akan menerima satu parameter berupa array yang berisikan boolean.
Apabila jumlah true dalam array lebih besar dari jumlah false, maka function akan mereturn "HE LOVES ME!". Jika tidak, maka return "HE DOES NOT LOVE ME :(".
Jika jumlah true dan false sama, maka function akan me-return "GALAU".
Mudah bukan? :)
[RULE]
- Dilarang menggunakan Regex (.match, .test, dan sebagainya)
- Dilarang menggunakan method .filter, atau .reduce!
*/

function loveMeNot(arrayBolean){
  // return arrayBolean
  var cinta = 0
  var tidak = 0
  for(var i = 0; i < arrayBolean.length; i++){
    // console.log(arrayBolean[i])
    if(arrayBolean[i] === true){
    var cinta = cinta + 1
    // console.log(cinta)
    }else if(arrayBolean[i] === false){
    var tidak = tidak +1
    }
  }

  if(cinta > tidak){
    return 'HE LOVES ME!'
  }else if(cinta < tidak){
    return 'HE DOES NOT LOVE ME :('
  }else if(cinta === tidak){
    return 'GALAU'
  }

  console.log(cinta)
  console.log(tidak)
}
// TEST CASES
console.log(loveMeNot([true, false, false])); // "HE DOES NOT LOVE ME :("
console.log(loveMeNot([true, true, false, false, true])); // "HE LOVES ME!"
console.log(loveMeNot([true, false])); // "GALAU"
console.log(loveMeNot([])); // "GALAU"
console.log(loveMeNot([false])); // "HE DOES NOT LOVE ME :("