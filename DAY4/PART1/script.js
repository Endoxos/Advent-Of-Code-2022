function valider() {

  var input = document.getElementById("input").value;
  var lignes = input.split("\n");
  let somme = 0;

  for (var i = 0; i < lignes.length; i++) {

    let chiffres = lignes[i].split(",");
    let chiffres1 = chiffres[0].split("-");
    let chiffres2 = chiffres[1].split("-");
    console.log(lignes[i]);


    if (chiffres1[0] >= chiffres2[0]) {
      
    } else {

    }

    const p_replace = document.createElement('p');
    p_replace.append();
    div_droite.replaceChildren(p_replace);

    const p = document.createElement('p');
    p.append("The sum of the priorities of those item types is:" + somme);
    div_droite.append(p);

  }
}
