function changeTemp(value, ch) {
    let change;
  
    if (ch === 'C') {
      // C to F
      change = (value * 9/5) + 32;
      console.log(value + "'C is equal to " + change + "'F");
    } else if (ch === 'F') {
      // F to C
      change = (value - 32) * 5/9;
      console.log(value + "'F is equal to " + change + "'C");
    } else {
      console.log("Invalid ch input.");
    }
  }
  
  // Example usage:
  const temp = 98; 
  const ch = 'F'; 
  changeTemp(temp, ch);
  