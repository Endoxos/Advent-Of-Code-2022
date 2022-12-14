function valider() {

  var input = document.getElementById("input").value;
  let answer = "";
  let count = -1;
  let ok = "false";

  while (ok == "false") {
    
    count +=1

    let letter1 = input[count];
    let letter2 = input[count + 1];
    let letter3 = input[count + 2];
    let letter4 = input[count + 3];

    if (letter1 !== letter2 && letter1 !== letter3 && letter1 !== letter4 && letter2 !== letter3 && letter2 !== letter4 && letter3 !== letter4) {
      ok = "true";
      answer += letter1;
      answer += letter2;
      answer += letter3;
      answer += letter4;
      answer += " (count= " + [count + 4] + ")";
    } else {
    }

  }

  const p_replace = document.createElement('p');
  p_replace.append();
  div_droite.replaceChildren(p_replace);

  const p = document.createElement('p');
  p.append("All combine together, the message is:" + answer);
  div_droite.append(p);

}



// let array1 = ['W','R','F'];
// let array2 = ['T','H','M','C','D','V','W','P'];
// let array3 = ['P','M','Z','N','L'];
// let array4 = ['J','C','H','R'];
// let array5 = ['C','P','G','H','Q','T','B'];
// let array6 = ['G','C','W','L','F','Z'];
// let array7 = ['W','V','L','Q','Z','J','G','C'];
// let array8 = ['P','N','R','F','W','T','V','C'];
// let array9 = ['J','W','H','G','R','S','V'];