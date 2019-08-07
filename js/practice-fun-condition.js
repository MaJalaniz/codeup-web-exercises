

for (var i=1; i <= 20; i++)
{
   if (i % 15 == 0)
      console.log("FizzBuzz");
   else if (i % 3 == 0)
      console.log("Fizz");
   else if (i % 5 == 0)
      console.log("Buzz");
   else
      console.log(i);
}

let socks = [1,1,2,2,3,3,4,4,5];
console.log(socks[3]);

for (let i = 0; i < socks.length; i++){
   if(socks[i] === i){
      console.log("this is number: " + socks[i]);

   }
}