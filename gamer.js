function onCreate(){
    console.log("Ver 1.17 -> final <-");
    var x = document.getElementById("inputMT");
    var y = document.getElementById("inputKG");
    var z = document.getElementById("inputIMC");
    var clean = document.getElementById("buttClean");
    var calc = document.getElementById("buttCalc");
    setTimeout(() => { x.style = "transform: scale(1.15);"; }, 0);
    setTimeout(() => { x.style = "transform: scale(1);"; }, 200);
    setTimeout(() => { y.style = "transform: scale(1.15);"; }, 200);
    setTimeout(() => { y.style = "transform: scale(1);"; }, 400);
    setTimeout(() => { z.style = "transform: scale(1.15);"; }, 400);
    setTimeout(() => { z.style = "transform: scale(1);"; }, 600);
    setTimeout(() => { clean.style = "transform: scale(1.15);"; }, 600);
    setTimeout(() => { clean.style = "transform: scale(1);"; }, 800);
    setTimeout(() => { calc.style = "transform: scale(1.15);"; }, 800);
    setTimeout(() => { calc.style = "transform: scale(1);"; }, 1000);
}

function calcular(){
    var altura = document.getElementById("inputMT").value;
    let alturaS = document.getElementById("inputMT");
    var peso = document.getElementById("inputKG").value;
    let pesoS = document.getElementById("inputKG")
    var IMC = document.getElementById("inputIMC");
    var calculista = document.getElementById("buttCalc");
    let calc = peso/(altura*altura);
    try {
        if(altura.length==0 || peso.length==0){
            if(altura.length==0){
                alturaS.style = "border-color: red";
                setTimeout(() => {alturaS.style = "border-color: black;"}, 600);
                setTimeout(() => {calculista.style = "border-color: #008CBA;"}, 600);
            }
            if(peso.length==0){
                pesoS.style = "border-color: red";
                setTimeout(() => {pesoS.style = "border-color: black;"}, 600);
                setTimeout(() => {calculista.style = "border-color: #008CBA;"}, 600);
            }
            setTimeout(() => {calculista.style = ":hover{ border-color: #55d5ff; }"}, 600);
        }else{
            calculista.style = "border-color: green;";
            IMC.value = calc;
            setTimeout(() => {calculista.style = "border-color: #008CBA;"}, 600);
            setTimeout(() => {calculista.style = ":hover{ border-color: #55d5ff; }"}, 600);
        }
        if(calc<18.5){
            document.getElementById("IMC01").style = "background-color: rgba(255, 255, 255, 0.5);";
            setTimeout(() => { document.getElementById("IMC01").style = "background-color: #282a2f;"; }, 1000);
        }
        if(calc>18.5 && calc<25){
            document.getElementById("IMC02").style = "background-color: rgba(255, 255, 255, 0.5);";
            setTimeout(() => { document.getElementById("IMC02").style = "background-color: #282a2f;"; }, 1000);
        }
        if(calc>25 && calc<30){
            document.getElementById("IMC1").style = "background-color: rgba(255, 255, 255, 0.5);";
            setTimeout(() => { document.getElementById("IMC1").style = "background-color: #282a2f;"; }, 1000);
        }
        if(calc>30 && calc<40){
            document.getElementById("IMC2").style = "background-color: rgba(255, 255, 255, 0.5);";
            setTimeout(() => { document.getElementById("IMC2").style = "background-color: #282a2f;"; }, 1000);
        }
        if(calc>40){
            document.getElementById("IMC3").style = "background-color: rgba(255, 255, 255, 0.5);";
            setTimeout(() => { document.getElementById("IMC3").style = "background-color: #282a2f;"; }, 1000);
        }
    } catch (error) {
        alert("ih");
    }
}

function limpar(){
    var altura = document.getElementById("inputMT").value;
    let alturaS = document.getElementById("inputMT");
    var peso = document.getElementById("inputKG").value;
    let pesoS = document.getElementById("inputKG")
    var clean = document.getElementById("buttClean");
    var IMC = document.getElementById("inputIMC");
    try {
        if(altura.length==0 || peso.length==0){
            if(altura.length==0){
                alturaS.style = "border-color: red";
                setTimeout(() => {alturaS.style = "border-color: black;"}, 600);
            }
            if(peso.length==0){
                pesoS.style = "border-color: red";
                setTimeout(() => {pesoS.style = "border-color: black;"}, 600);
            }
            setTimeout(() => {clean.style = ":hover{ border-color: #55d5ff; }"}, 600);        
        }else{
            clean.style = "border-color: green;";
            setTimeout(() => {clean.style = "border-color: #008CBA;"}, 600);
            setTimeout(() => {clean.style = ":hover{ border-color: #55d5ff; }"}, 600);  
            alturaS.value = "";
            pesoS.value = "";
            IMC.value = "";
        }
    } catch (error) {
        alert("ih");
    }
}

function changeBack(tipo){
    var audiouwu = document.getElementById("myAudio");
    var tudim = document.getElementById("tudimtudim");
    if(tipo==1){
        document.body.style = "background-image: url('imagens/backgroundofda.gif')";
        tudim.style = "opacity: 0%";
        audiouwu.load();
        audiouwu.play();
    }else{
        document.body.style.backgroundImage = "url('imagens/background.png')";
        tudim.style = "opacity: 100%";
        audiouwu.pause();
    }
}