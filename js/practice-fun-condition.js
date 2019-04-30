    function sayHello(name){
        return 'Hello from '+ name +' to the future!';
    }
sayHello('codeup');
var result = sayHello("codeup");
console.log(result);

var helloMessage = sayHello("Matthew");
console.log(helloMessage);

var myName = "Matthew";
sayHello(myName);
console.log(myName);

    var random = Math.floor((Math.random() * 3) + 1);

function isTwo(x) {
    return x == 2 ;
}

console.log(isTwo(random));

function calculateTip(x, y){
    return x * y;
}
calculateTip(.2, 20);
var totalNum = calculateTip(.2,20);
console.log(totalNum);
