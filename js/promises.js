/*
const ranAround = false;
const wait = new Promise((resolve, reject) => {
    if (ranAround === true) {
        resolve('You get resolved');
    } else {
        reject('You get rejected!');
    }
    //wait().then(() => console.log('You will see this after 2 seconds')).catch(() => console.log('You will see this after 4 seconds'));
});

const waited = wait;
console.log(waited);
*/


//wait(4000).then(() => console.log('You will see this after 2 seconds')).catch(() => console.log('You will see this after 4 seconds'));


//const wait = () => {
  //  return
//};

/*
const ranAround = false;
const wait() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (ranAround === true) {
                resolve('Here is your data:');
            } else {
                reject('Network Connection Error!');
            }
        }, 4000);
    });
}
const request = wait();
console.log(request); // pending promise
request.then(data => console.log('Promise resolved! ', data));
// if resolved, will log
request.catch(error => console.log('Promise rejected!', error));
*/

//How to write a function and return a promise

const wait = (number) =>{
  return new Promise((res) => {
      setTimeout(function(){
          res();
      }, number);
    });
};
wait(4000).then(() => console.log('You will see this after 2 seconds'));
/*
fetch('url here', {
    Method: Post,
    headers: {
        "content-type",
    },
    body:JSON.stringify{

}
});
*/
//variable.json -> turns into json material
//if any of the promises in promise all fail, they all fail.
//most recent commit the user made on the master branch
