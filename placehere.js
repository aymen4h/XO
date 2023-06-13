function gagnex(){
    if(document.getElementById("s1").innerHTML=="X" && document.getElementById("s2").innerHTML=="X" && document.getElementById("s3").innerHTML=="X") {
        return true;
    }
    else if(document.getElementById("s4").innerHTML=="X" && document.getElementById("s5").innerHTML=="X" && document.getElementById("s6").innerHTML=="X") {
        return true;
    }
    else if(document.getElementById("s7").innerHTML=="X" && document.getElementById("s8").innerHTML=="X" && document.getElementById("s9").innerHTML=="X") {
        return true;
    }
    else if(document.getElementById("s4").innerHTML=="X" && document.getElementById("s1").innerHTML=="X" && document.getElementById("s7").innerHTML=="X") {
        return true;
    }
    else if(document.getElementById("s2").innerHTML=="X" && document.getElementById("s5").innerHTML=="X" && document.getElementById("s8").innerHTML=="X") {
        return true;
    }
    else if(document.getElementById("s3").innerHTML=="X" && document.getElementById("s6").innerHTML=="X" && document.getElementById("s9").innerHTML=="X") {
        return true;
    }
    else if(document.getElementById("s1").innerHTML=="X" && document.getElementById("s5").innerHTML=="X" && document.getElementById("s9").innerHTML=="X") {
        return true;
    }
    else if(document.getElementById("s3").innerHTML=="X" && document.getElementById("s5").innerHTML=="X" && document.getElementById("s7").innerHTML=="X") {
        return true;
    }
}
function gagneo(){
    if(document.getElementById("s1").innerHTML=="O" && document.getElementById("s2").innerHTML=="O" && document.getElementById("s3").innerHTML=="O") {
        return true;
    }
    else if(document.getElementById("s4").innerHTML=="O" && document.getElementById("s5").innerHTML=="O" && document.getElementById("s6").innerHTML=="O") {
        return true;
    }
    else if(document.getElementById("s7").innerHTML=="O" && document.getElementById("s8").innerHTML=="O" && document.getElementById("s9").innerHTML=="O") {
        return true;
    }
    else if(document.getElementById("s4").innerHTML=="O" && document.getElementById("s1").innerHTML=="O" && document.getElementById("s7").innerHTML=="O") {
        return true;
    }
    else if(document.getElementById("s2").innerHTML=="O" && document.getElementById("s5").innerHTML=="O" && document.getElementById("s8").innerHTML=="O") {
        return true;
    }
    else if(document.getElementById("s3").innerHTML=="O" && document.getElementById("s6").innerHTML=="O" && document.getElementById("s9").innerHTML=="O") {
        return true;
    }
    else if(document.getElementById("s1").innerHTML=="O" && document.getElementById("s5").innerHTML=="O" && document.getElementById("s9").innerHTML=="O") {
        return true;
    }
    else if(document.getElementById("s3").innerHTML=="O" && document.getElementById("s5").innerHTML=="O" && document.getElementById("s7").innerHTML=="O") {
        return true;
    }
}













