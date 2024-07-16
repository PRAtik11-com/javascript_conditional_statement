var count = 0
function prime(size){
    for(let i = 1; i <= size; i++)
        {
            if(size %i == 0)
            {
                count++;
            }
        }
        if(count==2)
        {
            console.log(`${size} is prime number.`);
        }
        else
        {
            console.log(`${size} is not prime number.`);
        }
}
let size = 3
const mynNewsize = prime(size);
console.log(mynNewsize);