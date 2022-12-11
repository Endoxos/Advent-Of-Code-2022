function valider() {

  var input = document.getElementById("input").value;
  var lignes = input.split("\n");
  let somme = 0;
  let length = (lignes.length)/3;

  for (var i = 0; i < length; i++) {

    let ligne1 = lignes[i];
    let ligne2 = lignes[i + 1];
    let ligne3 = lignes[i + 2];


    let array1 = [];
    for (var j = 0; j < ligne1.length; j++) {
      let cut = ligne1.substring(j, j + 1);
      array1.push(cut);
    }

    let array2 = [];
    for (var k = 0; k < ligne2.length; k++) {
      let cut2 = ligne2.substring(k, k + 1);
      array2.push(cut2);
    }

    let array3 = [];
    for (var m = 0; m < ligne3.length; m++) {
      let cut3 = ligne3.substring(m, m + 1);
      array3.push(cut3);
    }

    let resultat = "";
    resultat = findCommonValues(array1, array2, array3);
    console.log(resultat);

    if (resultat[0] === "a") {
      somme += 1;
    } else if (resultat[0] === "b") {
      somme += 2;
    } else if (resultat[0] === "c") {
      somme += 3;
    } else if (resultat[0] === "d") {
      somme += 4;
    } else if (resultat[0] === "e") {
      somme += 5;
    } else if (resultat[0] === "f") {
      somme += 6;
    } else if (resultat[0] === "g") {
      somme += 7;
    } else if (resultat[0] === "h") {
      somme += 8;
    } else if (resultat[0] === "i") {
      somme += 9;
    } else if (resultat[0] === "j") {
      somme += 10;
    } else if (resultat[0] === "k") {
      somme += 11;
    } else if (resultat[0] === "l") {
      somme += 12;
    } else if (resultat[0] === "m") {
      somme += 13;
    } else if (resultat[0] === "n") {
      somme += 14;
    } else if (resultat[0] === "o") {
      somme += 15;
    } else if (resultat[0] === "p") {
      somme += 16;
    } else if (resultat[0] === "q") {
      somme += 17;
    } else if (resultat[0] === "r") {
      somme += 18;
    } else if (resultat[0] === "s") {
      somme += 19;
    } else if (resultat[0] === "t") {
      somme += 20;
    } else if (resultat[0] === "u") {
      somme += 21;
    } else if (resultat[0] === "v") {
      somme += 22;
    } else if (resultat[0] === "w") {
      somme += 23;
    } else if (resultat[0] === "x") {
      somme += 24;
    } else if (resultat[0] === "y") {
      somme += 25;
    } else if (resultat[0] === "z") {
      somme += 26;
    } else if (resultat[0] === "A") {
      somme += 27;
    } else if (resultat[0] === "B") {
      somme += 28;
    } else if (resultat[0] === "C") {
      somme += 29;
    } else if (resultat[0] === "D") {
      somme += 30;
    } else if (resultat[0] === "E") {
      somme += 31;
    } else if (resultat[0] === "F") {
      somme += 32;
    } else if (resultat[0] === "G") {
      somme += 33;
    } else if (resultat[0] === "H") {
      somme += 34;
    } else if (resultat[0] === "I") {
      somme += 35;
    } else if (resultat[0] === "J") {
      somme += 36;
    } else if (resultat[0] === "K") {
      somme += 37;
    } else if (resultat[0] === "L") {
      somme += 38;
    } else if (resultat[0] === "M") {
      somme += 39;
    } else if (resultat[0] === "N") {
      somme += 40;
    } else if (resultat[0] === "O") {
      somme += 41;
    } else if (resultat[0] === "P") {
      somme += 42;
    } else if (resultat[0] === "Q") {
      somme += 43;
    } else if (resultat[0] === "R") {
      somme += 44;
    } else if (resultat[0] === "S") {
      somme += 45;
    } else if (resultat[0] === "T") {
      somme += 46;
    } else if (resultat[0] === "U") {
      somme += 47;
    } else if (resultat[0] === "V") {
      somme += 48;
    } else if (resultat[0] === "W") {
      somme += 49;
    } else if (resultat[0] === "X") {
      somme += 50;
    } else if (resultat[0] === "Y") {
      somme += 51;
    } else if (resultat[0] === "Z") {
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

function findCommonValues(array1, array2, array3) {
  return array1.filter(function (element) {
    return array2.includes(element) && array3.includes(element);
  });
}