function placehere(dvpl){
    let ay = document.getElementsByClassName("aymen");
    if(dvpl.getAttribute("title")=="X"){
        dvpl.innerHTML="X";
        if(gagnex()){
            
            for (let i = 0; i < ay.length; i++) {
                ay[i].setAttribute("onclick","");
                ay[i].style.background=""
                if(ay[i].innerHTML=="X"){
                    ay[i].style.background="red";
                }
                
            }
        }

        else{
            for (let i = 0; i < ay.length; i++) {
                if(ay[i].getAttribute("onclick") == "placehere(this)"){
                    ay[i].setAttribute("onclick", "");
                    ay[i].style.background = "";
                }
                ay[i].setAttribute("title", "O");




                if(ay[i].innerHTML=="O" && ay[i].id=="s8" && (document.getElementById("s5").innerHTML=="" || document.getElementById("s7").innerHTML=="" || document.getElementById("s9").innerHTML=="" )){
                    ay[i].style.background = "green";
                    ay[i].setAttribute("onclick", "selectchangeo(this)");
                }
                else if(ay[i].innerHTML=="O" && ay[i].id=="s1" && (document.getElementById("s2").innerHTML=="" || document.getElementById("s5").innerHTML=="" || document.getElementById("s4").innerHTML=="" )){
                    ay[i].style.background = "green";
                    ay[i].setAttribute("onclick", "selectchangeo(this)");
                }
                else if(ay[i].innerHTML=="O" && ay[i].id=="s2" && (document.getElementById("s1").innerHTML=="" || document.getElementById("s3").innerHTML=="" || document.getElementById("s5").innerHTML=="" )){
                    ay[i].style.background = "green";
                    ay[i].setAttribute("onclick", "selectchangeo(this)");
                }
                else if(ay[i].innerHTML=="O" && ay[i].id=="s3" && (document.getElementById("s2").innerHTML=="" || document.getElementById("s5").innerHTML=="" || document.getElementById("s6").innerHTML=="" )){
                    ay[i].style.background = "green";
                    ay[i].setAttribute("onclick", "selectchangeo(this)");
                }
                else if(ay[i].innerHTML=="O" && ay[i].id=="s4" && (document.getElementById("s1").innerHTML=="" || document.getElementById("s5").innerHTML=="" || document.getElementById("s7").innerHTML=="" )){
                    ay[i].style.background = "green";
                    ay[i].setAttribute("onclick", "selectchangeo(this)");
                }
                else if(ay[i].innerHTML=="O" && ay[i].id=="s6" && (document.getElementById("s3").innerHTML=="" || document.getElementById("s5").innerHTML=="" || document.getElementById("s9").innerHTML=="" )){
                    ay[i].style.background = "green";
                    ay[i].setAttribute("onclick", "selectchangeo(this)");
                }
                else if(ay[i].innerHTML=="O" && ay[i].id=="s7" && (document.getElementById("s4").innerHTML=="" || document.getElementById("s5").innerHTML=="" || document.getElementById("s8").innerHTML=="" )){
                    ay[i].style.background = "green";
                    ay[i].setAttribute("onclick", "selectchangeo(this)");
                }
                
                else if(ay[i].innerHTML=="O" && ay[i].id=="s9" && (document.getElementById("s5").innerHTML=="" || document.getElementById("s6").innerHTML=="" || document.getElementById("s8").innerHTML=="" )){
                    ay[i].style.background = "green";
                    ay[i].setAttribute("onclick", "selectchangeo(this)");
                }
                else if(ay[i].innerHTML=="O" && ay[i].id=="s5"){
                    ay[i].style.background = "green";
                    ay[i].setAttribute("onclick", "selectchangeo(this)");
                }
                
            }
        }
    }
    else if(dvpl.getAttribute("title")=="O"){
        dvpl.innerHTML="O";
        if(gagneo()){
            for (let i = 0; i < ay.length; i++) {
                ay[i].setAttribute("onclick","");
                ay[i].style.background=""
                if(ay[i].innerHTML=="O"){
                    ay[i].style.background="red";
                }
                
            }
        }
        else{
            for (let i = 0; i < ay.length; i++) {
                if(ay[i].getAttribute("onclick") == "placehere(this)"){
                    ay[i].setAttribute("onclick", "");
                    ay[i].style.background = "";
                }
                ay[i].setAttribute("title", "X");


                if(ay[i].innerHTML=="X" && ay[i].id=="s8" && (document.getElementById("s5").innerHTML=="" || document.getElementById("s7").innerHTML=="" || document.getElementById("s9").innerHTML=="" )){
                    ay[i].style.background = "green";
                    ay[i].setAttribute("onclick", "selectchangex(this)");
                }
                else if(ay[i].innerHTML=="X" && ay[i].id=="s1" && (document.getElementById("s2").innerHTML=="" || document.getElementById("s5").innerHTML=="" || document.getElementById("s4").innerHTML=="" )){
                    ay[i].style.background = "green";
                    ay[i].setAttribute("onclick", "selectchangex(this)");
                }
                else if(ay[i].innerHTML=="X" && ay[i].id=="s2" && (document.getElementById("s1").innerHTML=="" || document.getElementById("s3").innerHTML=="" || document.getElementById("s5").innerHTML=="" )){
                    ay[i].style.background = "green";
                    ay[i].setAttribute("onclick", "selectchangex(this)");
                }
                else if(ay[i].innerHTML=="X" && ay[i].id=="s3" && (document.getElementById("s2").innerHTML=="" || document.getElementById("s5").innerHTML=="" || document.getElementById("s6").innerHTML=="" )){
                    ay[i].style.background = "green";
                    ay[i].setAttribute("onclick", "selectchangex(this)");
                }
                else if(ay[i].innerHTML=="X" && ay[i].id=="s4" && (document.getElementById("s1").innerHTML=="" || document.getElementById("s5").innerHTML=="" || document.getElementById("s7").innerHTML=="" )){
                    ay[i].style.background = "green";
                    ay[i].setAttribute("onclick", "selectchangex(this)");
                }
                else if(ay[i].innerHTML=="X" && ay[i].id=="s6" && (document.getElementById("s3").innerHTML=="" || document.getElementById("s5").innerHTML=="" || document.getElementById("s9").innerHTML=="" )){
                    ay[i].style.background = "green";
                    ay[i].setAttribute("onclick", "selectchangex(this)");
                }
                else if(ay[i].innerHTML=="X" && ay[i].id=="s7" && (document.getElementById("s4").innerHTML=="" || document.getElementById("s5").innerHTML=="" || document.getElementById("s8").innerHTML=="" )){
                    ay[i].style.background = "green";
                    ay[i].setAttribute("onclick", "selectchangex(this)");
                }
                else if(ay[i].innerHTML=="X" && ay[i].id=="s9" && (document.getElementById("s5").innerHTML=="" || document.getElementById("s6").innerHTML=="" || document.getElementById("s8").innerHTML=="" )){
                    ay[i].style.background = "green";
                    ay[i].setAttribute("onclick", "selectchangex(this)");
                }
                else if(ay[i].innerHTML=="X" && ay[i].id=="s5"){
                    ay[i].style.background = "green";
                    ay[i].setAttribute("onclick", "selectchangex(this)");
                }
            }
        }
    }
}