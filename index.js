function scuberGreetingForFeet(someNumber){
  if (someNumber <= 400) {
    return 'This one is on me!';
    console.log('firstCondition')
  }
  else if (2000 <= someNumber && 2500 >= someNumber) {
    return 'I will gladly take your thirty bucks.';
  }
  else if (someNumber > 2500); {
    return 'No can do.';
  }

}
scuberGreetingForFeet(199); 


function ternaryCheckCity(cityMessage){
  const allowedCity = 'NYC';
  const myResult = (allowedCity == cityMessage) ? 'Ok, sounds good.' : 'No go.';

 return myResult;
 
}


function switchOnCharmFromTip(someResponse){
if (someResponse === 'generous') {
  return 'Thank you so much.'
}
 else if (someResponse === 'not as generous'){
   return 'Thank you.'
 }
 else {
   return 'Bye.'
 }

}
