const btnStart = document.querySelector(".start")
const btnStop = document.querySelector(".stop")
const btnReset = document.querySelector(".reset")

let hrs=mins=sec=ms = 0,startTimer;



btnStart.addEventListener("click" , function(){
    startTimer=setInterval(()=>{
        ms++;
        if(ms==100){
            sec++;
            ms=0
        }
        if(sec==60){
            mins++;
            sec=0
        }
        updateDisplay()
    },15)
})

btnStop.addEventListener("click" , function(){
 clearInterval(startTimer);
})

btnReset.addEventListener("click" , function(){
    hrs=mins=sec=ms = 0;
    clearInterval(startTimer)
    updateDisplay()
})

function updateDisplay() {
    // code for add extra ZERO using condition less than 10
 dhrs=hrs<10?"0"+hrs:hrs
 dmins=mins<10?"0"+mins:mins
 dsec=sec<10?"0"+sec:sec
 dms=ms<10?"0"+ms:ms
    document.querySelector(".hrs").innerText=dhrs 
    document.querySelector(".mins").innerText=dmins
    document.querySelector(".sec").innerText=dsec
    document.querySelector(".ms").innerText=dms

}


