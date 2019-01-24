function crypto (text) {
  var lowerText = text.toLowerCase();
  var textArr = lowerText.split(" ").join("").split("");
  var arrRow = Math.ceil(Math.sqrt(textArr.length));
  var arrCol = Math.ceil(textArr.length / arrRow);
  var extras = arrRow * arrCol - textArr.length;
  var strOut = [];

  for (var j = 0; j < arrRow-1; j++) {
    for (var i = j; i<textArr.length; i+=arrCol) {
      strOut.push(textArr[i]);
    }
  }
  strOut = strOut.filter(function(element) {
    return element !== undefined;
  });
  for (var k = 5; k < strOut.length; k+=6) {
    strOut.splice(k, 0, " ");
  }
  return strOut.join("");
}

$(document).ready(function(){
  $("form#square").submit(function(event){
    event.preventDefault();
    var inputText = $("input").val();
    $(".result").text(crypto(inputText));
    $(".orignal").text(inputText);
  });
});
