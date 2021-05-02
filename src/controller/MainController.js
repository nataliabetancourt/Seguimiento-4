class MainController{
    constructor(){

        this.screen1 = new Screen1();
        this.startS2 = false;
    }

    Draw(){

        if (this.screen1.click == false) {
            this.screen1.Draw();
          }
        
          if(this.startS2){
            this.screen2.Draw();
            this.screen2.drawShapes();
          }

    }

    clickButtons1(){
        this.screen1.clickButtons();
        if (this.screen1.click == true) {
          this.screen2 = new Screen2(this.screen1.arraySize);
          this.startS2 = true;
        }
        
        if(this.startS2){
            this.screen2.clickButtons();
        }
    }

    keySort(){
      if(this.startS2){
        this.screen2.sortShapes(this.key);
    }
    }


}