function Grades(per) {
    let grade;
  
    if (per >= 90) {
      grade = 'A';
    } else {
      if (per >= 80) {
        grade = 'B';
      } else {
        if (per >= 70) {
          grade = 'C';
        } else {
          if (per >= 60) {
            grade = 'D';
          } else {
            grade = 'F';
          }
        }
      }
    }
   return grade;
  }
  
  const per = 85; 
  const grade = Grades(per);
  console.log("The grade is " + grade);
  