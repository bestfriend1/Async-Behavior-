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

// courseEnroll(courseProcess);
// courseProcess(getCeritificate); 
// getCeritificate();
// // or
// courseEnroll(courseProcess(getCeritificate));  // this called system exectly not worked

courseEnroll(() => {
   courseProcess(getCeritificate); // this called system exectly  worked

})// coto somossar khetre ata apply kora jai.jodi kaj ta matro 4-5ta function ar hoi. bodo kaj a promise use kora ucit.



