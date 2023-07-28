let deg = 6;
const hr = document.querySelector('#hr');
const mn = document.querySelector('#mn');
const sc = document.querySelector('#sc');


function calculateTime(){
    let day = new Date();
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * deg;
    let ss = day.getSeconds() * deg;
    
    hr.style.transform = `rotate(${(hh)+(mm/12)}deg)`;
    mn.style.transform = `rotate(${mm}deg)`;
    sc.style.transform = `rotate(${ss}deg)`;
}
setInterval(calculateTime, 1000);


function startTimer(){

    const minute = Number(document.querySelector("#minute").value);
    const second = Number(document.querySelector("#second").value);
    let calculateSecond = (minute*60) + second;
    
    function calculateTime(){
        const countDown = document.querySelector("#countdown");
    
        let min = Math.floor(calculateSecond/60);
        let sec = calculateSecond%60;
    
        calculateSecond--;
    
        if (sec < 10) {
            sec = "0" + sec;
        }
        console.log(calculateSecond);
        
        countDown.textContent = `${min} : ${sec}`;
        if (calculateSecond < 0) {
                stopTimer();
            calculateSecond = 0;
        }
        function stopTimer(){
            clearInterval(timerId);
            document.querySelector('#player').play();
        }
    }
    let timerId = setInterval(calculateTime,1000);
    
    }
    const button = document.querySelector("#btn");
    button.addEventListener ("click", function(){
        startTimer();
    })