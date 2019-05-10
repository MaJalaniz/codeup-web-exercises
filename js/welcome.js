var listItems = document.getElementById('plan');
listItems.innerHTML="Our Process";

var listItem= function(){
    document.getElementById('plan').innerHTML="WE HAVE NO PROCESSES AVAILABLE";
};
document.getElementById('chair').addEventListener('click',listItem,false);



var visions = document.getElementById('sight');
visions.innerHTML="2020 Vision";

var vision = function(){
  document.getElementById('sight').style.color="red";
};
document.getElementById('walls').addEventListener('click', vision, false);



    var count = 5;
    var detonationTimer = 0;
    var interval = 2500;

var intervalId = setInterval(function () {
    if (count <= detonationTimer) {
        clearInterval(intervalId);
        //alert("EXTERMINATE!!");
        document.body.innerHTML = '';
    } else if (count > detonationTimer) {
        count--;
        document.getElementById('timer').innerHTML = count;
        console.log(count + " second(s) left!!");
    }

}, interval);