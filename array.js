//Interview preparation very tricky question ,
//  print array without its original properties.
//  Here interviewer trying to ask the interviewee whether he knows prototype method  



Array.prototype.extraNoor = 'noor';
//we have inserted an 'extraNoor' property to the Array as 'noor'


const myArray = [1,2,3,4];
//declared and array
for(let i in myArray){
    console.log(i)
}
//on console log we get output like this
// 0
// 1
// 2
// 3
// extraNoor  ----> NOTE :- this is the extra prperty we added to array using proptotype and  it is also will looping, and we need not print that.
// to do that we need to follow below steps  



for(let i in myArray){
    if(myArray.hasOwnProperty(i)){
        // the above 'hasOwnProperty()' will give remove the properties we give through 'prototype'. it will give only original array values.
        console.log(i)
    }
}
//output
// 0
// 1
// 2
// 3
