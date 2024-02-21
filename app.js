/* selecionando uma palavra aleotória */
const wordList = ["mouse", "teclado", "tv"];
const randomNumber = Math.floor(Math.random() * wordList.length);
const word = wordList[randomNumber];
/* display para mostrar os tracinhos da palavra secreta
for loop para adicionar os tracinhos de acordo com o número de letras na palavra.
*/
let display = [];
for (let i = 0; i != word.length; i++) {
  display.push("_");
}
