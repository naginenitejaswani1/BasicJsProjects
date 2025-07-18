let startId = document.getElementById("start");
let stopId = document.getElementById("stop");
let resetId = document.getElementById("reset");
let clockId = document.getElementById("clock");

let intervalId;

function onClickStart(){
        intervalId = setInterval(()=>{
            let date = new Date();
            let hours = date.getHours().toString().padStart(2,'0');
            let minutes = date.getMinutes().toString().padStart(2,'0');
            let seconds = date.getSeconds().toString().padStart(2,'0');
            console.log(hours, minutes, seconds);
            console.log(date);
            if (hours > 12) {
                hours = (hours - 12).toString().padStart(2,'0');; // Convert 13–23 to 1–11 PM
            } else if (hours === 0) {
                hours = 12 // Convert 0 to 12 AM
            }
            const timeString = `${hours}:${minutes}:${seconds}`;
            clockId.innerText = timeString;
            
        }, 1000);
        
}

function onClickStop(){
    clearInterval(intervalId);
    console.log("Clock Stopped");
}

function onClickReset(){
    clearInterval(intervalId);
    clockId.innerText = "00:00:00";
    console.log("Clock Reset");

}

startId.addEventListener("click", onClickStart);
stopId.addEventListener("click",onClickStop);
resetId.addEventListener("click", onClickReset);

