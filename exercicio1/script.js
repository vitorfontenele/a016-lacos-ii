const array = [
  [27, 4, 20, 13, 14],
  [11, 15, 12, 8, 9],
  [5, 5, 12, 16, 4],
  [20, 33, 11, 12, 19],
  [3, 3, 4, 5, 10],
];

let jogador;
for (let t in array) {
  jogador = `Jogador ${(Number(t) + 1).toString()}: `;
  let temporadas = array[t];
  for (let gols of temporadas) {
    jogador += String(gols) + ", ";
  }
  console.log(jogador.slice(0, -2));
}
