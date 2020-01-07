var modeCrayon = 0;
var compteur = 0;
var compteur2 = 0;
var compteur3 = 0;
var compteur4 = 0;
var compteur5 = 0;
var letter = "a";
var letterChar = 0;
var keyPressed = 0;
var one = 0,two = 0,three = 0,four = 0,five = 0,six = 0,seven = 0,eight = 0,nine = 0;
var nombre = 0;
var first1 = 0, first2 = 0, first3 = 0, first4 = 0, first5 = 0, first6 = 0, first7 = 0, first8 = 0, first9 = 0;
var caseNumber = 0;
//select case
$(".subdivision").click(function(){
    $(this).addClass("select");
    $(".subdivision").not(this).removeClass("select")
    divSelect = this.id;
})

$("html").click(function(e){
        if (e.target.id != "#plateau" && $(e.target).parents("#plateau").length == 0){
            $(".subdivision").not(this).removeClass("select")
      divSelect = 0;
        }
})
//Verif button
$("#verifier").click(function(){
  verifRows();
  //$("#verifier").html("gros");
})
//write a number with keyboard
document.addEventListener("keydown",keyDownHandler, false)
function keyDownHandler(event) {
//Passage du mode crayon au mode normal
  if(event.keyCode == 96) {
    if (modeCrayon == 1){
      modeCrayon = 0;
      $("#mode").html(modeCrayon);
    }
    else{
      modeCrayon = 1;
      $("#mode").html(modeCrayon);
    }
  }
  if((modeCrayon == 0) && ($("#"+divSelect+"-n").text() == "")) {
    if(event.keyCode == 97) {
      if ($("#"+divSelect+"-1").html() == "1"){
        $("#"+divSelect+"-1").html(" ")
      }
        else{
          $("#"+divSelect+"-1").html("1");
        }
    }
      else if(event.keyCode == 98) {
        if ($("#"+divSelect+"-2").html() == "2"){
          $("#"+divSelect+"-2").html(" ")
        }
          else{
            $("#"+divSelect+"-2").html("2");
          }
      }
    if(event.keyCode == 99) {
      if ($("#"+divSelect+"-3").html() == "3"){
        $("#"+divSelect+"-3").html(" ")
      }
        else{
          $("#"+divSelect+"-3").html("3");
        }
    }
      else if(event.keyCode == 100) {
        if ($("#"+divSelect+"-4").html() == "4"){
          $("#"+divSelect+"-4").html(" ")
        }
          else{
            $("#"+divSelect+"-4").html("4");
          }
      }
    if(event.keyCode == 101) {
      if ($("#"+divSelect+"-5").html() == "5"){
        $("#"+divSelect+"-5").html(" ")
      }
        else{
          $("#"+divSelect+"-5").html("5");
        }
    }  
      else if(event.keyCode == 102) {
        if ($("#"+divSelect+"-6").html() == "6"){
          $("#"+divSelect+"-6").html(" ")
        }
          else{
            $("#"+divSelect+"-6").html("6");
          }
      }
        
    if(event.keyCode == 103) {
      if ($("#"+divSelect+"-7").html() == "7"){
        $("#"+divSelect+"-7").html(" ")
      }
        else{
          $("#"+divSelect+"-7").html("7");
        }
    }
        
      else if(event.keyCode == 104) {
        if ($("#"+divSelect+"-8").html() == "8"){
          $("#"+divSelect+"-8").html(" ")
        }
          else{
            $("#"+divSelect+"-8").html("8");
          }
      }
        
    if(event.keyCode == 105) {
      if ($("#"+divSelect+"-9").html() == "9"){
        $("#"+divSelect+"-9").html(" ")
      }
        else{
          $("#"+divSelect+"-9").html("9");
        }
    }
  }
    else if (modeCrayon == 1){
      if(event.keyCode == 97) {
        $("#"+divSelect+"-n").html("1");
        keyPressed = 1;
      }
        else if(event.keyCode == 98) {
          $("#"+divSelect+"-n").html("2");
          keyPressed = 1;
        }
      if(event.keyCode == 99) {
        $("#"+divSelect+"-n").html("3");
        keyPressed = 1;
      }
        else if(event.keyCode == 100) {
          $("#"+divSelect+"-n").html("4");
          keyPressed = 1;
        }
      if(event.keyCode == 101) {
        $("#"+divSelect+"-n").html("5");
        keyPressed = 1;
      }
        else if(event.keyCode == 102) {
          $("#"+divSelect+"-n").html("6");
          keyPressed = 1;
        }
      if(event.keyCode == 103) {
          $("#"+divSelect+"-n").html("7");
          keyPressed = 1;
        }
        else if(event.keyCode == 104) {
          $("#"+divSelect+"-n").html("8");
          keyPressed = 1;
        }
      if(event.keyCode == 105) {
        $("#"+divSelect+"-n").html("9");
        keyPressed = 1;
      }
      if (keyPressed == 1){
        erasePen();
        keyPressed = 0;
      }
    }
  if(event.keyCode == 8) {
        $("#"+divSelect+"-n").html("");
      erasePen();
  }
}
//Effacer
function erasePen(){
  for ( compteur = 1; compteur < 10; compteur++) {
    $("#"+divSelect+"-"+compteur).html(" ")
  }
}
function verifDiv(){
  for ( compteur = 0; compteur < 9; compteur++) {
    letter = String.fromCharCode(97);
    letterChar = letter.charCodeAt(0)+compteur;
    letter = String.fromCharCode(letterChar);
    one = two = three = four = five = six = seven = eight = nine = 0;
    for ( compteur2 = 1; compteur2 < 10; compteur2++) {
      nombre = $("#"+compteur2+letter+"-n");
      if (nombre.text() == "1") {
        one = one + 1;
        if (one > 1){
          nombre.addClass("erreur");
          first1.addClass("erreur");
        }else if (one == 1){
          first1 = nombre;
        }
      }
        else if (nombre.text() == "2"){
          two = two + 1;
          if (two > 1){
            nombre.addClass("erreur");
            first2.addClass("erreur");
          }else if (two == 1){
            first2 = nombre;
          }
        }
      if (nombre.text() == "3") {
        three = three + 1;
        if (three > 1){
          nombre.addClass("erreur");
          first3.addClass("erreur");
        }else if (three == 1){
          first3 = nombre;
        }
      }
        else if (nombre.text() == "4"){
          four = four + 1;
          if (four > 1){
            nombre.addClass("erreur");
            first4.addClass("erreur");
          }else if (four == 1){
            first4 = nombre;
          }
        }
      if (nombre.text() == "5") {
        five = five + 1;
        if (five > 1){
          nombre.addClass("erreur");
          first5.addClass("erreur");
        }else if (five == 1){
          first5 = nombre;
        }
      }
        else if (nombre.text() == "6"){
          six = six + 1;
          if (six > 1){
            nombre.addClass("erreur");
            first6.addClass("erreur");
          }else if (six == 1){
            first6 = nombre;
          }
        }
      if (nombre.text() == "7") {
        seven = seven + 1;
        if (seven > 1){
          nombre.addClass("erreur");
          first7.addClass("erreur");
        }else if (seven == 1){
          first7 = nombre;
        }
      }
        else if (nombre.text() == "8"){
          eight = eight + 1;
          if (eight > 1){
            nombre.addClass("erreur");
            first8.addClass("erreur");
          }else if (eight == 1){
            first8 = nombre;
          }
        }
      if (nombre.text() == "9"){
        nine = nine + 1;
        if (nine > 1){
          nombre.addClass("erreur");
          first9.addClass("erreur");
        }else if (nine == 1){
          first9 = nombre;
        }
      }
    }
  }
}
function verifColumns(){
for (compteur = 0; compteur < 3; compteur++){
  for (compteur2 = 1; compteur2 < 4; compteur2++){
    for (compteur3 = 1; compteur3 < 4; compteur3++){
      for (compteur4 = 0; compteur4 < 3; compteur4++){
        letter = String.fromCharCode(97);
        letterChar = letter.charCodeAt(0)+ compteur + 3 * (compteur3 - 1);
        letter = String.fromCharCode(letterChar);
        caseNumber = compteur2 + 3 * compteur4;
        nombre = $("#"+caseNumber+letter+"-n");
        $("#verifier").append(one);
        $("#verifier").append("");
        if (nombre.text() == "1"){
          one = one + 1;
          if (one > 1) {
            nombre.addClass("erreur");
            first1.addClass("erreur");
          }else if (one == 1){
            first1 = nombre;
          }
        }
        if (nombre.text() == "2"){
          two = two + 1;
          if (two > 1) {
            nombre.addClass("erreur");
            first2.addClass("erreur");
          }else if (two == 1){
            first2 = nombre;
          }
        }
        if (nombre.text() == "3"){
          three = three + 1;
          if (three > 1) {
            nombre.addClass("erreur");
            first3.addClass("erreur");
          }else if (three == 1){
            first3 = nombre;
          }
        }
        if (nombre.text() == "4"){
          four = four + 1;
          if (four > 1) {
            nombre.addClass("erreur");
            first4.addClass("erreur");
          }else if (four == 1){
            first4 = nombre;
          }
        }
        if (nombre.text() == "5"){
          five = five + 1;
          if (five > 1) {
            nombre.addClass("erreur");
            first5.addClass("erreur");
          }else if (five == 1){
            first5 = nombre;
          }
        }
        if (nombre.text() == "6"){
          six = six + 1;
          if (six > 1) {
            nombre.addClass("erreur");
            first6.addClass("erreur");
          }else if (six == 1){
            first6 = nombre;
          }
        }
        if (nombre.text() == "7"){
          seven = seven + 1;
          if (seven > 1) {
            nombre.addClass("erreur");
            first7.addClass("erreur");
          }else if (seven == 1){
            first7 = nombre;
          }
        }
        if (nombre.text() == "8"){
          eight = eight + 1;
          if (eight > 1) {
            nombre.addClass("erreur");
            first8.addClass("erreur");
          }else if (eight == 1){
            first8 = nombre;
          }
        }
        if (nombre.text() == "9"){
          nine = nine + 1;
          if (nine > 1) {
            nombre.addClass("erreur");
            first9.addClass("erreur");
          }else if (nine == 1){
            first9 = nombre;
          }
        }
      }
    }
  }
}
}
function verifRows(){
  compteur5 = 0;
for (compteur = 0; compteur <3; compteur++){
  for (compteur2 = 0; compteur2 < 3; compteur2++){
    for (compteur3 = 1; compteur3 < 4; compteur3++){
      for (compteur4 = 1; compteur4 < 4; compteur4++){
        letter = String.fromCharCode(97);
        letterChar = letter.charCodeAt(0)+ compteur3 -1 + 3 * compteur;
        letter = String.fromCharCode(letterChar);
        caseNumber = compteur4 + 3 * compteur2;
        nombre = $("#"+caseNumber+letter+"-n");
        $("#verifier").append(caseNumber);
        $("#verifier").append(letter);
        nombre.css("background-color","black");
        if (compteur5 < 8){
          compteur5 = compteur5 + 1;
        }else{
          compteur5 = 0;
          one = two = three = four = five = six = seven = eight = nine = 0;
        }
        if (nombre.text() == "1"){
          one = one + 1;
          if (one > 1) {
            nombre.addClass("erreur");
            first1.addClass("erreur");
          }else if (one == 1){
            first1 = nombre;
          }
        } else if (nombre.text() == "2"){
          two = two + 1;
          if (two > 1) {
            nombre.addClass("erreur");
            first2.addClass("erreur");
          }else if (two == 1){
            first2 = nombre;
          }
        }
        if (nombre.text() == "3"){
          three = three + 1;
          if (three > 1) {
            nombre.addClass("erreur");
            first3.addClass("erreur");
          }else if (three == 1){
            first3 = nombre;
          }
        }else if (nombre.text() == "4"){
          four = four + 1;
          if (four > 1) {
            nombre.addClass("erreur");
            first4.addClass("erreur");
          }else if (four == 1){
            first4 = nombre;
          }
        }
        if (nombre.text() == "5"){
          five = five + 1;
          if (five > 1) {
            nombre.addClass("erreur");
            first5.addClass("erreur");
          }else if (five == 1){
            first5 = nombre;
          }
        } else if (nombre.text() == "6"){
          six = six + 1;
          if (six > 1) {
            nombre.addClass("erreur");
            first6.addClass("erreur");
          }else if (six == 1){
            first6 = nombre;
          }
        }
        if (nombre.text() == "7"){
          seven = seven + 1;
          if (seven > 1) {
            nombre.addClass("erreur");
            first7.addClass("erreur");
          }else if (seven == 1){
            first7 = nombre;
          }
        } else if (nombre.text() == "8"){
          eight = eight + 1;
          if (eight > 1) {
            nombre.addClass("erreur");
            first8.addClass("erreur");
          }else if (eight == 1){
            first8 = nombre;
          }
        }
        if (nombre.text() == "9"){
          nine = nine + 1;
          if (nine > 1) {
            nombre.addClass("erreur");
            first9.addClass("erreur");
          }else if (nine == 1){
            first9 = nombre;
          }
        }
      }
    }
  }
}
//  for x 1 → 3
//    for 0 → 2
//      lettre a + ce compteur abc + 3*y
//      check 1+3*x,2+3*x,3+3*x
}
