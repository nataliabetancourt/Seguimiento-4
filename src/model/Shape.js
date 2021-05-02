class Shape{
    constructor(posX, posY){
        this.posX = posX;
        this.posY = posY;
    }
    
}

class Rect extends Shape{
    constructor(posX, posY, size){
        super(posX, posY);
        this.size = size;
        this.speed = 2;
        this.dir = 1;
        this.value = Math.floor(Math.random()*10+1);

    }

    DrawRect(){

        fill(0);
        noStroke();
        rect(this.posX, this.posY, this.size, this.size);
        fill(255);
        textSize(20);
        text(""+ this.value, this.posX, this.posY+5);
    }

    Movement(){ //MOVEMENT 

        this.posX += this.dir*this.speed;

        if (this.posX >= 950) {
            this.dir = -1;
        }
        if(this.posX <= 50){
            this.dir = 1;
        }

    }

    getValue(){
        return this.value;
    }

    getPosX(){
        return this.posX;
    }

    setPosX(posX){
        this.posX = posX;
    }

    getSize(){
        return this.size;
    }

    setSize(size){
        this.size = size;
    }

    getSpeed(){
        return this.speed;
    }
    
}

class Circle extends Shape{
    constructor(posX, posY, size, value){
        super(posX, posY);
        this.size = size;
        this.speed = 2;
        this.dir = 1;
        this.value = value;
    }

    DrawCircle(){

        fill(0);
        noStroke();
        ellipse(this.posX, this.posY, this.size, this.size);
        fill(255);
        textSize(20);
        text(""+ this.value, this.posX, this.posY+5);
    }

    Movement(){ //MOVEMENT 

        this.posX += this.dir*this.speed;

        if (this.posX >= 950) {
            this.dir = -1;
        }
        if(this.posX <= 50){
            this.dir = 1;
        }
    }

    setPosX(posX){
        this.posX = posX;
    }

    setValue(value){
        this.value = value;
    }

    getSize(){
        return this.size;
    }

    setSize(size){
        this.size = size;
    }
}