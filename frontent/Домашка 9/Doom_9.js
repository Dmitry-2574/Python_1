const secretLetter = [
    ['DFВsjl24sfFFяВАДОd24fssflj234'],
    ['asdfFп234рFFdо24с$#afdFFтasfо'],
    ['оafбasdf%^о^FFжа$#af243ю'],
    ['afпFsfайFтFsfо13н'],
    ['fн13Fа1234де123юsdсsfь'],
    ['чFFтF#Fsfsdf$$о'],
    ['и$##sfF'],
    ['вSFSDам'],
    ['пSFоsfнрSDFаSFвSDF$иFFтsfaсSFя'],
    ['FFэasdfтDFsfоasdfFт'],
    ['FяDSFзFFsыSfкFFf']
  ];
const smallRus = ['а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и',
    'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф',
    'х', 'ц', 'ч', 'ш', 'щ', 'ъ', 'ы', 'ь', 'э', 'ю', 'я'];

let resultArray = [];

for (innerArray of secretLetter) {
    
    for (rowString of innerArray) {
        resultArray.push(' ')
        for (char of rowString){
    if (smallRus.includes(char)){
            resultArray.push(char)
        }
     }   
   }
}
console.log(resultArray.join(""));

// for (innerArray of secretLetter) {
//     resultArray.push(" ")
//       for (char of innerArray[0]) {
        
     
//         if (smallRus.includes(char)){
//             resultArray.push(char)
//         }
//      }   
// }
// console.log(resultArray.join(""));
