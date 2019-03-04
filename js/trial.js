//create several variables to store the hell you wanna store babe
var values1 = []
var values2 = []
var roundScore1 = 0;
var roundScore2 = 0;
var total1 = [];
var total2 = [];
var displayNumber1 = 0;
var displayNumber2 = 0;

function roll1() {
  displayNumber1= Math.floor(Math.random()*6+1);
  values1.push(displayNumber1);
  document.getElementById('die1').innerHTML= displayNumber1;
}
function disable1()  {
  document.getElementById('roll1').disabled=true;
 };
 // enabling same button
 function enable1() {
   document.getElementById('roll1').disabled=false;
 };


 function roll2() {
   displayNumber2= Math.floor(Math.random()*6+1);
   values2.push(displayNumber2);
   document.getElementById('die2').innerHTML= displayNumber2;
 }
 function disable2()  {
   document.getElementById('roll2').disabled=true;
  };
  // enabling same button
  function enable2() {
    document.getElementById('roll2').disabled=false;
  };

  //Begin Business Logic
  $(document).ready(function()  {
    $('#roll1').click(function()  {
      for(var index1=0; index1<values1.length; index1++)  {
        if (values1[index1]!=1) {
          roundScore1= roundScore1 + values1[index1]

        }

        else{
          values1.length=0;
          disable1();
          enable2();
        }
        $('.status1').text(roundScore1)
      }
    });
  });
