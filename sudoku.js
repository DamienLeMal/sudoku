var modeCrayon = 1;
var compteur = 0;
var compteur2 = 0;
var compteur3 = 0;
var compteur4 = 0;
var compteur5 = 0;
var compteur6 = 0;
var compteur_ = 0;
var compteur2_ = 0;
var compteur3_ = 0;
var compteur4_ = 0;
var compteur5_ = 0;
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
var numpad = 0;
var theme = 0;
var fond = 0,fond_grille = 0,main_color = 0,text = 0,digit = 0,crayon = 0,erreur = 0,select = 0,temps = 0;
var sec = 0;
var draw_sec = 0;
var min = 0;
var draw_min = 0;
var challenge = 0;
var gap = 0;
var nombreId = 0;
var subNombre = 0;
//select case
$(".subdivision").click(function(){
    $(this).addClass("select");
    $(".subdivision").not(this).removeClass("select");
    divSelect = this.id;
    themeApply(fond,fond_grille,main_color,text,digit,crayon,erreur,select,temps);
    //$("#verifier").html($("#"+divSelect).html());
    //$("#verifier").html(divSelect);
})

$("html").click(function(e){
        if (e.target.id != "#plateau" && $(e.target).parents("#plateau").length == 0){
          if (numpad == 0){
            $(".subdivision").not(this).removeClass("select");
            themeApply(fond,fond_grille,main_color,text,digit,crayon,erreur,select,temps);
            divSelect = 0;
          }else{
            numpad = 0;
          }
        }
})
//Verif button
$("#verifier").click(function(){
  verifDiv();
  themeApply(fond,fond_grille,main_color,text,digit,crayon,erreur,select,temps);
  for (compteur = 0; compteur <3; compteur++){
    for (compteur2 = 0; compteur2 < 3; compteur2++){
      for (compteur3 = 1; compteur3 < 4; compteur3++){
        for (compteur4 = 1; compteur4 < 4; compteur4++){
          letter = String.fromCharCode(97);
          letterChar = letter.charCodeAt(0)+ compteur3 -1 + 3 * compteur;
          letter = String.fromCharCode(letterChar);
          caseNumber = compteur4 + 3 * compteur2;    
          nombre = $("#"+caseNumber+letter+"-n");
          if (nombre.hasClass("erreur")){
            wrong = 1;
          }
          if (nombre.html() == ""){
            gap = 1;
          }
        }
      }
    }
  }
  if ((wrong == 0)&&(gap == 0)){
    window.clearInterval(fenetre);
    alert("Félicitation ! Vous avez gagné !");
  }else{
    wrong = 0;
    gap = 0;
  }
})

