function check(x, y, z) 
{ 
     
    if (x == y && y == z) {
        console.log("Equilateral Triangle"); 
    }
       
 
    else if (x == y || y == z || z == x) 
        console.log("Isosceles Triangle"); 
 
    else
        console.log("Scalene Triangle"); 
} 

let a = 10
let b = 15 
let c = 55

const result = check(a, b, c)
console.log(result);