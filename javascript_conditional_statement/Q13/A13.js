function grades(math, science, phy, eng, comp) {
    let result
    let total = math + science + phy + eng + comp 
    let per = (total / 500) * 100; 

    if(per >= 85 && per <= 100){
        result = "A";
        console.log(`${result}`);
    }else if(per >=75  && per <= 84){
        result = "B";
        console.log(`${result}`);
    }else if(per >=63  && per <= 74){
        result = "C";
        console.log(`${result}`);
    }else if(per >=48  && per <= 62){
        result = "D";
        console.log(`${result}`);
    }else if(per >=34  && per <= 47){
        result = "E";
        console.log(`${result}`);
    }else{
        result="F";
        console.log(`${result}`);
    }
}

let a = 85
let b = 75
let c = 83
let d = 95
let e = 76
const myper = grades(a, b, c, d, e);
console.log(myper);