$("#erase").click(function(){
  erase();
  erasePen();
})
//Generer button
$("#generer").click(function(){
    generate();
  }
)
$("#mode").click(function(){
  if (modeCrayon == 1){
      modeCrayon = 0;
      $("#mode").html("Mode Crayon");
      $(".numPad").css("font-size","1em")
    }
    else{
      modeCrayon = 1;
      $("#mode").html("Mode Normal");
      $(".numPad").css("font-size","2em")
    }
})
$("#theme").click(function(){
  if (theme != 8){
  theme = theme + 1;
  }else{
    theme = 0;
  }
  switch (theme){
    case 0 :
      $("#theme").html("Classic");
      fond = "white";
      fond_grille = "white";
      main_color = "black";
      text = "white";
      digit = "black";
      crayon = "gray";
      erreur = "red";
      select = "gainsboro";
      temps = "black";
      break;
    case 2 :
      $("#theme").html("Lemon");
      fond = "#F8ECB1";
      fond_grille = "#B5CE9F";
      main_color = "#8CB369";
      text = "#F8ECB1";
      digit = "#5B8E7D";
      crayon = "#5B8E7D";
      erreur = "#BC4B51";
      select = "#A0C084";
      temps = "#5B8E7D";
      themeApply(fond,fond_grille,main_color,text,digit,crayon,erreur,select,temps);
      break;
    case 1 :
      $("#theme").html("Night");
      fond = "black";
      fond_grille = "black";
      main_color = "white";
      text = "black";
      digit = "white";
      crayon = "silver";
      erreur = "red";
      select = "#303030";
      temps = "white";
      themeApply(fond,fond_grille,main_color,text,digit,crayon,erreur,select,temps);
      break;
    case 3 :
      $("#theme").html("Magma");
      fond = "#621B00";
      fond_grille = "#CD5F17";
      main_color = "#2F1000";
      text = "#621B00";
      digit = "#2F1000";
      crayon = "#621B00";
      erreur = "#5E0300";
      select = "#A34200";
      temps = "#2F1000";
      themeApply(fond,fond_grille,main_color,text,digit,crayon,erreur,select,temps);
      break;
    case 4 :
      $("#theme").html("Neo Retro Night");
      fond = "black";
      fond_grille = "black";
      main_color = "white";
      text = "black";
      digit = "white";
      crayon = "silver";
      erreur = "red";
      select = "#303030";
      temps = "white";
      themeApply(fond,fond_grille,main_color,text,digit,crayon,erreur,select,temps);
      $(".puzzle").css("text-shadow","1px 1px 2px red, 0 0 1em blue, 0 0 0.2em blue");
      $(".puzzle").css("background-color","black !important");
      $("#plateau").css("box-shadow","1px 1px 2px red, 0 0 1em blue, 0 0 0.2em blue");
      $(".division").css("box-shadow","1px 1px 2px red, 0 0 1em blue, 0 0 0.2em blue");
      $(".subdivision").css("box-shadow","1px 1px 2px red, 0 0 1em blue, 0 0 0.2em blue");
      $(".bouton").css("box-shadow","1px 1px 2px red, 0 0 1em blue, 0 0 0.2em blue");
      $(".bouton").css("text-shadow","1px 1px 2px red, 0 0 1em blue, 0 0 0.2em blue");
      $(".numPad").css("box-shadow","1px 1px 2px red, 0 0 1em blue, 0 0 0.2em blue");
      $(".numPad").css("text-shadow","1px 1px 2px red, 0 0 1em blue, 0 0 0.2em blue");
      $(".nombre").css("text-shadow","1px 1px 2px red, 0 0 1em blue, 0 0 0.2em blue");
      $(".crayon").css("text-shadow","1px 1px 2px red, 0 0 1em blue, 0 0 0.2em blue");
      $("#chrono").css("text-shadow","1px 1px 2px red, 0 0 1em blue, 0 0 0.2em blue");
      $(".erreur").css("text-shadow","1px 1px 2px red, 0 0 1em blue, 0 0 0.2em blue");
      break;
    case 5 :
      $("#theme").html("Strawberry");
      fond = "#18753A";
      fond_grille = "#EF233C";
      main_color = "#D90429";
      text = "#FFC300";
      digit = "#FFC300";
      crayon = "#FFC300";
      erreur = "#F24B85";
      select = "#C41D32";
      temps = "#FFC300";
      themeApply(fond,fond_grille,main_color,text,digit,crayon,erreur,select,temps);
      break;
    case 6 :
      $("#theme").html("Sorbet");
      fond = "#FFA5AB";
      fond_grille = "#F9DBBD";
      main_color = "#A53860";
      text = "#FFA5AB";
      digit = "#DA627D";
      crayon = "#DA627D";
      erreur = "#A53860";
      select = "#E3C8AC";
      temps = "#DA627D";
      themeApply(fond,fond_grille,main_color,text,digit,crayon,erreur,select,temps);
      break;
    case 7 :
      $("#theme").html("Ocean");
      fond = "#006DAA";
      fond_grille = "#67A7CC";
      main_color = "#061A40";
      text = "#0353A4";
      digit = "#0353A4";
      crayon = "#0353A4";
      erreur = "#F22121";
      select = "#4191BF";
      temps = "#67A7CC";
      themeApply(fond,fond_grille,main_color,text,digit,crayon,erreur,select,temps);
      break;
    case 8 :
      $("#theme").html("Tropical");
      fond = "#306B34";
      fond_grille = "#F3FFC6";
      main_color = "#C3EB78";
      text = "#1C5253";
      digit = "#1C5253";
      crayon = "#1C5253";
      erreur = "#B6174B";
      select = "#EEFFAD";
      temps = "#F3FFC6";
      themeApply(fond,fond_grille,main_color,text,digit,crayon,erreur,select,temps);
      break;
  }
})

