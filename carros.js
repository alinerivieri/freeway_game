// TURO RELACIONADO AOS CARROS

let xCarros = [800, 800, 800, 800, 800, 800];
let yCarros = [50, 100, 150, 215, 270, 320];
let velocidadeCarros = [2, 2.5, 5.6, 5, 3.3, 2.7];
let comprimentoCarro = 50;
let alturaCarro = 30;


function mostraCarro(){
  for (let i = 0; i < imagemCarros.length; i++){
    image(imagemCarros[i], xCarros[i], yCarros[i], comprimentoCarro, alturaCarro);
  }
}

function movimentaCarro() {
  for (let i = 0; i < imagemCarros.length; i++) {
    xCarros[i] -= velocidadeCarros[i];
  }
}

function voltaPosicaoInicial() {
  for (let i = 0; i < imagemCarros.length; i++) {
    if (passouTodaATela(xCarros[i])) {
      xCarros[i] = 800;
    }
  }
}

function passouTodaATela(xCarro){
  return xCarro < -50;
}

