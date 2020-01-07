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
var random = 0;
var wrong = 0;
var no = 0;
var next = 0;
var nbPossible = [1,2,3,4,5,6,7,8,9];
var chiffre = 0;
var verite = 0;
var truth = 0;
//select case
$(".subdivision").click(function(){
    $(this).addClass("select");
    $(".subdivision").not(this).removeClass("select");
    divSelect = this.id;
    //$("#verifier").html($("#"+divSelect).html());
    $("#verifier").html(divSelect);
})

$("html").click(function(e){
        if (e.target.id != "#plateau" && $(e.target).parents("#plateau").length == 0){
            $(".subdivision").not(this).removeClass("select")
      divSelect = 0;
        }
})
//Verif button
$("#verifier").click(function(){
  verifDiv();
  verifColumns();
  verifRows();

  //verite = error();
  //$("#erase").append(verite);
  //$("#verifier").html("gros");
})
$("#erase").click(function(){
  erase();
})
//Generer button
$("#generer").click(function(){
    generate();
  }
)
//write a number with keyboard
document.addEventListener("keydown",keyDownHandler, false)


//Ecriture
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
      one = verif(nombre,one,"1");        
      two =verif(nombre,two,"2");      
      three = verif(nombre,three,"3");        
      four =verif(nombre,four,"4");         
      five =verif(nombre,five,"5");         
      six =verif(nombre,six,"6");         
      seven =verif(nombre,seven,"7");         
      eight =verif(nombre,eight,"8");         
      nine =verif(nombre,nine,"9");
      truth = truth + nbError(one,two,three,four,five,six,seven,eight,nine);
      
    }
  }
  return(truth);
}
function verifColumns(){
  compteur5 = 0;
  for (compteur = 0; compteur < 3; compteur++){
    for (compteur2 = 1; compteur2 < 4; compteur2++){
      for (compteur3 = 1; compteur3 < 4; compteur3++){
        for (compteur4 = 0; compteur4 < 3; compteur4++){
          letter = String.fromCharCode(97);
          letterChar = letter.charCodeAt(0)+ compteur + 3 * (compteur3 - 1);
          letter = String.fromCharCode(letterChar);
          caseNumber = compteur2 + 3 * compteur4;
          nombre = $("#"+caseNumber+letter+"-n");
          if (compteur5 < 8){
            compteur5 = compteur5 + 1;
          }else{
            compteur5 = 0;
              one = two = three = four = five = six = seven = eight = nine = 0;
            }
          one = verif(nombre,one,"1");        
          two =verif(nombre,two,"2");      
          three = verif(nombre,three,"3");        
          four =verif(nombre,four,"4");         
          five =verif(nombre,five,"5");         
          six =verif(nombre,six,"6");         
          seven =verif(nombre,seven,"7");         
          eight =verif(nombre,eight,"8");         
          nine =verif(nombre,nine,"9");
          truth = truth + nbError(one,two,three,four,five,six,seven,eight,nine);
          
        }
      }
    }
  }
  return(truth);
}
function verifRows(){
  compteur5 = 0;
  truth = 0;
  //compteurTest =0;
  for (compteur = 0; compteur <3; compteur++){
    for (compteur2 = 0; compteur2 < 3; compteur2++){
      //nombre.css("background-color","red");
      for (compteur3 = 1; compteur3 < 4; compteur3++){
        for (compteur4 = 1; compteur4 < 4; compteur4++){
          letter = String.fromCharCode(97);
          letterChar = letter.charCodeAt(0)+ compteur3 -1 + 3 * compteur;
          letter = String.fromCharCode(letterChar);
          caseNumber = compteur4 + 3 * compteur2;
          //compteurTest = compteurTest + 1;
          nombre = $("#"+caseNumber+letter+"-n");
          //nombre.html(compteurTest);
          if (compteur5 < 8){
            compteur5 = compteur5 + 1;
          }else{
            compteur5 = 0;
            one = two = three = four = five = six = seven = eight = nine = 0;
          }
          one = verif(nombre,one,"1");        
          two =verif(nombre,two,"2");      
          three = verif(nombre,three,"3");        
          four =verif(nombre,four,"4");         
          five =verif(nombre,five,"5");         
          six =verif(nombre,six,"6");         
          seven =verif(nombre,seven,"7");         
          eight =verif(nombre,eight,"8");         
          nine =verif(nombre,nine,"9");
          truth = truth + nbError(one,two,three,four,five,six,seven,eight,nine);
          
        }
      }
    }
  }
  return(truth);
}
//  for x 1 → 3
//    for 0 → 2
//      lettre a + ce compteur abc + 3*y
//      check 1+3*x,2+3*x,3+3*x
function verif(nombre,chiffre,chiffrestr){
  if (nombre.text() == chiffrestr){
    chiffre = chiffre + 1;
    if (chiffre > 1) {
      nombre.addClass("erreur");
      first.addClass("erreur");
    }else if (chiffre == 1){
      first = nombre;
    }
  }
  return(chiffre)
}
function nbError(un,deux,trois,quatre,cinq,six,sept,huit,neuf){
  un = subNbError(un);
  deux = subNbError(deux);
  trois = subNbError(trois);
  quatre = subNbError(quatre);
  cinq = subNbError(cinq);
  six = subNbError(six);
  sept = subNbError(sept);
  huit = subNbError(huit);
  neuf = subNbError(neuf);
  retourne = un+deux+trois+quatre+cinq+six+sept+huit+neuf
  return(retourne);
}
function subNbError(nb){
  if (nb == 1){
    nb = 0;
  }
  return(nb);
}
//Il faut réaliser un tirage sans remise
function tirage(){
  var liste = new Array();
  for (var i = 0; i < 1; i++) {
    if (nbPossible.length == 0) {break;}
    nbPossible.sort(randsort);
    liste.push(nbPossible.pop())  
    }
  return liste;
}
function randsort(){
  return (Math.random()*2&1)?-1:1;
}
/**function generate(){
  compteur5 = 0;
  for ( compteur = 0; compteur < 9; compteur++) {
    random = tirage()
    letter = String.fromCharCode(97);
    letterChar = letter.charCodeAt(0)+compteur;
    letter = String.fromCharCode(letterChar);
    one = two = three = four = five = six = seven = eight = nine = 0;
    nbPossible = [1,2,3,4,5,6,7,8,9];
    for ( compteur2 = 1; compteur2 < 10; compteur2++) {
      nombre = $("#"+compteur2+letter+"-n");
      random = tirage()
      nombre.html(random);
    }
  }          
}
*/
function generate(){
  verite = 0;
  for (compteur = 0; compteur <3; compteur++){
    for (compteur2 = 0; compteur2 < 3; compteur2++){
      for (compteur3 = 1; compteur3 < 4; compteur3++){
        for (compteur4 = 1; compteur4 < 4; compteur4++){
          letter = String.fromCharCode(97);
          letterChar = letter.charCodeAt(0)+ compteur3 -1 + 3 * compteur;
          letter = String.fromCharCode(letterChar);
          caseNumber = compteur4 + 3 * compteur2;
          nombre = $("#"+caseNumber+letter+"-n");
          random = tirage();
          nombre.html(random);
          verite = error();
          $("#generer").append(verite);
          if (verite == 0){
            //$("#verifier").append("ah");
          }else{
            //$("#verifier").append("oh");
          }
        }
      }
    }
  }
}
function error(){
  a = verifDiv();
  b = verifRows();
  c = verifColumns();
  d = a +b + c;
  truth = 0;
  for (compteur = 0; compteur <3; compteur++){
    for (compteur2 = 0; compteur2 < 3; compteur2++){
      for (compteur3 = 1; compteur3 < 4; compteur3++){
        for (compteur4 = 1; compteur4 < 4; compteur4++){
          letter = String.fromCharCode(97);
          letterChar = letter.charCodeAt(0)+ compteur3 -1 + 3 * compteur;
          letter = String.fromCharCode(letterChar);
          caseNumber = compteur4 + 3 * compteur2;
          nombre = $("#"+caseNumber+letter+"-n");
          if (d != 0){
            truth = truth + 1;
          }else{
            nbPossible = [1,2,3,4,5,6,7,8,9];
          }
        }
      }
    }
  }
  return(truth);
}
function erase(chiffre){
  for (compteur = 0; compteur <3; compteur++){
    for (compteur2 = 0; compteur2 < 3; compteur2++){
      for (compteur3 = 1; compteur3 < 4; compteur3++){
        for (compteur4 = 1; compteur4 < 4; compteur4++){
          letter = String.fromCharCode(97);
          letterChar = letter.charCodeAt(0)+ compteur3 -1 + 3 * compteur;
          letter = String.fromCharCode(letterChar);
          caseNumber = compteur4 + 3 * compteur2;
          nombre = $("#"+caseNumber+letter+"-n");
          if (nombre.text() == chiffre) {
            nombre.html("");
            nombre.removeClass("erreur")
          }
        }
      }
    }
  }
}
function nextH(currentCase){
  //Parcours une ligne, quand atteind l'id currentCase va voir la case juste après et la retourne (si au dernier rang, retourne celle du premier rang de la ligne)
  compteur5 = 0;
  for (compteur = 0; compteur <3; compteur++){
    for (compteur2 = 0; compteur2 < 3; compteur2++){
      for (compteur3 = 1; compteur3 < 4; compteur3++){
        for (compteur4 = 1; compteur4 < 4; compteur4++){
          letter = String.fromCharCode(97);
          letterChar = letter.charCodeAt(0)+ compteur3 -1 + 3 * compteur;
          letter = String.fromCharCode(letterChar);
          caseNumber = compteur4 + 3 * compteur2;
          nombre = (caseNumber+letter);
          if (compteur5 == 1){
            if (currentCase == "3c"){
              return("1a");
            }else if (currentCase == "6c"){
              return("4a");
            }
            if (currentCase == "9c"){
              return("7a")
            }else if (currentCase == "3f"){
            return("1d");
            }
            if (currentCase == "6f"){
              return("4d");
            }else if (currentCase == "9f"){
              return("7d");
            }
            if (currentCase == "3i"){
              return("1g");
            }else if (currentCase == "6i"){
              return("4g");
            }
            if (currentCase == "9i"){
              return("7g");
            }else{
              return(nombre);
            }
          }
          if (nombre == currentCase){
            compteur5 = 1;
          }
        }
      }
    }
  }
}