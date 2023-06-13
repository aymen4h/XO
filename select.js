function selectchangex(dvx){
    dvx.innerHTML="";
    dvx.setAttribute("onclick", "");
    dvx.style.background = "";
    var ay = document.getElementsByClassName("aymen");
    for (let i = 0; i < ay.length; i++) {
        if(ay[i].getAttribute("onclick") == "selectchangex(this)"){
            ay[i].setAttribute("onclick", "");
            ay[i].style.background = "";
        }
        
    }






    
    if(dvx.id=="s1"){
        if(document.getElementById("s2").innerHTML==""){
            document.getElementById("s2").style.background = "blue";
            document.getElementById("s2").setAttribute("onclick", "placehere(this)");
        }
        if(document.getElementById("s5").innerHTML==""){
            document.getElementById("s5").style.background = "blue";
            document.getElementById("s5").setAttribute("onclick", "placehere(this)");
        }
        if(document.getElementById("s4").innerHTML==""){
            document.getElementById("s4").style.background = "blue";
            document.getElementById("s4").setAttribute("onclick", "placehere(this)");
        }
    }
    else if(dvx.id=="s2"){
        if(document.getElementById("s1").innerHTML==""){
            document.getElementById("s1").style.background = "blue";
            document.getElementById("s1").setAttribute("onclick", "placehere(this)");
        }
        if(document.getElementById("s3").innerHTML==""){
            document.getElementById("s3").style.background = "blue";
            document.getElementById("s3").setAttribute("onclick", "placehere(this)");
        }
        if(document.getElementById("s5").innerHTML==""){
            document.getElementById("s5").style.background = "blue";
            document.getElementById("s5").setAttribute("onclick", "placehere(this)");
        }
    }
    else if(dvx.id=="s3"){
        if(document.getElementById("s2").innerHTML==""){
            document.getElementById("s2").style.background = "blue";
            document.getElementById("s2").setAttribute("onclick", "placehere(this)");
        }
        if(document.getElementById("s5").innerHTML==""){
            document.getElementById("s5").style.background = "blue";
            document.getElementById("s5").setAttribute("onclick", "placehere(this)");
        }
        if(document.getElementById("s6").innerHTML==""){
            document.getElementById("s6").style.background = "blue";
            document.getElementById("s6").setAttribute("onclick", "placehere(this)");
        }
    }
    else if(dvx.id=="s4"){
        if(document.getElementById("s1").innerHTML==""){
            document.getElementById("s1").style.background = "blue";
            document.getElementById("s1").setAttribute("onclick", "placehere(this)");
        }
        if(document.getElementById("s7").innerHTML==""){
            document.getElementById("s7").style.background = "blue";
            document.getElementById("s7").setAttribute("onclick", "placehere(this)");
        }
        if(document.getElementById("s5").innerHTML==""){
            document.getElementById("s5").style.background = "blue";
            document.getElementById("s5").setAttribute("onclick", "placehere(this)");
        }
    }
    else if(dvx.id=="s5"){
        if(document.getElementById("s1").innerHTML==""){
            document.getElementById("s1").style.background = "blue";
            document.getElementById("s1").setAttribute("onclick", "placehere(this)");
        }
        if(document.getElementById("s2").innerHTML==""){
            document.getElementById("s2").style.background = "blue";
            document.getElementById("s2").setAttribute("onclick", "placehere(this)");
        }
        if(document.getElementById("s3").innerHTML==""){
            document.getElementById("s3").style.background = "blue";
            document.getElementById("s3").setAttribute("onclick", "placehere(this)");
        }
        if(document.getElementById("s4").innerHTML==""){
            document.getElementById("s4").style.background = "blue";
            document.getElementById("s4").setAttribute("onclick", "placehere(this)");
        }
        if(document.getElementById("s6").innerHTML==""){
            document.getElementById("s6").style.background = "blue";
            document.getElementById("s6").setAttribute("onclick", "placehere(this)");
        }
        if(document.getElementById("s7").innerHTML==""){
            document.getElementById("s7").style.background = "blue";
            document.getElementById("s7").setAttribute("onclick", "placehere(this)");
        }
        if(document.getElementById("s8").innerHTML==""){
            document.getElementById("s8").style.background = "blue";
            document.getElementById("s8").setAttribute("onclick", "placehere(this)");
        }
        if(document.getElementById("s9").innerHTML==""){
            document.getElementById("s9").style.background = "blue";
            document.getElementById("s9").setAttribute("onclick", "placehere(this)");
        }
    }
    else if(dvx.id=="s6"){
        if(document.getElementById("s3").innerHTML==""){
            document.getElementById("s3").style.background = "blue";
            document.getElementById("s3").setAttribute("onclick", "placehere(this)");
        }
        if(document.getElementById("s5").innerHTML==""){
            document.getElementById("s5").style.background = "blue";
            document.getElementById("s5").setAttribute("onclick", "placehere(this)");
        }
        if(document.getElementById("s9").innerHTML==""){
            document.getElementById("s9").style.background = "blue";
            document.getElementById("s9").setAttribute("onclick", "placehere(this)");
        }
    }
    else if(dvx.id=="s7"){
        if(document.getElementById("s4").innerHTML==""){
            document.getElementById("s4").style.background = "blue";
            document.getElementById("s4").setAttribute("onclick", "placehere(this)");
        }
        if(document.getElementById("s8").innerHTML==""){
            document.getElementById("s8").style.background = "blue";
            document.getElementById("s8").setAttribute("onclick", "placehere(this)");
        }
        if(document.getElementById("s5").innerHTML==""){
            document.getElementById("s5").style.background = "blue";
            document.getElementById("s5").setAttribute("onclick", "placehere(this)");
        }
    }
    else if(dvx.id=="s8"){
        if(document.getElementById("s7").innerHTML==""){
            document.getElementById("s7").style.background = "blue";
            document.getElementById("s7").setAttribute("onclick", "placehere(this)");
        }
        if(document.getElementById("s9").innerHTML==""){
            document.getElementById("s9").style.background = "blue";
            document.getElementById("s9").setAttribute("onclick", "placehere(this)");
        }
        if(document.getElementById("s5").innerHTML==""){
            document.getElementById("s5").style.background = "blue";
            document.getElementById("s5").setAttribute("onclick", "placehere(this)");
        }
    }
    else if(dvx.id=="s9"){
        if(document.getElementById("s6").innerHTML==""){
            document.getElementById("s6").style.background = "blue";
            document.getElementById("s6").setAttribute("onclick", "placehere(this)");
        }
        if(document.getElementById("s8").innerHTML==""){
            document.getElementById("s8").style.background = "blue";
            document.getElementById("s8").setAttribute("onclick", "placehere(this)");
        }
        if(document.getElementById("s5").innerHTML==""){
            document.getElementById("s5").style.background = "blue";
            document.getElementById("s5").setAttribute("onclick", "placehere(this)");
        }
    }
        
    
}













