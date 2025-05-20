

function adam(){
    document.getElementById("dwa").textContent = "";
    const sredniauz = parseInt(document.getElementById("srednia").value);
    if(sredniauz < 2){
        document.getElementById("dwa").textContent = `NieEeEeEeEEe, zostaw zeszyt na drugi rok`
    }else if (sredniauz<=6 && sredniauz >=2){
        document.getElementById("dwa").textContent = `Gratulacje zdajesz! gud dżob`
    }else{
        document.getElementById("dwa").textContent = `I co próbujesz i tak nie zdasz`
    }


}
