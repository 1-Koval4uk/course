'use strict'

if(4 == 9){
    console.log('ok!');
}else{
    console.log('error');
}


// if(num < 49){
//     console.log('error');
// }else if(num > 100){
//     console.log('More');
// }else{
//     console.log('ok');
// }


// (num == 50) ? console.log('ok') : console.log('error');

let num = 50; 

switch(num){
    case 49:
        console.log('Wrong');
        break;
    case 100:
        console.log('Wrong too');
        break;
    case 51:
        console.log('Right');
        break;
    default:
        console.log('Not now');
        break;
}