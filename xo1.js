
function superreur1(){
    let ay = document.getElementsByClassName("aymen");
    for (let i = 0; i < ay.length; i++) {
        if(ay[i].innerHTML== "<img src=\"erreur.jpg\" alt=\"g\" height=\"120\" width=\"120\">"){
            ay[i].innerHTML="";
        }
        ay[i].setAttribute("onclick", "ajoutx(this)");
        
    }
    let mo = document.getElementsByClassName("mo7");
    for (let i = 0; i < mo.length; i++) {
        mo[i].setAttribute("onclick", "ajoutx(this)");
    }

}
function ajoutx(divv){
    
    if(divv.className == "aymen" && document.getElementsByClassName("mo7").length<=2){
        if(divv.id == "s6" && (document.getElementById("s5").innerHTML == "" || document.getElementById("s4").innerHTML == "" ) && (document.getElementById("s3").innerHTML == "" || document.getElementById("s9").innerHTML == "") ){
            divv.innerHTML = "X";
            divv.className = "mo7";
        }

        else if(divv.id == "s4" && (document.getElementById("s5").innerHTML == "" || document.getElementById("s6").innerHTML == "" ) && (document.getElementById("s1").innerHTML == "" || document.getElementById("s7").innerHTML == "") ){
            divv.innerHTML = "X";
            divv.className = "mo7";
        }

        else if(divv.id == "s2" && (document.getElementById("s1").innerHTML == "" || document.getElementById("s3").innerHTML == "" ) && (document.getElementById("s5").innerHTML == "" || document.getElementById("s8").innerHTML == "") ){
            divv.innerHTML = "X";
            divv.className = "mo7";
        }

        else if(divv.id == "s8" && (document.getElementById("s5").innerHTML == "" || document.getElementById("s2").innerHTML == "" ) && (document.getElementById("s7").innerHTML == "" || document.getElementById("s9").innerHTML == "") ){
            divv.innerHTML = "X";
            divv.className = "mo7";
        }

        else if(divv.id == "s5" && (document.getElementById("s2").innerHTML == "" || document.getElementById("s8").innerHTML == "" ) && (document.getElementById("s4").innerHTML == "" || document.getElementById("s6").innerHTML == "") && (document.getElementById("s1").innerHTML == "" || document.getElementById("s9").innerHTML == "") && (document.getElementById("s3").innerHTML == "" || document.getElementById("s7").innerHTML == "") ){
            divv.innerHTML = "X";
            divv.className = "mo7";
        }

        else if(divv.id == "s1" && (document.getElementById("s2").innerHTML == "" || document.getElementById("s3").innerHTML == "" ) && (document.getElementById("s7").innerHTML == "" || document.getElementById("s4").innerHTML == "") && (document.getElementById("s5").innerHTML == "" || document.getElementById("s9").innerHTML == "") ){
            divv.innerHTML = "X";
            divv.className = "mo7";
        }

        else if(divv.id == "s3" && (document.getElementById("s2").innerHTML == "" || document.getElementById("s1").innerHTML == "" ) && (document.getElementById("s6").innerHTML == "" || document.getElementById("s9").innerHTML == "") && (document.getElementById("s5").innerHTML == "" || document.getElementById("s7").innerHTML == "") ){
            divv.innerHTML = "X";
            divv.className = "mo7";
        }

        else if(divv.id == "s7" && (document.getElementById("s4").innerHTML == "" || document.getElementById("s1").innerHTML == "" ) && (document.getElementById("s5").innerHTML == "" || document.getElementById("s3").innerHTML == "") && (document.getElementById("s8").innerHTML == "" || document.getElementById("s9").innerHTML == "") ){
            divv.innerHTML = "X";
            divv.className = "mo7";
        }

        else if(divv.id == "s9" && (document.getElementById("s5").innerHTML == "" || document.getElementById("s1").innerHTML == "" ) && (document.getElementById("s7").innerHTML == "" || document.getElementById("s8").innerHTML == "") && (document.getElementById("s6").innerHTML == "" || document.getElementById("s3").innerHTML == "") ){
            divv.innerHTML = "X";
            divv.className = "mo7";
        }
        else{
            var imm = document.createElement("img");
            imm.src="erreur.jpg";
            imm.alt="g";
            imm.height="120";
            imm.width="120";
            divv.appendChild(imm);
            var ayy = document.getElementsByClassName("aymen");
            for (let i = 0; i < ayy.length; i++) {
                ayy[i].setAttribute("onclick", "");
            }
            var moo = document.getElementsByClassName("mo7");
            for (let i = 0; i < moo.length; i++) {
                moo[i].setAttribute("onclick", "");
            }
            setTimeout("superreur1()", 700);
        }

    }
    if(document.getElementsByClassName("mo7").length==3){
        var ell = document.getElementsByClassName("aymen");
        
        for (var i = 0; i < ell.length; i++) {
            ell[i].className = "mo7";                       
        }
        for (var i = 0; i < ell.length; i++) {
            ell[i].className = "mo7";                       
        }
        for (var i = 0; i < ell.length; i++) {
            ell[i].className = "mo7";                       
        }
        console.log(ell);
        ell = document.getElementsByClassName("mo7");
        for (var i = 0; i < ell.length; i++) {   
            ell[i].setAttribute("onclick", "ajouty(this)");
        }
        
    }
}