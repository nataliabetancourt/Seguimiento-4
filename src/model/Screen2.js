class Screen2{
    constructor(arraySize){
        this.arraySize = arraySize;

        //Arguments button1
        this.xb1 = 175;
        this.yb1 = 600;

        //Arguments button2
        this.xb2 = 375;
        this.yb2 = this.yb1; //not used for now

        //Arguments button3
        this.xb3 = 575;
        this.yb3 = this.yb1; //not used for now

        //Arguments button4
        this.xb4 = 775;
        this.yb4 = this.yb1; //not used for now

        //Arguments Back button
        this.xBack = 50;
        this.yBack = 50;
        this.clickBack = false;

        this.rect = [];
        this.circles = [];

        //Adding rectangles based on number on previous screen
        for (let index = 0; index < this.arraySize; index++) {
            this.rect.push(new Rect((index*110)+50, 175, 40, 50));
            console.log("ensayo");
        }


        console.log(this.arraySize);
        console.log(this.rect.length);

    }

    Draw(){
        background(220);
        rectMode(CENTER);
        noStroke();

        //button1
        fill(80);
        rect(this.xb1, this.yb1, 150, 80);
        fill(255);
        textSize(20);
        textAlign(CENTER);
        text("ADD", this.xb1, this.yb1+10);

        //button2
        fill(80);
        rect(this.xb2, this.yb2, 150, 80);
        fill(255);
        textSize(20);
        textAlign(CENTER);
        text("REMOVE", this.xb2, this.yb1+10);

        //button3
        fill(80);
        rect(this.xb3, this.yb3, 150, 80);
        fill(255);
        textSize(20);
        textAlign(CENTER);
        text("DOUBLE SIZE", this.xb3, this.yb1+10);

        //button4
        fill(80);
        rect(this.xb4, this.yb4, 150, 80);
        fill(255);
        textSize(20);
        textAlign(CENTER);
        text("CIRCLE", this.xb4, this.yb1+10);

        //back button
        fill(80);
        rect(this.xBack,this.yBack,100,50);
        fill(255);
        textSize(20);
        textAlign(CENTER);
        text("Go Back", 50, 60);
    }

    drawShapes(){
        this.rect.forEach(element => {
            element.DrawRect();
            element.Movement();
        });

        for (let index = 0; index < this.circles.length; index++) {
            this.circles[index].DrawCircle();
            this.circles[index].Movement();
        }
    }

    clickButtons(){
        //Button 1 - Add
        if(mouseX > this.xb1-75 && mouseX < this.xb1+75 
            && mouseY > this.yb1-40 && mouseY < this.yb1+40){
            if (this.rect.length-2 <= 10) {
                this.rect.push(new Rect(this.rect[this.rect.length-1].getPosX()+110, 175, 50));
            }

            if (this.circles.length-2 <= 10) {
                this.circles.push(new Circle(this.rect[this.rect.length-1].getPosX()+110, 375, 50, 10));
                for (let index = 0; index < this.circles.length; index++) {
                    this.circles[index].setValue(this.rect[index].getValue()); 
                }
            }
        }

        //Button 2 - Remove
        if(mouseX > this.xb2-75 && mouseX < this.xb2+75 
            && mouseY > this.yb1-40 && mouseY < this.yb1+40){
            this.rect.pop();
            this.circles.pop();
        }

        //Button 3 - Double Size
        if(mouseX > this.xb3-75 && mouseX < this.xb3+75 
            && mouseY > this.yb1-40 && mouseY < this.yb1+40){
            
            this.rect.forEach(element => {
                element.setSize(element.getSize()*2);
            });

            this.circles.forEach(element => {
                element.setSize(element.getSize()*2);
            });
        }

        //Button 4 - Circle
        if(mouseX > this.xb4-75 && mouseX < this.xb4+75 
            && mouseY > this.yb1-40 && mouseY < this.yb1+40){

                this.circles = this.rect.map(function(element, index){
                    return (new Circle((index*70)+50, 375, 40, 10))
                });

                for (let index = 0; index < this.circles.length; index++) {
                    this.circles[index].setPosX(this.rect[index].getPosX());
                    this.circles[index].setValue(this.rect[index].getValue()); 
                }
        }

        //Back button
        if(mouseX > this.xBack-100/2 && mouseX < this.xBack+100/2 
            && mouseY > this.yBack-50/2 && mouseY < this.yBack+50/2){
            //console.log("funciona");
            this.clickBack = true;
        }
    }

    getXB1(){
        return this.xb1;
    }

    getXB2(){
        return this.xb2;
    }

    getXB3(){
        return this.xb3;
    }

    getXB4(){
        return this.xb4;
    }

    getYB1(){
        return this.yb1;
    }

    getXback(){
        return this.xBack;
    }

    getYBAck(){
        return this.yBack;
    }

    getClick(){
        return this.clickBack;
    }
}