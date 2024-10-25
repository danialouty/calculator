function sum(){
    let first=parseFloat(document.getElementById("firstNum").value);
    let second=parseFloat(document.getElementById("secondNum").value);
    let result= document.getElementById("result").innerHTML;
    document.getElementById("result").innerHTML=first+second;
}
function sub(){
    let first=parseFloat(document.getElementById("firstsub").value);
    let second=parseFloat(document.getElementById("secondsub").value);
    let result= document.getElementById("result2").innerHTML;
    document.getElementById("result2").innerHTML=first-second;
}
function mult(){
    let first=parseFloat(document.getElementById("firstmult").value);
    let second=parseFloat(document.getElementById("secondmult").value);
    let result= document.getElementById("result3").innerHTML;
    document.getElementById("result3").innerHTML=first*second;
}
function div(){
    let first=parseFloat(document.getElementById("firstdiv").value);
    let second=parseFloat(document.getElementById("seconddiv").value);
    let result= document.getElementById("result4").innerHTML;
    document.getElementById("result4").innerHTML=first/second;
    if( second==0){
        alert("second number should not be Zero!!");
    }
}
function mod(){
    let first=parseFloat(document.getElementById("firstmod").value);
    let second=parseFloat(document.getElementById("secondmod").value);
    let result= document.getElementById("result5").innerHTML;
    document.getElementById("result5").innerHTML=first%second;
}