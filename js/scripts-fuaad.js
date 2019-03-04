//UI LOGIC BEGINS HERE
 var total = 0;
 var total2 = 0;
 var values2 = [];
 var array1 = [];
 var array2 = [];
 var totalScore1 = 0;
 var totalScore2 = 0;
 var number1 = 0;
 var number2 = 0;

 //what shows on dice
 function roll2(){
   number2 = Math.floor(Math.random()*6+1);
   values2.push(number2);
   document.getElementById('die2').innerHTML= number2;
 }
 //disabling a button
 function disable2()  {
   document.getElementById('roll2').disabled=true;
 };
 // enabling same button
 function enable2() {
   document.getElementById('roll2').disabled=false;
 }
 var total=0
 var values=[];

 //what shows on dice
 function roll1() {
   number1 = Math.floor(Math.random()*6+1);
   values.push(number1);
   document.getElementById('die1').innerHTML= number1;
 }
 //disabling a button
 function disable1()  {
 document.getElementById('roll1').disabled=true;
 };
 // enabling same button
 function enable1() {
   document.getElementById('roll1').disabled=false;
 }

//BUSINESS LOGIC BEGINS HERE
 //calculating cumulative score 2
 $(document).ready(function()  {
   $('#roll2').click(function()  {
     if(number2 != 1)  {
       values2.forEach(function(value2){
         total2 = total2 + value2;
       })
     }
     else{
       values2.length=0
       disable2();
       enable1();
       }
     $('.status2').text(values2)
   });
   $('#stop2').click(function(){
     array2.push(total2);
     array2.forEach(function(item2){
       totalScore2 = totalScore2 + item2;
     })
     $('#fuaad2').text(array2);
   })
 });
//calculating cumulative score 1
$(document).ready(function(){
  $("#roll1").click(function(){
    if(number1 != 1)  {
      values.forEach(function(value1){
        total = total + value1;
      })
    }
      else {
        values.length=0;
        disable1();
        enable2();
      }
    $('.status1').text(values);
  });
  $('#stop1').click(function(){
    array1.push(total);
    array1.forEach(function(item1){
      totalScore1 = totalScore1 + item1;
    })
    $('#fuaad1').text(array1);
  });
});

if(values2===100) {
  alert("Player 2 wins the game")
}
else if(values===100) {
  alert("Player 1 wins the game")
}