//Puzzle
$("#suivant").click(function(){
  if (challenge == 0){
    challenge = 1;
  }
  sec = 0;
  min = 0;
  draw_sec = "0"+sec;
  draw_min = "0"+min;
  $("#chrono").html(draw_min+":"+draw_sec);
  $("#suivant").html("Next Puzzle");
  switch (challenge){
    case 1:
      clearPuzzle();
      writePuzzle("0","5","2","0","0","0","6","4","0",
                  "0","0","0","7","0","2","0","0","0",
                  "0","8","0","0","3","0","0","5","0",
                  "8","0","0","0","0","0","0","0","5",
                  "0","0","0","3","6","8","0","0","0",
                  "1","0","0","0","0","0","0","0","4",
                  "0","0","0","0","9","0","0","2","0",
                  "0","0","0","6","0","5","0","0","0",
                  "0","1","6","0","0","0","9","3","0");
      $("#noPuzzle").html("Puzzle "+challenge+"/5");
      challenge = challenge + 1;
      break;
    case 2:
      //reset
      clearPuzzle();
      writePuzzle("9","0","0","0","0","0","0","0","1",
                  "0","0","2","7","0","3","9","0","0",
                  "0","6","0","0","1","0","0","5","0",
                  "0","8","0","0","7","0","0","2","0",
                  "0","0","4","3","0","9","6","0","0",
                  "0","3","0","0","2","0","0","4","0",
                  "0","7","0","0","6","0","0","9","0",
                  "0","0","5","8","0","7","4","0","0",
                  "6","0","0","0","0","0","0","0","5");
      $("#noPuzzle").html("Puzzle "+challenge+"/5");
      challenge = challenge + 1;
      break;
    case 3:
      clearPuzzle();
      writePuzzle("0","0","1","2","0","3","4","0","0",
                  "0","0","0","6","0","7","0","0","0",
                  "5","0","0","0","0","0","0","0","3",
                  "3","7","0","0","0","0","0","8","1",
                  "0","0","0","0","0","0","0","0","0",
                  "6","2","0","0","0","0","0","3","7",
                  "1","0","0","0","0","0","0","0","8",
                  "0","0","0","8","0","5","0","0","0",
                  "0","0","6","4","0","2","5","0","0");
      $("#noPuzzle").html("Puzzle "+challenge+"/5");
      challenge = challenge + 1;
      break;
    case 4:
      clearPuzzle();      
      writePuzzle("6","0","0","0","3","0","0","4","0",
                  "0","0","0","0","0","2","7","0","8",
                  "0","0","0","1","0","0","0","6","0",
                  "0","0","5","6","0","0","0","9","0",
                  "8","0","0","0","7","0","0","0","4",
                  "0","7","0","0","0","1","3","0","0",
                  "0","2","0","0","0","7","0","0","0",
                  "9","0","3","4","0","0","0","0","0",
                  "0","8","0","0","2","0","0","0","9");
      $("#noPuzzle").html("Puzzle "+challenge+"/5");
      challenge = challenge + 1;
      break;
    case 5:
      clearPuzzle();      
      writePuzzle("0","8","1","0","0","0","0","0","0",
                  "2","0","0","6","0","0","0","0","0",
                  "5","0","0","4","0","0","1","0","0",
                  "0","1","9","0","0","7","0","0","0",
                  "0","0","0","0","0","0","0","0","0",
                  "0","0","0","2","0","0","6","4","0",
                  "0","0","3","0","0","9","0","0","8",
                  "0","0","0","0","0","1","0","0","7",
                  "0","0","0","0","0","0","3","2","0");
      $("#noPuzzle").html("Puzzle "+challenge+"/5");
      challenge = 0;
      break;
  }
})

