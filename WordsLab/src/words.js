/*
	created by Taiwo Amao on the 2/14/2017
	A function that takes in a string and counts the occurence
	of each word in a the string
*/
function words(str){
  var obj={};   // return object

   str.split(/\s+|\t+\n/).forEach(function(el){
    obj[el]=  (+obj[el] || 0) +1;  // counting each string 
  });
  return obj;
}
