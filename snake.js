function Snake(){
    this.x = 0;
    this.y = 0;
    this.xspeed = 1;
    this.yspeed = 0;

    this.eat = function(pos){
        var d = dist(this.x, this.y, pos.x, pos.y);
        if(d < 1){
            //yes it is the same location
            return true;
        } else {
            //No, it is not the location (it will not be eaten by the snake)
            return false;
        }
    }

    this.dir = function(x, y){
        this.xspeed = x;
        this.yspeed = y;
    }

    this.update = function(){
        this.x = this.x + this.xspeed * scl;
        this.y = this.y + this.yspeed * scl;

        this.x = constrain(this.x, 0, width-scl);
        this.y = constrain(this.y, 0, height-scl);
    }


    this.show = function(){
        //make a rectangle white
        fill(255);
        //draw a rectangle (10 by 10, with the speed movement of x and y constant)
        rect(this.x, this.y, scl, scl);
    }

    
}
