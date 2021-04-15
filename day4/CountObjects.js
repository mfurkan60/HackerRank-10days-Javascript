function getCount(objects) {
    try{
        var count = 0;
    for (var index in objects)
        {
            if (objects[index].x == objects[index].y)
                {
                    count++;
                }
        }
    return count;
    }
    catch(e){
        console.log(e.message);
    }
}