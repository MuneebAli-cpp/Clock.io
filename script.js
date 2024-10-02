const time = document.getElementById("clock");
function updateClock(){
    const now= new Date();
    const hours = now.getHours();
    const mnt = now.getMinutes();
    const secd = now.getSeconds();

    const timeString = `${hours}:${mnt}:${secd}`

    time.innerHTML = timeString;
}

setInterval( updateClock,1000);