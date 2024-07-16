function checkResult(sub1, sub2, sub3, sub4, sub5) {
    var subject1 = parseFloat(sub1);
    var subject2 = parseFloat(sub2);
    var subject3 = parseFloat(sub3);
    var subject4 = parseFloat(sub4);
    var subject5 = parseFloat(sub5);
    var passMark = 33;
    var result;

    if (sub1 >= passMark && sub2 >= passMark && sub3 >= passMark && sub4 >= passMark && sub5 >= passMark) {
        result = "Passed";
        console.log(`You are ${result}`);
    } else {
        result = "Failed";
        console.log(`You are ${result}`);
    }    
}
var sub1 = 60
var sub2 = 55
var sub3 = 34
var sub4 = 30
var sub5 = 49

const newresult = checkResult(sub1, sub2, sub3, sub4, sub5);
console.log(newresult);

