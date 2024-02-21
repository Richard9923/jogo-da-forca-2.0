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

let tentativasDeLetras = [];
let vidas = 6;
let gameOn = true;
console.log(`Palavra secreta: ${display}.`);
console.log(`Suas vidas: ${vidas}.`);

while (gameOn == true) {
  let letraTentada = prompt(
    "Tente adivinhar uma letra da palavra secreta.".toLowerCase()
  );

  if (
    display.includes(letraTentada) ||
    tentativasDeLetras.includes(letraTentada)
  ) {
    console.log(`Você já tentou essa letra: ${letraTentada}.`);
  }

  tentativasDeLetras.push(letraTentada);

  for (let i = 0; i < word.length; i++) {
    letra = word[i];
    if (letraTentada == letra) {
      display[i] = letra;
      console.log(`Palavra secreta: ${display}.`);
    }
  }
  if (!display.includes(letraTentada)) {
    vidas -= 1;
    console.log(`Suas vidas: ${vidas}.`);
  }
  if (!display.includes("_")) {
    console.log(
      `Parabéns! Você venceu o jogo. Descobrindo a palavra secreta: ${word}.`
    );
    gameOn = false;
  } else if (vidas == 0) {
    console.log(
      `Infelizmente você perdeu o jogo, não adivinhando a palavra secreta: ${word}.`
    );
    gameOn = false;
  }
}
