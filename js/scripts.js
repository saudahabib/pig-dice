var total=0
var values=[];

function roll1() {
  values.push(document.getElementById('die1').innerHTML= parseInt(Math.random()*6+1));
  alert(values)
}

$(document).ready(function(){
  $("#rol").click(function(){
    var total=0;
    for(z=0;z<values.length;z++){
      if(values[z]!=1){
         total=total+values[z];
      }
      else {
        values.length=0;
      }

    }
    alert(nax)
  })

})


//calculate total score here


function roll2() {
  document.getElementById('die2').innerHTML= parseInt(Math.random()*6+1);
}
