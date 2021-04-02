/*
 *  Write code that adds an 'area' method to the Rectangle class' prototype
 * h = height
 * w= weight
 */
Rectangle.prototype.area = function(){
    return(this.w * this.h);
}

class Square extends Rectangle{
    constructor(oneSide){ // oneSide is means that side of square
        super(oneSide)
        this.w = oneSide;
        this.h = oneSide;
    }
}

/*
 * Create a Square class that inherits from Rectangle and implement its class constructor
 */