let total=0;

$('input[type=checkbox]').click(function() {
    if($(this).is(':checked')) {
     console.log("seleccionado");
      total=total+200;
      if(total==600){console.log(total/2);
        document.getElementById('desc').innerHTML = "-50%";
        document.getElementById('total').innerHTML = total/2;}
      else{console.log(total);
        document.getElementById('desc').innerHTML = " ";
        document.getElementById('total').innerHTML = total;}
      
    } else {
      console.log("disponible");
      total= total-200;
     if(total==600){console.log(total/2);
      document.getElementById('desc').innerHTML = "-50%";
      document.getElementById('total').innerHTML = total/2;}
      else{console.log(total);
        document.getElementById('desc').innerHTML = " ";
        document.getElementById('total').innerHTML = total;}
    }
});

//modal
let modal = document.getElementById('myModal');
let btn = document.getElementById("myBtn");
let span = document.getElementsByClassName("close")[0];
 
btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


