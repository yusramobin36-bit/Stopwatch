let secs = 0
let timer = null

function start () {
  if (timer!=null){
    return;
  }
 timer = setInterval(function(){
   secs++;
   let hrs = Math.floor(secs/3600);
   let mins = Math.floor((secs%3600)/60);
   let sec = Math.floor(secs % 60)
   
   document.getElementById("display").innerText=
   String(hrs).padStart(2,"0") + ":" +
   String(mins).padStart(2,"0") +":" +
   String(secs).padStart(2,"0");
 },1000); 
}

function pause (){
  clearInterval(timer);
  timer=null;
}

function restart(){
  clearInterval(timer);
  timer =null;
  secs =0;
  document.getElementById('display').innerText ='00:00:00';
}