$(".subdivision").hover(function(){
  $(this).addClass("subdHover");
  themeApply(fond,fond_grille,main_color,text,digit,crayon,erreur,select,temps);
},function(){
  $(this).removeClass("subdHover");
  themeApply(fond,fond_grille,main_color,text,digit,crayon,erreur,select,temps);
})


function themeApply(fond,fond_grille,main_color,text,digit,crayon,erreur,select,temps){
  //reset des folies
  if ($("#theme").html() != "Neo Retro Night"){
    $(".puzzle").css("text-shadow","none");
      $(".puzzle").css("background-color","black !important");
      $("#plateau").css("box-shadow","none");
      $(".division").css("box-shadow","none");
      $(".subdivision").css("box-shadow","none");
      $(".bouton").css("box-shadow","none");
      $(".bouton").css("text-shadow","none");
      $(".numPad").css("box-shadow","none");
      $(".numPad").css("text-shadow","none");
      $(".nombre").css("text-shadow","none");
      $(".crayon").css("text-shadow","none");
      $("#chrono").css("text-shadow","none");
      $(".erreur").css("text-shadow","none");
  }
  //bakcground
  $("body").css("background-color",fond);
  //grid background color
  $(".subdivision").css("background-color",fond_grille);
  //grid line color
  $("#plateau").css("border-color",main_color);
  $(".division").css("border-color",main_color);
  $(".subdivision").css("border-color",main_color);
  //boutons
  $(".bouton").css("background-color",main_color);
  $(".bouton").css("color",text);
  $(".numPad").css("background-color",fond_grille);
  $(".numPad").css("color",digit);
  $(".numPad").css("border-color",main_color);
  //numero
  $(".nombre").css("color",digit);
  $(".crayon").css("color",crayon);
  //error
  $(".erreur").css("color",erreur);
  //select
  $(".select").css("background-color",select);
  //hover
  $(".subdHover").css("background-color",select);
  //chrono
  $("#chrono").css("color",temps);
  //Puzzle shadow
  $(".puzzle").css("background-color",select)
}

//chronometre
var fenetre = window.setInterval(function(){
  sec = sec+1;
  if (sec == 60){
    min = min+1;
    sec = 0;
  }
  if (sec < 10){
    draw_sec = "0"+sec;
  }else{
    draw_sec = sec;
  }
  if (min < 10){
    draw_min = "0"+min;
  }else{
    draw_min = min;
  }
  $("#chrono").html(draw_min+":"+draw_sec);
},1000)

//write a number with keyboard
document.addEventListener("keydown",keyDownHandler, false)


