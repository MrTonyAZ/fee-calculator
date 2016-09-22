var digitlist = ["one", "two", "three", "four", "five"];



function chop(digit) {
  return digit.splice(0,1);
}



console.log(chop(digitlist));
