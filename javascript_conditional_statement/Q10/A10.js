function calculate(num1, num2, choice) {
    let result;
  
    if (choice === 'add') {
      result = num1 + num2;
      console.log(`${num1} + ${num2} = ${result}`);
    } else if (choice === 'sub') {
      result = num1 - num2;
      console.log(`${num1} - ${num2} = ${result}`);
    } else if (choice === 'multi') {
      result = num1 * num2;
      console.log(`${num1} * ${num2} = ${result}`);
    } else if (choice === 'div') {
      if (num2 !== 0) {
        result = num1 / num2;
        console.log(`${num1} / ${num2} = ${result}`);
      } else {
        console.log("Div by zero is not allowed.");
      }
    } else {
      console.log("Invalid choice.");
    }
  
    return result;
  }
  
  const num1 = 10; 
  const num2 = 5; 
  const choice = 'multi'; 
  
  calculate(num1, num2, choice);
  