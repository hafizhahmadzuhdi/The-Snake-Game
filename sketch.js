var s;

function setup(){
    createCanvas(800, 800);
    s = new Snake();
}

function draw(){
    background(51);
    s.update();
    s.show();
}

function Snake(){
    this.x = 0;
    this.y = 0;
    this.xspeed = 1;
    this.yspeed = 0;

    this.update = function(){
        this.x = this.x + this.xspeed;
        this.y = this.y + this.yspeed;
    }


    this.show = function(){
        //make a rectangle white
        fill(255);
        //draw a rectangle
        rect(this.x, this.y, 10, 10);
    }
}