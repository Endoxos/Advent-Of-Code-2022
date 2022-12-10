function valider() {

  var input = document.getElementById("input").value;
  var lignes = input.split("\n");
  let somme = 0;
  let arrayCalories = [];

  for (var i = 0; i < lignes.length; i++) {
    if (lignes[i] === "") {
      arrayCalories.push(somme);
      somme = 0;
    } else {
      number = parseInt(lignes[i]);
      somme += number;
    }
  }

  arrayCalories.sort(function(a, b){
    return b - a;
  })

  const p_replace = document.createElement('p');
  p_replace.append();
  div_droite.replaceChildren(p_replace);

  console.log(arrayCalories);

  totalCalories = arrayCalories[0] + arrayCalories[1] + arrayCalories[2];

  const p = document.createElement('p');
  p.append("The top three Elves who carry the most calories are carrying: " + totalCalories + " calories in total");
  div_droite.append(p);

}

