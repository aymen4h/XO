function commencer(){
    document.getElementById("btn").remove();
    let bt = document.createElement("button")
        bt.id ="btn";
        bt.innerHTML="rejouer";
        bt.setAttribute("onclick", "rejouer()");
        let bad = document.getElementsByTagName("body");
        for (let i = 0; i < bad.length; i++) {
            bad[i].appendChild(bt);
            
        }
        let ay = document.getElementsByClassName("aymen");
        for (let i = 0; i < ay.length; i++) {
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