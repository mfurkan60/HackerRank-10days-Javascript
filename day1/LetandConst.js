function main() {
    // Write your code here. Read input using 'readLine()' and print output using 'console.log()'.
        const Pi = Math.PI;
        
        let radius = parseFloat(readLine())
    
    // Print the area of the circle:
      
      let area = Pi * radius* radius
      // or you can use Math function
      console.log(area)
      
    // Print the perimeter of the circle:
    let perimeter = (Pi * radius) * 2
    console.log(perimeter)