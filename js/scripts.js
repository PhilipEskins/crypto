function crypto (text) {
  var lowerText = text.toLowerCase();
  var textArr = lowerText.split(" ").join("").split("");
  var arrRow = Math.ceil(Math.sqrt(textArr.length));
  var arrCol = Math.ceil(textArr.length / arrRow);

  // for (var i = 0; i<textArr.length; i++) {
  //   var noSpaces = textArr.filter(i => i != " ");
  // }
    console.log(textArr.length);
    console.log(arrRow);
    console.log(arrCol);
}

$(document).ready(function(){
  $("form#square").submit(function(event){
    event.preventDefault();
    var inputText = $("input").val();
    $(".result").text(crypto(inputText));
    $(".orignal").text(inputText);
  });
});