//Ecriture
function keyDownHandler(event) {
//Passage du mode crayon au mode normal
if ($("#"+divSelect).hasClass("puzzle") == false){
  if(event.keyCode == 96) {
    if (modeCrayon == 1){
      modeCrayon = 0;
      $("#mode").html("Mode Crayon");
      $(".numPad").css("font-size","1em")
    }
    else{
      modeCrayon = 1;
      $("#mode").html("Mode Normal");
      $(".numPad").css("font-size","2em")
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
}
$("#1").click(function(){
  $("#"+divSelect+"-n").html("1");
  numpad = 1;
})
$("#2").click(function(){
  $("#"+divSelect+"-n").html("2");
  numpad = 1;
})
$("#3").click(function(){
  $("#"+divSelect+"-n").html("3");
  numpad = 1;
})
$("#4").click(function(){
  $("#"+divSelect+"-n").html("4");
  numpad = 1;
})
$("#5").click(function(){
  $("#"+divSelect+"-n").html("5");
  numpad = 1;
})
$("#6").click(function(){
  $("#"+divSelect+"-n").html("6");
  numpad = 1;
})
$("#7").click(function(){
  $("#"+divSelect+"-n").html("7");
  numpad = 1;
})
$("#8").click(function(){
  $("#"+divSelect+"-n").html("8");
  numpad = 1;
})
$("#9").click(function(){
  $("#"+divSelect+"-n").html("9");
  numpad = 1;
})
function verifDiv(){
  for ( compteur = 0; compteur < 9; compteur++) {
    letter = String.fromCharCode(97);
    letterChar = letter.charCodeAt(0)+compteur;
    letter = String.fromCharCode(letterChar);
    one = two = three = four = five = six = seven = eight = nine = 0;
    for ( compteur2 = 1; compteur2 < 10; compteur2++) {
      nombre = $("#"+compteur2+letter+"-n");
      one = verif(nombre,one,"1");        
      two = verif(nombre,two,"2");      
      three = verif(nombre,three,"3");        
      four = verif(nombre,four,"4");         
      five = verif(nombre,five,"5");         
      six = verif(nombre,six,"6");         
      seven = verif(nombre,seven,"7");         
      eight = verif(nombre,eight,"8");         
      nine = verif(nombre,nine,"9");
      if (one > 1){
        errDiv("1",letter)
      }
      if (two > 1){
        errDiv("2",letter)
      }
      if (three > 1){
        errDiv("3",letter)
      }
      if (four > 1){
        errDiv("4",letter)
      }
      if (five > 1){
        errDiv("5",letter)
      }
      if (six > 1){
        errDiv("6",letter)
      }
      if (seven > 1){
        errDiv("7",letter)
      }
      if (eight > 1){
        errDiv("8",letter)
      }
      if (nine > 1){
        errDiv("9",letter)
      }
    }
  }
  one = two = three = four = five = six = seven = eight = nine = 0;
  verifColumns();
}
function errDiv(nb,letter){
  for ( compteur2 = 1; compteur2 < 10; compteur2++) {
    nombre = $("#"+compteur2+letter+"-n");
    if (nombre.text() == nb){
        nombre.addClass("erreur");
      }
  }
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
          //verif
          one = verif(nombre,one,"1");        
          two = verif(nombre,two,"2");      
          three = verif(nombre,three,"3");        
          four = verif(nombre,four,"4");         
          five = verif(nombre,five,"5");         
          six = verif(nombre,six,"6");         
          seven = verif(nombre,seven,"7");         
          eight = verif(nombre,eight,"8");         
          nine = verif(nombre,nine,"9"); 

          if (one > 1){
            errColumns("1",caseNumber,letter);
          }
          if (two > 1){
            errColumns("2",caseNumber,letter);
          }
          if (three > 1){
            errColumns("3",caseNumber,letter);
          }
          if (four > 1){
            errColumns("4",caseNumber,letter);
          }
          if (five > 1){
            errColumns("5",caseNumber,letter);
          }
          if (six > 1){
            errColumns("6",caseNumber,letter);
          }
          if (seven > 1){
            errColumns("7",caseNumber,letter);
          }
          if (eight > 1){
            errColumns("8",caseNumber,letter);
          }
          if (nine > 1){
            errColumns("9",caseNumber,letter);
          }
          if (compteur5 != 8){
            compteur5 = compteur5 + 1;
          }else{
            compteur5 = 0;
            one = two = three = four = five = six = seven = eight = nine = 0;
          }
        }
      }
    }
  }
  verifRows();
}
function errColumns(nb,caseNumber,letter){
  nombreId = caseNumber+letter;
  for (compteur6 = 0; compteur6 < 9; compteur6++){
    nombreId = nextV(nombreId);
    if ($("#"+nombreId+"-n").text() == nb){
      $("#"+nombreId+"-n").addClass("erreur");
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
          //verif
          one = verif(nombre,one,"1");        
          two = verif(nombre,two,"2");      
          three = verif(nombre,three,"3");        
          four = verif(nombre,four,"4");         
          five = verif(nombre,five,"5");         
          six = verif(nombre,six,"6");         
          seven = verif(nombre,seven,"7");         
          eight = verif(nombre,eight,"8");         
          nine = verif(nombre,nine,"9");
          
          if (one > 1){
            errRows("1",caseNumber,letter);
          }
          if (two > 1){
            errRows("2",caseNumber,letter);
          }
          if (three > 1){
            errRows("3",caseNumber,letter);
          }
          if (four > 1){
            errRows("4",caseNumber,letter);
          }
          if (five > 1){
            errRows("5",caseNumber,letter);
          }
          if (six > 1){
            errRows("6",caseNumber,letter);
          }
          if (seven > 1){
            errRows("7",caseNumber,letter);
          }
          if (eight > 1){
            errRows("8",caseNumber,letter);
          }
          if (nine > 1){
            errRows("9",caseNumber,letter);
          }
          if (compteur5 != 8){
            compteur5 = compteur5 + 1;
          }else{
            compteur5 = 0;
            one = two = three = four = five = six = seven = eight = nine = 0;
          }
        }
      }
    }
  }
}
function errRows(nb,caseNumber,letter){
  nombreId = caseNumber+letter;
  for (compteur6 = 0; compteur6 < 9; compteur6++){
    nombreId = nextH(nombreId);
    if ($("#"+nombreId+"-n").text() == nb){
      $("#"+nombreId+"-n").addClass("erreur");
    }
  }
}
//  for x 1 → 3
//    for 0 → 2
//      lettre a + ce compteur abc + 3*y
//      check 1+3*x,2+3*x,3+3*x
function verif(nombre,chiffre,chiffrestr){
  if (nombre.text() == chiffrestr){
    chiffre = chiffre + 1;
  }
  return(chiffre)
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

function generate(){
  for ( compteur = 0; compteur < 9; compteur++) {
    letter = String.fromCharCode(97);
    letterChar = letter.charCodeAt(0)+compteur;
    letter = String.fromCharCode(letterChar);
    one = two = three = four = five = six = seven = eight = nine = 0;
    for ( compteur2 = 1; compteur2 < 10; compteur2++) {
      nombre = $("#"+compteur2+letter+"-n");
      random = tirage();
      if ($("#"+compteur2+letter).hasClass("puzzle") == false){
        nombre.html(random);
      }
    }
    nbPossible = [1,2,3,4,5,6,7,8,9];
  }
}
//Effacer
function erasePen(){
  for ( compteur = 1; compteur < 10; compteur++) {
    $("#"+divSelect+"-"+compteur).html(" ")
  }
}
function erase(){
  for (compteur = 0; compteur <3; compteur++){
    for (compteur2 = 0; compteur2 < 3; compteur2++){
      for (compteur3 = 1; compteur3 < 4; compteur3++){
        for (compteur4 = 1; compteur4 < 4; compteur4++){
          letter = String.fromCharCode(97);
          letterChar = letter.charCodeAt(0)+ compteur3 -1 + 3 * compteur;
          letter = String.fromCharCode(letterChar);
          caseNumber = compteur4 + 3 * compteur2;
          nombre = $("#"+caseNumber+letter+"-n");
          if ($("#"+caseNumber+letter).hasClass("puzzle") == false){
            nombre.html("");
          }
          nombre.removeClass("erreur");
          divSelect = caseNumber+letter;
          for ( compteur5 = 1; compteur5 < 10; compteur5++) {
            subNombre = $("#"+caseNumber+letter+"-"+compteur5);
            subNombre.html("");
          }
        }
      }
    }
  }
}
function nextH(currentCase){
  //Parcours une ligne, quand atteind l'id currentCase va voir la case juste après et la retourne
  compteur5_ = 0;
  for (compteur_ = 0; compteur_ <3; compteur_++){
    for (compteur2_ = 0; compteur2_ < 3; compteur2_++){
      for (compteur3_ = 1; compteur3_ < 4; compteur3_++){
        for (compteur4_ = 1; compteur4_ < 4; compteur4_++){
          letter = String.fromCharCode(97);
          letterChar = letter.charCodeAt(0)+ compteur3_ -1 + 3 * compteur_;
          letter = String.fromCharCode(letterChar);
          caseNumber = compteur4_ + 3 * compteur2_;
          nombre = (caseNumber+letter);
          if (currentCase == "3c"){
            return("1a");
          }
          if (currentCase == "6c"){
            return("4a");
          }
          if (currentCase == "9c"){
            return("7a")
          }
          if (currentCase == "3f"){
          return("1d");
          }
          if (currentCase == "6f"){
            return("4d");
          }
          if (currentCase == "9f"){
            return("7d");
          }
          if (currentCase == "3i"){
            return("1g");
          }
          if (currentCase == "6i"){
            return("4g");
          }
          if (currentCase == "9i"){
            return("7g");
          }
          if (compteur5_ == 1){
            return(nombre);
          }
          if (nombre == currentCase){
            compteur5_ = 1;
          }
        }
      }
    }
  }
}
function nextV(currentCase){
  //Parcours une ligne, quand atteind l'id currentCase va voir la case juste après et la retourne
  compteur5_ = 0;
  for (compteur_ = 0; compteur_ < 3; compteur_++){
    for (compteur2_ = 1; compteur2_ < 4; compteur2_++){
      for (compteur3_ = 1; compteur3_ < 4; compteur3_++){
        for (compteur4_ = 0; compteur4_ < 3; compteur4_++){
          letter = String.fromCharCode(97);
          letterChar = letter.charCodeAt(0)+ compteur_ + 3 * (compteur3_ - 1);
          letter = String.fromCharCode(letterChar);
          caseNumber = compteur2_ + 3 * compteur4_;
          nombre = (caseNumber+letter);
          if (currentCase == "7g"){
            return("1a");
          }
          if (currentCase == "8g"){
            return("2a");
          }
          if (currentCase == "9g"){
            return("3a")
          }
          if (currentCase == "7h"){
          return("1b");
          }
          if (currentCase == "8h"){
            return("2b");
          }
          if (currentCase == "9h"){
            return("3b");
          }
          if (currentCase == "7i"){
            return("1c");
          }
          if (currentCase == "8i"){
            return("2c");
          }
          if (currentCase == "9i"){
            return("3c");
          }
          if (compteur5_ == 1){
            return(nombre);
          }
          if (nombre == currentCase){
            compteur5_ = 1;
          }
        }
      }
    }
  }
}
function writePuzzle(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av,aw,ax,ay,az,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,bl,bm,bn,bo,bp,bq,br,bs,bt,bu,bv,bw,bx,by,bz,ca,cb,cc){
  compteur5 = -1;
  for (compteur = 0; compteur < 3; compteur++){
    for (compteur2 = 0; compteur2 < 3; compteur2++){
      for (compteur3 = 1; compteur3 < 4; compteur3++){
        for (compteur4 = 1; compteur4 < 4; compteur4++){
          compteur5 = compteur5 + 1;
          letter = String.fromCharCode(97);
          letterChar = letter.charCodeAt(0)+ compteur3 - 1 + 3 * compteur;
          letter = String.fromCharCode(letterChar);
          caseNumber = compteur4 + 3 * compteur2;
          nombre = $("#"+caseNumber+letter+"-n");
          if (arguments[compteur5] != 0){
            nombre.html(arguments[compteur5]);
            $("#"+caseNumber+letter).addClass("puzzle");
          }
        }
      }
    }
  }
}
function clearPuzzle(){
  erase();
  erasePen();
  for (compteur = 0; compteur < 3; compteur++){
    for (compteur2 = 0; compteur2 < 3; compteur2++){
      for (compteur3 = 1; compteur3 < 4; compteur3++){
        for (compteur4 = 1; compteur4 < 4; compteur4++){
          compteur5 = compteur5 + 1;
          letter = String.fromCharCode(97);
          letterChar = letter.charCodeAt(0)+ compteur3 - 1 + 3 * compteur;
          letter = String.fromCharCode(letterChar);
          caseNumber = compteur4 + 3 * compteur2;
          nombre = $("#"+caseNumber+letter+"-n");
          $("#"+caseNumber+letter).removeClass("puzzle");
          nombre.html("");
        }
      }
    }
  }
}