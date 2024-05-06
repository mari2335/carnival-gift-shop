const input = require('sync-input');
let tickets = 0;
let continueShop = true;

const gifts = [
    [1, "Teddy Bear", 10], [2, "Big Red Ball", 5], [3, "Huge Bear", 50], [4, "Candy", 8],
    [5, "Stuffed Tiger", 15], [6, "Stuffed Dragon", 30], [7, "Skateboard", 100],[8, "Toy Car", 25],
    [9, "Basketball", 20],[10, "Scary Mask", 75]
]

const generateGiftList = () => {
    let result = "Here's the list of gifts:\n\n";
    for (let i = 0; i < gifts.length; i++) {
        result += `${gifts[i][0]}- ${gifts[i][1]}, Cost: ${gifts[i][2]} tickets`
        if (i !== gifts.length) {
          result += "\n"
        }
    }
    if (gifts.length === 0) {
      result += "\nWow! There are no gifts to buy."
    }
    return result
}

const buyGift = (giftId) => {
    if (giftId < 1 || giftId > 10) { 
      console.log("There is no gift with that number!"); 
      return; 
    }

    let giftIndex = -1;
    for (let i = 0; i < gifts.length; i++) {
        if (gifts[i][0] === giftId) {
            giftIndex = i
        }
    }

    if (tickets - gifts[giftIndex][2] < 0) { 
      console.log("You don't have enough tickets to buy this gift."); 
      return; 
    }

    tickets -= gifts[giftIndex][2];
    console.log("Here you go, one " + gifts[giftIndex][1] + "!")
    console.log("Total tickets: " + tickets);
    gifts.splice(giftIndex, 1);
}

console.log(`WELCOME TO THE CARNIVAL GIFT SHOP!\nHello friend! Thank you for visiting the carnival!`)
console.log(generateGiftList());

while (continueShop) {
    console.log("\nWhat do you want to do?\n1-Buy a gift 2-Add tickets 3-Check tickets 4-Show gifts 5-Exit the shop")

    let action = input();
    switch (action) {
        case '1':
            if (gifts.length === 0) {
                console.log("Wow! There are no gifts to buy.")
            } else {
                let giftNumber = Number(input('Enter the number of the gift you want to get: '))
                Number.isNaN(giftNumber) 
                  ? console.log("Please enter a valid number!") 
                  : buyGift(giftNumber)
            }
            break;
        case '2':
            let amount = Number(input("Enter the ticket amount: "));
            if (Number.isNaN(amount) || amount < 0 || amount > 1000) {
                console.log("Please enter a valid number between 0 and 1000.")
            } else {
                tickets += amount;
                console.log("Total tickets: " + tickets);
            }
            break;
        case '3':
            console.log("Total tickets: " + tickets); 
            break;
        case '4':
            console.log(generateGiftList()); 
            break;
        case '5':
            continueShop = false; 
            break;
        default:
            console.log("Please enter a valid number!");
            break;
    }
}
console.log("Have a nice day!");
