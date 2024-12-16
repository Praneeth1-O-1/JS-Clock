
let ampm = document.getElementById("ampm")
function getTime(){
    let cur = new Date()
    let hr = cur.getHours()
    let min = cur.getMinutes()
    let seconds = cur.getSeconds()

    if(hr>12){
        hr = hr-12
        ampm.innerHTML = "PM"
    }

    document.getElementById("hours").innerHTML = padZero(hr)
    document.getElementById("mins").innerHTML = padZero(min)
    document.getElementById("seconds").innerHTML = padZero(seconds)
}

function padZero(el){
return el<10?"0"+el:el;
}


setInterval(getTime,1000);