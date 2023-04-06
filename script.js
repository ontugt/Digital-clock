function clock() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let time = hours + ":" + minutes + ":" + seconds;
    document.querySelector(".digits").innerHTML = time;
}

setInterval(clock, 1000);