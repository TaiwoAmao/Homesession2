/**
 *Created by Taiwo Amao , email: amaotaiwo08@gmail.com on 2/13/2017
 * A function that takes a string as an argument and returns true if its
 * a palindrome else returns the reversed string.**/

function reverseString(str){
  if(typeof str !== "string"){  // check if argument is of any other data type apart from string
    console.log("Please provide a valid text.");
  }else if(str == ""){
    return null;
  }else{
    var newString = '';
    for(var i = str.length - 1; i >= 0; i--) {
      newString += str[i];
    }
    if(str == newString){  // check if newstring is the same as the original string
      return true;
    }else {
      return newString;
    }
  }
}

//console.log(reverseString("misc"));
//console.log(reverseString("misc"));