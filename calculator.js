//add
function add(num1, num2){
  //the goal of the function is to a string that says
  //num1 + num2 = result

  //make sure your numbers are numbers, no string
  var addition = parseFloat(num1) + parseFloat(num2),
      addString = num1 + "+" + num2 + "=" + addition;

  return addString;

  onclick=function(){
    document.getElementById('result').innerHTML= addString;
  }
}

// substract
function subtract(num1, num2){
  var subtraction = parseFloat(num1) - parseFloat(num2),
    subString = num1 + "-" + num2 + "=" + subtraction;

    return subString;
    onclick= function(){
      document.getElementById('result').innerHTML=subString;
    }
}

// multiply
function multiply(num1, num2){
  var multiplication = parseFloat(num1) * parseFloat(num2),
      multiplyString = num1 + "*" + num2 + "=" + multiplication;

      return multiplyString;


      onclick=function(){
        document.getElementById('result').innerHTML= multiplyString;
      }
}
// divide
function divide(num1, num2){
  var  division = parseFloat(num1) / parseFloat(num2),
        divideString = num1 + "/" + num2 + "="+ division;

        return divideString;
        onclick=function(){
          document.getElementById('result').innerHTML=divideString;
        }
}

function reset (){
    document.getElementById('result').innerHTML = "";
}

// this function will grab the inputs, populate the result div
// and run an operation



function populatehtml(operation){
    var input1 = document.getElementById("first").value;
    var input2 = document.getElementById("second").value;
    var output = operation(input1, input2);
        document.getElementById("result").innerText += output; 
 
        if (input1== "" || input2==""){
          document.getElementById('result').innerHTML = "You have to put a number"
        }   else { "result"}}


document.getElementById('add!').onclick = function(){populatehtml(add)};
document.getElementById('subtract!').onclick = function(){populatehtml(subtract)};
document.getElementById('multiply!').onclick = function(){populatehtml(multiply)};
document.getElementById('divide!').onclick = function(){populatehtml(divide)};
document.getElementById('reset').onclick= reset; 