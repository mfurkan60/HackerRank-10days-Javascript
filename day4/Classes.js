class Polygon {
    constructor(heights) 
    {
        let polygon_perimeter = 0;
        for (let index in heights)
            {
                polygon_perimeter += heights[index];
            }
        
        this.my_perimeter = polygon_perimeter;
    }
    
     perimeter() 
    {
        return this.my_perimeter;
    }
    
}