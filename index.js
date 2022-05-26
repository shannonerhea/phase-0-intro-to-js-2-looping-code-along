// Code your solutions in this file
// const gifts = ["teddy bear", "drone", "doll"];

// function wrapGifts(gifts) {
//   for (let i = 0; i < gifts.length; i++) {
//     console.log(`Wrapped ${gifts[i]} and added a bow!`);
//     //debugger;
//   }

//   return gifts;
// }

// wrapGifts(gifts);
//writeCards(["Charlie", "Samip", "Ali"], "birthday");
function writeCards(arr, event) {
let newwArr = [];
for (let i = 0; i < arr.length; i++) {
    let msg = (`Thank you, ${arr[i]}, for the wonderful ${event} gift!`)
newwArr.push(msg);
};
return newwArr;
}

function countDown(int) {
    let i = 11;
    while (i > 0) {
        i--
        console.log(i);
    };
    return int;
};
