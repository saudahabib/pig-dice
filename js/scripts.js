// //PLAYER 2
// var total2=0
// var values2=[];
//
// //what shows on dice
// function roll2() {
//   values2.push(document.getElementById('die2').innerHTML= Math.floor(Math.random()*6+1));
// }
// //disabling a button
// function disable2()  {
// document.getElementById('roll2').disabled=true;
// };
// // enabling same button
// function enable2() {
//   document.getElementById('roll2').disabled=false;
// }
//
// //calculating cumulative score 2
// $(document).ready(function()  {
//   $('#roll2').click(function()  {
//     var total2=0;
//     for(var y=0; y<values2.length; y++) {
//       if(values2[y]!=1)  {
//         total2=total2+values[y]
//       }
//       else{
//         values2.length=0
//         disable2();
//         enable1();
//       }
//     };
//
//     alert('Your current score is'+' '+ total2)
//   });
// });

//PLAYER 1
var total=0
var values=[];

//what shows on dice
function roll1() {
  values.push(document.getElementById('die1').innerHTML= parseInt(Math.random()*6+1));
}
//disabling a button
function disable1()  {
document.getElementById('roll1').disabled=true;
};
// enabling same button
function enable1() {
  document.getElementById('roll1').disabled=false;
}

//calculating cumulative score 1
$(document).ready(function(){
  $("#roll1").click(function(){
    var total=0;
    for(var z=0;z<values.length;z++){
      if(values[z]!=1){
         total=total+values[z];
      }
      else {
        values.length=0;
        disable1();
        enable2();
      }
    };

    alert('Your current score is'+' '+total)
  });

});
