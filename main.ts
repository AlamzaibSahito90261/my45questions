// array as a parameter

function mySandwiches ( ...items: string []){
    return `I want sandwich of ${items}`;
};
let collection1 = mySandwiches ("Ham", " Cheeze", " Lettuce");
 // can add as many you wish
 let collection2 = mySandwiches (" Turkey"," Swiss");
 let collection3 = mySandwiches (); // without arrgument
 
 console.log(collection1);
 console.log(collection2);
 console.log(collection3);  
 