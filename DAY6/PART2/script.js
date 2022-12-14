let ok = "false";

function valider() {

  var input = document.getElementById("input").value;
  let answer = "";
  let count = -1;
  
  while (ok == "false") {

    let values = [];
    count += 1

    for (c = 0; c < 14; c++) {
      let letter = input[count + c]
      values.push(letter);
    }

    console.log(values);

    console.log(areAllElementsUniqueAndPresentOnce(values)); 

    ok = "true";
  }

  const p_replace = document.createElement('p');
  p_replace.append();
  div_droite.replaceChildren(p_replace);

  const p = document.createElement('p');
  p.append("All combine together, the message is:" + answer);
  div_droite.append(p);

}

function areAllElementsUniqueAndPresentOnce(arr) {
  return arr.every(function (element) {
    var matchingElements = arr.filter(function (arrElement) {
      return element === arrElement;
    });
    return matchingElements.length === 1;
  });
}