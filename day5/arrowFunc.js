function modifyArray(nums) {
    
    try{
        let array_s = nums.map(function(nums){
        if(nums % 2 == 0){
            return nums*2 // return each event elements mult. by 2
        }
         
        else{
            return nums*3 // return each odd elements mult. by 3
        }
        
    });
    return array_s; // Retun the new array 
    }
    catch(e){
        console.log(e.message);
    }
    
}