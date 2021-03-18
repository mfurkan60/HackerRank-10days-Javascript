function getSecondLargest(nums) {
    // Complete the function
    
    let Lilength = nums.length;
   let SecoundNumber = Array.from(new Set(nums)).sort((a, b) => { return a-b })[Lilength-1]
   return SecoundNumber;
      
    
    
}