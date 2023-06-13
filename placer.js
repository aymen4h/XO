function placer(){
    alert("plcer les X et O");
    let ay = document.getElementsByClassName("aymen");
    for (let i = 0; i < ay.length; i++) {
        ay[i].setAttribute("onclick", "ajoutx(this)");
        
    }
    let bt = document.getElementById("btn");
    bt.remove();  
    
}
