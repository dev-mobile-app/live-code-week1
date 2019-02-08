// // Nomor 1
function multiplication(num1, num2){
  return num1*num2
}
console.log(multiplication(3, 6))

//nomor 2
function powerMe(num1, num2){
    return Math.pow(num1, num2)
  }
  console.log(powerMe(2, 3))

//nomor 3
function evenSiblings(num){
    var output = []
    for(var i = 1; i < num; i++){
        if(i % 2 === 0){
            // console.log(i)
            output.push(i)
        }
       
    
    }
    return output
}
console.log(evenSiblings(15))
