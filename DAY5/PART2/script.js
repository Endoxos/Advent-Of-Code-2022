let array1 = ['W','R','F'];
let array2 = ['T','H','M','C','D','V','W','P'];
let array3 = ['P','M','Z','N','L'];
let array4 = ['J','C','H','R'];
let array5 = ['C','P','G','H','Q','T','B'];
let array6 = ['G','C','W','L','F','Z'];
let array7 = ['W','V','L','Q','Z','J','G','C'];
let array8 = ['P','N','R','F','W','T','V','C'];
let array9 = ['J','W','H','G','R','S','V'];


function valider() {

  var input = document.getElementById("input").value;
  var lignes = input.split("\n");
  let somme = "";

  for (var i = 0; i < lignes.length; i++) {

    var word1 = "move ";
    var index1 = lignes[i].indexOf(word1);

    if (index1 !== -1) {
      var move_num = lignes[i].substring(index1 + word1.length, index1 + word1.length + 2) * 1;
      console.log(move_num);
    }


    var word2 = "from ";
    var index2 = lignes[i].indexOf(word2);

    if (index2 !== -1) {
      var from_num = lignes[i].substring(index2 + word2.length, index2 + word2.length + 1) * 1;
      console.log(from_num);
    }


    var word3 = "to ";
    var index3 = lignes[i].indexOf(word3);

    if (index3 !== -1) {
      var to_num = lignes[i].substring(index3 + word3.length, index3 + word3.length + 1) * 1;
      console.log(to_num);
    }

    for (var j = 0; j < move_num; j++) {
      let letter = "";
      if (from_num === 1) {
        letter = array1.pop();
        to(to_num, letter);
      } else if (from_num === 2) {
        letter = array2.pop();
        to(to_num, letter);
      } else if (from_num === 3) {
        letter = array3.pop();
        to(to_num, letter);
      } else if (from_num === 4) {
        letter = array4.pop();
        to(to_num, letter);
      } else if (from_num === 5) {
        letter = array5.pop();
        to(to_num, letter);
      } else if (from_num === 6) {
        letter = array6.pop();
        to(to_num, letter);
      } else if (from_num === 7) {
        letter = array7.pop();
        to(to_num, letter);
      } else if (from_num === 8) {
        letter = array8.pop();
        to(to_num, letter);
      } else if (from_num === 9) {
        letter = array9.pop();
        to(to_num, letter);
      } else {
        console.log("ERROR");
      }
    }
  }

  somme += array1[array1.length - 1];
  somme += array2[array2.length - 1];
  somme += array3[array3.length - 1];
  somme += array4[array4.length - 1];
  somme += array5[array5.length - 1];
  somme += array6[array6.length - 1];
  somme += array7[array7.length - 1];
  somme += array8[array8.length - 1];
  somme += array9[array9.length - 1];

  const p_replace = document.createElement('p');
  p_replace.append();
  div_droite.replaceChildren(p_replace);

  const p = document.createElement('p');
  p.append("All combine together, the message is:" + somme);
  div_droite.append(p);


}


function to(to_num, letter) {
  if (to_num === 1) {
    array1.push(letter);
  } else if (to_num === 2) {
    array2.push(letter);
  } else if (to_num === 3) {
    array3.push(letter);
  } else if (to_num === 4) {
    array4.push(letter);
  } else if (to_num === 5) {
    array5.push(letter);
  } else if (to_num === 6) {
    array6.push(letter);
  } else if (to_num === 7) {
    array7.push(letter);
  } else if (to_num === 8) {
    array8.push(letter);
  } else if (to_num === 9) {
    array9.push(letter);
  } else {
    console.log("ERROR");
  }
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