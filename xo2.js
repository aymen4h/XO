function superreur3(){
    let mo = document.getElementsByClassName("mo7");
    for (let i = 0; i < mo.length; i++) {
        if(mo[i].innerHTML== "<img src=\"erreur.jpg\" alt=\"g\" height=\"120\" width=\"120\">"){
            mo[i].innerHTML="";
        }
        mo[i].setAttribute("onclick", "ajouty(this)");
        
    }
    let ay = document.getElementsByClassName("aymen");
    for (let i = 0; i < ay.length; i++) {
        ay[i].setAttribute("onclick", "ajouty(this)");
    }
}
function superreur2(){
    let mo = document.getElementsByClassName("mo7");
    for (let i = 0; i < mo.length; i++) {
        if(mo[i].innerHTML== "<img src=\"erreur.jpg\" alt=\"g\" height=\"120\" width=\"120\">"){
            mo[i].innerHTML="X";
        }
        mo[i].setAttribute("onclick", "ajouty(this)");
        
    }
    let ay = document.getElementsByClassName("aymen");
    for (let i = 0; i < ay.length; i++) {
        ay[i].setAttribute("onclick", "ajouty(this)");
    }
}


function ajouty(divv){
    
    if(divv.className == "mo7" && document.getElementsByClassName("aymen").length<=2 && divv.innerHTML == ""){
        if(divv.id == "s6" && (!(document.getElementById("s5").innerHTML == "O") || !(document.getElementById("s4").innerHTML == "O") ) && (!(document.getElementById("s3").innerHTML == "O") || !(document.getElementById("s9").innerHTML == "O")) ){
            divv.innerHTML = "O";
            divv.className = "aymen";
        }
        else if(divv.id == "s4" && (!(document.getElementById("s5").innerHTML == "O") || !(document.getElementById("s6").innerHTML == "O") ) && (!(document.getElementById("s1").innerHTML == "O") || !(document.getElementById("s7").innerHTML == "O")) ){
            divv.innerHTML = "O";
            divv.className = "aymen";
        }

        else if(divv.id == "s2" && (!(document.getElementById("s1").innerHTML == "O") || !(document.getElementById("s3").innerHTML == "O") ) && (!(document.getElementById("s5").innerHTML == "O") || !(document.getElementById("s8").innerHTML == "O")) ){
            divv.innerHTML = "O";
            divv.className = "aymen";
        }

        else if(divv.id == "s8" && (!(document.getElementById("s5").innerHTML == "O" )|| !(document.getElementById("s2").innerHTML == "O") ) && (!(document.getElementById("s7").innerHTML == "O") || !(document.getElementById("s9").innerHTML == "O")) ){
            divv.innerHTML = "O";
            divv.className = "aymen";
        }

        else if(divv.id == "s5" && (!(document.getElementById("s2").innerHTML == "O") || !(document.getElementById("s8").innerHTML == "O") ) && (!(document.getElementById("s4").innerHTML == "O") || !(document.getElementById("s6").innerHTML == "O")) && (!(document.getElementById("s1").innerHTML == "O") || !(document.getElementById("s9").innerHTML == "O")) && (!(document.getElementById("s3").innerHTML == "O") || !(document.getElementById("s7").innerHTML == "O")) ){
            divv.innerHTML = "O";
            divv.className = "aymen";
        }

        else if(divv.id == "s1" && (!(document.getElementById("s2").innerHTML == "O") || !(document.getElementById("s3").innerHTML == "O") ) && (!(document.getElementById("s7").innerHTML == "O") || !(document.getElementById("s4").innerHTML == "O")) && (!(document.getElementById("s5").innerHTML == "O") ||!(document.getElementById("s9").innerHTML == "O")) ){
            divv.innerHTML = "O";
            divv.className = "aymen";
        }

        else if(divv.id == "s3" && (!(document.getElementById("s2").innerHTML == "O") || !(document.getElementById("s1").innerHTML == "O") ) && (!(document.getElementById("s6").innerHTML == "O") || !(document.getElementById("s9").innerHTML == "O")) && (!(document.getElementById("s5").innerHTML == "O" )|| !(document.getElementById("s7").innerHTML == "O")) ){
            divv.innerHTML = "O";
            divv.className = "aymen";
        }

        else if(divv.id == "s7" && (!(document.getElementById("s4").innerHTML == "O") || !(document.getElementById("s1").innerHTML == "O") ) && (!(document.getElementById("s5").innerHTML == "O") || !(document.getElementById("s3").innerHTML == "O")) && (!(document.getElementById("s8").innerHTML == "O") || !(document.getElementById("s9").innerHTML == "O")) ){
            divv.innerHTML = "O";
            divv.className = "aymen";
        }

        else if(divv.id == "s9" && (!(document.getElementById("s5").innerHTML == "O") || !(document.getElementById("s1").innerHTML == "O") ) && (!(document.getElementById("s7").innerHTML == "O") || !(document.getElementById("s8").innerHTML == "O")) && (!(document.getElementById("s6").innerHTML == "O") || !(document.getElementById("s3").innerHTML == "O")) ){
            divv.innerHTML = "O";
            divv.className = "aymen";
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


            setTimeout("superreur3()", 700);
        }
    }
    else if(divv.innerHTML == "X"){
            var imm = document.createElement("img");
            imm.src="erreur.jpg";
            imm.alt="g";
            imm.height="120";
            imm.width="120";
            divv.innerHTML="";
        divv.appendChild(imm);

        var ayy = document.getElementsByClassName("aymen");
            for (let i = 0; i < ayy.length; i++) {
                ayy[i].setAttribute("onclick", "");
            }
            var moo = document.getElementsByClassName("mo7");
            for (let i = 0; i < moo.length; i++) {
                moo[i].setAttribute("onclick", "");
            }


        setTimeout("superreur2()", 700);
    }
    if(document.getElementsByClassName("aymen").length==3){
        var ell = document.getElementsByClassName("mo7");
        for (var i = 0; i < ell.length; i++) {
            ell[i].className = "aymen";
        }
        for (var i = 0; i < ell.length; i++) {
            ell[i].className = "aymen";
        }
        for (var i = 0; i < ell.length; i++) {
            ell[i].className = "aymen";
        }
        ell = document.getElementsByClassName("aymen");
        for (var i = 0; i < ell.length; i++) {
            ell[i].setAttribute("onclick", "");
        }
        let bt = document.createElement("button")
        bt.id ="btn";
        bt.innerHTML="commencer la partie";
        bt.setAttribute("onclick", "commencer()");
        let bad = document.getElementsByTagName("body");
        for (let i = 0; i < bad.length; i++) {
            bad[i].appendChild(bt);
            
        }

    }
    
}