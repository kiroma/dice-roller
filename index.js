function parser(a){ //Splits the input into arrays of 2 variables
  var b = a.split(" "); //Creates an array of inputs.
  var c = new Array;
  for(i=0; b[i]; i++){
    c[i] = b[i].split("d") //Creates arrays of variables inside the arrays of inputs.
  }
  return c; //Returns all variables.
}

function mathparser(a){ //Takes the parser input to generate array of math operations
  
}

function roll(array){ //RNG
  var a = array[0];
  var b = array[1];
  var c = new Array;
  for(i=0; i<a; i++){
    c[i] = Math.floor(Math.random() * b + 1) 
  }
  return c;
}

