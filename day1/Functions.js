/*
 * Create the function factorial here
 */
function FindFactorial(n)
{
    if (n < 2)
        {
            return 1;
        }
        else if(n == 1){
            return 0;
        }
        else{
           return n * FindFactorial(n-1); 
        }
    
    
}

