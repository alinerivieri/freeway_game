// EXIBIÇÃO EM TELA

function setup() {
  createCanvas(800, 400);
 // somDaTrilha.loop();
}

function draw() {
  background(imagemDaEstrada);
  mostraAtor ();
  mostraCarro();
  movimentaCarro();
  movimentaAtor();
  voltaPosicaoInicial();
  verificaColisao();
  incluiPontos();
  marcaPonto();
}


