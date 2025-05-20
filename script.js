

function adam(){
    document.getElementById("dwa").textContent = "";
    const sredniauz = parseInt(document.getElementById("srednia").value);
    if(sredniauz >= 2){
        document.getElementById("dwa").textContent = `Gratulacje zdajesz! gud dżob`
    }else{
        document.getElementById("dwa").textContent = `NieEeEeEeEEe, zostaw zeszyt na drugi rok`
    }
}
