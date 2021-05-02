let controller;

function setup() {
  createCanvas(1000, 700);

  controller = new MainController();

}

function draw() {
  background(255);
  controller.Draw();

}

function mousePressed(){
  controller.clickButtons1();
  
}

function keyTyped(){
  if (key == 'n') {
    controller.keySort();
  }
}
