function Groupofage(age) {
    let Ages;
  
    if (age >= 0 && age <= 13) {
      Ages = 'Child';
    } else if (age >= 14 && age <= 18) {
      Ages = 'Teenager';
    } else if (age >= 19 && age <= 63) {
      Ages = 'Adult';
    } else if (age >= 64) {
      Ages = 'Senior citizen';
    } else {
      Ages = 'Invalid age';
    }
  
    return Ages;
  }
  
  const age = 18; 
  const Ages = Groupofage(age);
  console.log("The age group is " + Ages);
  