function valider() {

  var input = document.getElementById("input").value;
  var lignes = input.split("\n");
  let somme = 0;

  for (var i = 0; i < lignes.length; i++) {
    if (lignes[i] === "A X") {
      somme += 3;
    } else if (lignes[i] === "A Y"){
      somme += 4;
    } else if (lignes[i] === "A Z"){
      somme += 8;
    } else if (lignes[i] === "B X"){
      somme += 1;
    } else if (lignes[i] === "B Y"){
      somme += 5;
    } else if (lignes[i] === "B Z"){
      somme += 9;
    } else if (lignes[i] === "C X"){
      somme += 2;
    } else if (lignes[i] === "C Y"){
      somme += 6;
    } else if (lignes[i] === "C Z"){
      somme += 7;
    }
    else {
      console.log("ERROR");
    }
  }
  
  const p_replace = document.createElement('p');
  p_replace.append();
  div_droite.replaceChildren(p_replace);

  const p = document.createElement('p');
  p.append("According to the strategy guide, the total score would be: " + somme);
  div_droite.append(p);

}


/*
A X 4 DRAW
A Y 8 WIN
A Z 3 LOSE

B X 1 LOSE
B Y 5 DRAW
B Z 9 WIN

C X 7 WIN
C Y 2 LOSE
C Z 6 DRAW

A for Rock, B for Paper, and C for Scissors
X for Rock, Y for Paper, and Z for Scissors
1 for Rock, 2 for Paper, and 3 for Scissors
0 if you lost, 3 if the round was a draw, and 6 if you won
*/
