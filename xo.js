function ajoutx(divv){
    
    if(divv.className == "aymen" && document.getElementsByClassName("mo7").length<=2){
        divv.innerHTML = "X";
        divv.className = "mo7";
        console.log(divv.title);
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
function ajouty(divv){
    
    if(divv.className == "mo7" && document.getElementsByClassName("aymen").length<=2 && divv.innerHTML == ""){
        divv.innerHTML = "O";
        divv.className = "aymen";
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
            ell[i].setAttribute("onclick", "gg(this)");
        }
    }
    
}

function placer(){
    alert("donner");
}