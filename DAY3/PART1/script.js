function valider() {

  var input = document.getElementById("input").value;
  var lignes = input.split("\n");
  console.log(lignes);
  let somme = 0;

  for (var i = 0; i < lignes.length; i++) {

    length = lignes[i].length;
    half = lignes[i].substring(0, length / 2);
    half2 = lignes[i].substring(length / 2, length);

    let array1 = [];
    for (var j = 0; j < half.length; j++) {
      let cut = half.substring(j, j + 1);
      array1.push(cut);
    }

    let array2 = [];
    for (var k = 0; k < half2.length; k++) {
      let cut2 = half2.substring(k, k + 1);
      array2.push(cut2);
    }
    const commonElements = array1.filter(element => array2.includes(element));
    console.log(commonElements);

    if (commonElements[0] === "a") {
      somme += 1;
    } else if (commonElements[0] === "b") {
      somme += 2;
    } else if (commonElements[0] === "c") {
      somme += 3;
    } else if (commonElements[0] === "d") {
      somme += 4;
    } else if (commonElements[0] === "e") {
      somme += 5;
    } else if (commonElements[0] === "f") {
      somme += 6;
    } else if (commonElements[0] === "g") {
      somme += 7;
    } else if (commonElements[0] === "h") {
      somme += 8;
    } else if (commonElements[0] === "i") {
      somme += 9;
    } else if (commonElements[0] === "j") {
      somme += 10;
    } else if (commonElements[0] === "k") {
      somme += 11;
    } else if (commonElements[0] === "l") {
      somme += 12;
    } else if (commonElements[0] === "m") {
      somme += 13;
    } else if (commonElements[0] === "n") {
      somme += 14;
    } else if (commonElements[0] === "o") {
      somme += 15;
    } else if (commonElements[0] === "p") {
      somme += 16;
    } else if (commonElements[0] === "q") {
      somme += 17;
    } else if (commonElements[0] === "r") {
      somme += 18;
    } else if (commonElements[0] === "s") {
      somme += 19;
    } else if (commonElements[0] === "t") {
      somme += 20;
    } else if (commonElements[0] === "u") {
      somme += 21;
    } else if (commonElements[0] === "v") {
      somme += 22;
    } else if (commonElements[0] === "w") {
      somme += 23;
    } else if (commonElements[0] === "x") {
      somme += 24;
    } else if (commonElements[0] === "y") {
      somme += 25;
    } else if (commonElements[0] === "z") {
      somme += 26;
    } else if (commonElements[0] === "A") {
      somme += 27;
    } else if (commonElements[0] === "B") {
      somme += 28;
    } else if (commonElements[0] === "C") {
      somme += 29;
    } else if (commonElements[0] === "D") {
      somme += 30;
    } else if (commonElements[0] === "E") {
      somme += 31;
    } else if (commonElements[0] === "F") {
      somme += 32;
    } else if (commonElements[0] === "G") {
      somme += 33;
    } else if (commonElements[0] === "H") {
      somme += 34;
    } else if (commonElements[0] === "I") {
      somme += 35;
    } else if (commonElements[0] === "J") {
      somme += 36;
    } else if (commonElements[0] === "K") {
      somme += 37;
    } else if (commonElements[0] === "L") {
      somme += 38;
    } else if (commonElements[0] === "M") {
      somme += 39;
    } else if (commonElements[0] === "N") {
      somme += 40;
    } else if (commonElements[0] === "O") {
      somme += 41;
    } else if (commonElements[0] === "P") {
      somme += 42;
    } else if (commonElements[0] === "Q") {
      somme += 43;
    } else if (commonElements[0] === "R") {
      somme += 44;
    } else if (commonElements[0] === "S") {
      somme += 45;
    } else if (commonElements[0] === "T") {
      somme += 46;
    } else if (commonElements[0] === "U") {
      somme += 47;
    } else if (commonElements[0] === "V") {
      somme += 48;
    } else if (commonElements[0] === "W") {
      somme += 49;
    } else if (commonElements[0] === "X") {
      somme += 50;
    } else if (commonElements[0] === "Y") {
      somme += 51;
    } else if (commonElements[0] === "Z") {
      somme += 52;
    }
    else {
      console.log("ERROR");
    }
  }


  const p_replace = document.createElement('p');
  p_replace.append();
  div_droite.replaceChildren(p_replace);

  const p = document.createElement('p');
  p.append("The sum of the priorities of those item types is:" + somme);
  div_droite.append(p);

}

