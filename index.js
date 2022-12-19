// Code your solutions in this file

// for (let age = 30; age <40; age++){

//     console.log(`I'm ${age} years old. Happy Birthday to me!`)
//     debugger;
// }

// const gifts = ["legos", "xbox", "drone", "rc car"];

// function wrapGifts(gifts){

//     for (let i = 0; i < gifts.length; i++){
//         console.log(`Wrapped ${gifts[i]} and added a bow!`);
//         debugger;
//     }
//     return gifts
//     // i don't know why they return the array back
//     // something to do with the lab
// }

// wrapGifts(gifts);


// function writeCards(array, eventName)
//      for i = 0; i < array.length; i++
//          message = `Wrapping array[i] up `          
//          newArray.push(message)
//      return newArray


function writeCards(array, eventName){
    const newArray = [];
    
    for (let i = 0; i < array.length; i++){
        const message = `Thank you, ${array[i]}, for the wonderful ${eventName} gift!`;
        newArray.push(message);
    }
    return newArray;
}


function countDown(int){
    while (int >= 0){
        console.log(int)
        int--;
    }

}


// const message = writeCards()

// const test = writeCards(["Charlie", "Samip", "Ali"], "birthday");

// console.log(test)
