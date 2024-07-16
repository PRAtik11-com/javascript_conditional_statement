function Vote(age, isCitizen) {
    if (age < 18) {
        return false;
      }
      
      if (!isCitizen) {
        return false;
      }
      return true;
  }
  let age = 16;
  let isCitizen = true;
  
  if (Vote(age, isCitizen)) {
    console.log("You are eligible to vote!");
  } else {
    console.log("You are not eligible to vote.");
  }