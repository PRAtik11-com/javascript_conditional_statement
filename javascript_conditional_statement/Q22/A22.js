function number(num) {
   
   if(num > 0){
    console.log(`number ${num} is positive.`);
   }else if(num < 0){
    console.log(`number ${num} is negative.`);
   }else if(num == 0){
    console.log(`number ${num} is zero.`);
   }else{
    console.log("invaild number");
   }  
}
let nums = -56
const newNumber = number(nums)
console.log(newNumber);