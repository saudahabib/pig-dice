//UI LOGIC BEGINS HERE
 var total1= 0;
 var total2=0;
 var values1=[];
 var values2=[];
 var heldTotal1=[];
 var heldTotal2= [];
 var finalScore1= 0;
 var finalScore2= 0;
 function Player(username)  {
   this.username= username;
 };

 //what shows on dice
 function roll2(){
   values2.push(document.getElementById('die2').innerHTML= Math.floor(Math.random()*6+1));
 };
 //disabling a button
 function disable2()  {
   document.getElementById('roll2').disabled=true;
 };
 // enabling same button
 function enable2() {
   document.getElementById('roll2').disabled=false;
 };
 var total=0
 var values1=[];

 //what shows on dice
 function roll1() {
   values1.push(document.getElementById('die1').innerHTML= parseInt(Math.random()*6+1));
 };
 //disabling a button
 function disable1()  {
   document.getElementById('roll1').disabled=true;
 };
 // enabling same button
 function enable1() {
   document.getElementById('roll1').disabled=false;
 }

//BUSINESS LOGIC BEGINS HERE
//Calculating cumulative score for player 2
$(document).ready(function(){
  $('form.sauda').submit(function(event)  {
      var player1 = $("#player1").val();
      var player2 = $("#player2").val();

      var p1 = new Player(player1);
      var p2 = new Player(player2);
      $("#play1").text(p1.username);
      $("#play2").text(p2.username);
      event.preventDefault();
      $('#main').show();
      $('.homepage').hide();
  });

  $("#roll2").click(function(){
    total2=0;
    for(var z=0;z<values2.length;z++){
      if(values2[z]!=1){
         total2=total2+values2[z];
      }
      else {
        values2.length=0;
        disable2();
        enable1();
        alert('Oops! You hit a 1. Pass to the next player.')
      }
    };
    $('.status2').text(values2);
    $('#fuaad2').text(total2)

  });
 $('#stop2').click(function() {
   heldTotal2.push(total2)
   $('#finale2').text(heldTotal2);
function addScores2()  {

  finalScore2= 0;
  for(var l=0; l<heldTotal2.length; l++)  {
    finalScore2 += heldTotal2[l];

  };
};
addScores2();

   $('#lit2').text(finalScore2)

   values2= [];

   if(finalScore2>=100) {
    $('#gameResults').show();
    $('#main').hide()

   }
 })
});

//calculating cumulative score for player 1
$(document).ready(function(){
  $("#roll1").click(function(){
    total1=0;
    for(var z=0;z<values1.length;z++){
      if(values1[z]!=1){
         total1=total1+values1[z];
      }
      else {
        values1.length=0;
        disable1();
        enable2();
        alert("Oops! You hit a 1. Pass to next player.")
      }
    };
    $('.status1').text(values1);
    $('#fuaad1').text(total1)

  });
 $('#stop1').click(function() {
   heldTotal1.push(total1)
   $('#finale1').text(heldTotal1);
function addScores1()  {
  finalScore1= 0;
  for(var l=0; l<heldTotal1.length; l++)  {
    finalScore1 += heldTotal1[l];
  };
};
addScores1();

   $('#lit1').text(finalScore1)

   values1= [];

   if(finalScore1>=100) {
    $('#gameResults').show();
    $('#main').hide()

  };
 });
});
