// practis with promise 

// practics with clear callback exectly worked;
let paymentStatus = true;
let marks = 80;
function courseEnroll(callback){
    console.log('course enroll is processing');
    
    setTimeout(() => { // setTimeout is async function 
        if(paymentStatus){
             callback(courseProcess);
        }else{
            console.log('payment Failded');
        }
    },2000);
}

function courseProcess(callback){
     console.log('Course Is Runing');
     setTimeout(() => {
         if(marks >= 80){
             callback(getCeritificate);
         }else{
            console.log('sorry you are fail');
         }
     },3000);
}

function getCeritificate(){
    console.log('Congratulations You Are Passed. Please Wait Certificate Is Creating');
    setTimeout(() => {
        console.log('Please Download Your Certificate');
    },4000)

}