function selectchangeo(dvo){
    dvo.innerHTML="";
    dvo.setAttribute("onclick", "");
    dvo.style.background = "";
    var ay = document.getElementsByClassName("aymen");
    for (let i = 0; i < ay.length; i++) {
        if(ay[i].getAttribute("onclick") == "selectchangeo(this)"){
            ay[i].setAttribute("onclick", "");
            ay[i].style.background = "";
        }
        
    }





    if(dvo.id=="s1"){
        if(document.getElementById("s2").innerHTML==""){
            document.getElementById("s2").style.background = "blue";
            document.getElementById("s2").setAttribute("onclick", "placehere(this)");
        }
        if(document.getElementById("s5").innerHTML==""){
            document.getElementById("s5").style.background = "blue";
            document.getElementById("s5").setAttribute("onclick", "placehere(this)");
        }
        if(document.getElementById("s4").innerHTML==""){
            document.getElementById("s4").style.background = "blue";
            document.getElementById("s4").setAttribute("onclick", "placehere(this)");
        }
    }
    else if(dvo.id=="s2"){
        if(document.getElementById("s1").innerHTML==""){
            document.getElementById("s1").style.background = "blue";
            document.getElementById("s1").setAttribute("onclick", "placehere(this)");
        }
        if(document.getElementById("s3").innerHTML==""){
            document.getElementById("s3").style.background = "blue";
            document.getElementById("s3").setAttribute("onclick", "placehere(this)");
        }
        if(document.getElementById("s5").innerHTML==""){
            document.getElementById("s5").style.background = "blue";
            document.getElementById("s5").setAttribute("onclick", "placehere(this)");
        }
    }
    else if(dvo.id=="s3"){
        if(document.getElementById("s2").innerHTML==""){
            document.getElementById("s2").style.background = "blue";
            document.getElementById("s2").setAttribute("onclick", "placehere(this)");
        }
        if(document.getElementById("s5").innerHTML==""){
            document.getElementById("s5").style.background = "blue";
            document.getElementById("s5").setAttribute("onclick", "placehere(this)");
        }
        if(document.getElementById("s6").innerHTML==""){
            document.getElementById("s6").style.background = "blue";
            document.getElementById("s6").setAttribute("onclick", "placehere(this)");
        }
    }
    else if(dvo.id=="s4"){
        if(document.getElementById("s1").innerHTML==""){
            document.getElementById("s1").style.background = "blue";
            document.getElementById("s1").setAttribute("onclick", "placehere(this)");
        }
        if(document.getElementById("s7").innerHTML==""){
            document.getElementById("s7").style.background = "blue";
            document.getElementById("s7").setAttribute("onclick", "placehere(this)");
        }
        if(document.getElementById("s5").innerHTML==""){
            document.getElementById("s5").style.background = "blue";
            document.getElementById("s5").setAttribute("onclick", "placehere(this)");
        }
    }
    else if(dvo.id=="s5"){
        if(document.getElementById("s1").innerHTML==""){
            document.getElementById("s1").style.background = "blue";
            document.getElementById("s1").setAttribute("onclick", "placehere(this)");
        }
        if(document.getElementById("s2").innerHTML==""){
            document.getElementById("s2").style.background = "blue";
            document.getElementById("s2").setAttribute("onclick", "placehere(this)");
        }
        if(document.getElementById("s3").innerHTML==""){
            document.getElementById("s3").style.background = "blue";
            document.getElementById("s3").setAttribute("onclick", "placehere(this)");
        }
        if(document.getElementById("s4").innerHTML==""){
            document.getElementById("s4").style.background = "blue";
            document.getElementById("s4").setAttribute("onclick", "placehere(this)");
        }
        if(document.getElementById("s6").innerHTML==""){
            document.getElementById("s6").style.background = "blue";
            document.getElementById("s6").setAttribute("onclick", "placehere(this)");
        }
        if(document.getElementById("s7").innerHTML==""){
            document.getElementById("s7").style.background = "blue";
            document.getElementById("s7").setAttribute("onclick", "placehere(this)");
        }
        if(document.getElementById("s8").innerHTML==""){
            document.getElementById("s8").style.background = "blue";
            document.getElementById("s8").setAttribute("onclick", "placehere(this)");
        }
        if(document.getElementById("s9").innerHTML==""){
            document.getElementById("s9").style.background = "blue";
            document.getElementById("s9").setAttribute("onclick", "placehere(this)");
        }
    }
    else if(dvo.id=="s6"){
        if(document.getElementById("s3").innerHTML==""){
            document.getElementById("s3").style.background = "blue";
            document.getElementById("s3").setAttribute("onclick", "placehere(this)");
        }
        if(document.getElementById("s5").innerHTML==""){
            document.getElementById("s5").style.background = "blue";
            document.getElementById("s5").setAttribute("onclick", "placehere(this)");
        }
        if(document.getElementById("s9").innerHTML==""){
            document.getElementById("s9").style.background = "blue";
            document.getElementById("s9").setAttribute("onclick", "placehere(this)");
        }
    }
    else if(dvo.id=="s7"){
        if(document.getElementById("s4").innerHTML==""){
            document.getElementById("s4").style.background = "blue";
            document.getElementById("s4").setAttribute("onclick", "placehere(this)");
        }
        if(document.getElementById("s8").innerHTML==""){
            document.getElementById("s8").style.background = "blue";
            document.getElementById("s8").setAttribute("onclick", "placehere(this)");
        }
        if(document.getElementById("s5").innerHTML==""){
            document.getElementById("s5").style.background = "blue";
            document.getElementById("s5").setAttribute("onclick", "placehere(this)");
        }
    }
    else if(dvo.id=="s8"){
        if(document.getElementById("s7").innerHTML==""){
            document.getElementById("s7").style.background = "blue";
            document.getElementById("s7").setAttribute("onclick", "placehere(this)");
        }
        if(document.getElementById("s9").innerHTML==""){
            document.getElementById("s9").style.background = "blue";
            document.getElementById("s9").setAttribute("onclick", "placehere(this)");
        }
        if(document.getElementById("s5").innerHTML==""){
            document.getElementById("s5").style.background = "blue";
            document.getElementById("s5").setAttribute("onclick", "placehere(this)");
        }
    }
    else if(dvo.id=="s9"){
        if(document.getElementById("s6").innerHTML==""){
            document.getElementById("s6").style.background = "blue";
            document.getElementById("s6").setAttribute("onclick", "placehere(this)");
        }
        if(document.getElementById("s8").innerHTML==""){
            document.getElementById("s8").style.background = "blue";
            document.getElementById("s8").setAttribute("onclick", "placehere(this)");
        }
        if(document.getElementById("s5").innerHTML==""){
            document.getElementById("s5").style.background = "blue";
            document.getElementById("s5").setAttribute("onclick", "placehere(this)");
        }
    }
}