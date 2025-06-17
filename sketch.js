let xJogador1=600;
let yJogador2=0;
let xJogador3=500;
let xJogador4=0;
var img01;


function setup() {
  createCanvas(800, 800);
img01= loadImage('cidade-campo-_PRINCIPAL-768x569.jpg');
}

function draw() {
  background(img01,80);
  
 textSize(60);
 text("🚁", xJogador1,100);  
 xJogador1  -= random(1);
  
  
 textSize(60);
 text("🚁", xJogador1,100);  
 xJogador1  -= random(1);
   
   
 textSize(60);
 text("🐎", xJogador3,750);  
 xJogador3 -= random(3);
 

}

