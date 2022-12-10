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
  var max = Math.max.apply(null, arrayCalories);

  const p_replace = document.createElement('p');
  p_replace.append();
  div_droite.replaceChildren(p_replace);

  const p = document.createElement('p');
  p.append("The Elf who carry the most calories is carrying: " + max + " calories");
  div_droite.append(p);

}

