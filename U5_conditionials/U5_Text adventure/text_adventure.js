alert("You just got gifted 1000 dollars for you birthday and you are not sure how you want to spend it.  Should you spend it or save it? ")

let save_or_spend = prompt("Do you (1) take the money and put it into a savings account, or do you (2) Spend the $1000 on a new phone Type 1 for Save and 2 for spend.")

if(save_or_spend == 1) {
    let savings_or_invest = prompt(" Since you chose to save the money you have 2 options you can (1) put the money into a savings account and make .5% intrest or do you (2) invest the money into the stock market/ crypto?")
  
  if(savings_or_invest==1){
      alert("You put the money into a savings account and made $200 from it not much but at least you didn't lose it.");
  } else {
      let hit_big_or_lose = prompt(" You can put the $1000 into (1) bitcoin or (2) OneCoin");
 if(hit_big_or_lose==1){
 alert("You made a $1000 investment in bitcoin at a very low price now your a millionare congrats!!!!");

  } else {
    alert("Oooo you invested in OneCoin that was a mistake it dropped to zero and now you lost all of your money.");}
  }
} else{
    alert("You decided to spend the $1000 on a super cool new phone but now your out of money.")
}
