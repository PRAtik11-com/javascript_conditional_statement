function week(daynum) {
    let day;
  
    if (daynum === 1) {
      day = 'Monday';
    } else if (daynum === 2) {
      day = 'Tuesday';
    } else if (daynum === 3) {
      day = 'Wednesday';
    } else if (daynum === 4) {
      day = 'Thursday';
    } else if (daynum === 5) {
      day = 'Friday';
    } else if (daynum === 6) {
      day = 'Saturday';
    } else if (daynum === 7) {
      day = 'Sunday';
    } else {
      day = 'Invalid';
    }
  
    return day;
  }
  
  const daynum = 4; 
  const days = week(daynum);
  console.log("The day of the week is " + days);
  