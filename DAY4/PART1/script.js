function valider() {

  var input = document.getElementById("input").value;
  var lignes = input.split("\n");
  let somme = 0;

  for (var i = 0; i < lignes.length; i++) {

    let chiffres = lignes[i].split(",");
    let chiffres1 = chiffres[0].split("-");
    let chiffres2 = chiffres[1].split("-");
    let start1 = chiffres1[0]*1;
    let start2 = chiffres2[0]*1;
    let end1 = chiffres1[1]*1;
    let end2 = chiffres2[1]*1;

    console.log(start1);
    console.log(start2);
    console.log(end1);
    console.log(end2);

    if ((start1 >= start2 && end1 <= end2) || (start2 >= start1 && end2 <= end1)) {
      somme += 1;
    } else {
    }

    const p_replace = document.createElement('p');
    p_replace.append();
    div_droite.replaceChildren(p_replace);

    const p = document.createElement('p');
    p.append("The number of one range of those item types is:" + somme);
    div_droite.append(p);

  }
}
