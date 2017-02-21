export default function makeChange({price, amountGiven}) {
  if(amountGiven < price){
    console.log('This is insuffecient currency to purchase that item!')
  }

  let change = {quarters: 0, dimes: 0, nickels: 0, pennies: 0}
  let changeDue = amountGiven - price
  if(changeDue === 0){
    return change
  }
  while(changeDue >= 25){
    change.quarters += 1
    changeDue -= 25
  }

  while(changeDue >= 10){
    change.dimes += 1
    changeDue -= 10
  }

  while(changeDue >= 5){
    change.nickels += 1
    changeDue -= 5
  }

  while(changeDue > 0){
    change.pennies += 1
    changeDue -= 1
  }
  return change
}
