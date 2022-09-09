hourHand = document.getElementById('hourHand');
minHand = document.getElementById('minHand');
secHand = document.getElementById('secHand');
dateBox = document.getElementById('date');

const month = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
const day = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];

dateBox.innerText = `${day[new Date().getDay()]}, ${new Date().getDate()} ${month[new Date().getMonth()]} ${new Date().getFullYear()}`

setInterval(() => {
    const date = new Date();
    let mins = date.getMinutes();
    let secs = date.getSeconds();
    let hours = date.getHours();

    console.log(hours + " " + mins + " " + secs);

    hRotation = (30 * hours) + (mins / 2);
    mRotation = (6 * mins);
    sRotation = (6 * secs);

    secHand.style.transform = `rotate(${sRotation}deg)`
    minHand.style.transform = `rotate(${mRotation}deg)`
    hourHand.style.transform = `rotate(${hRotation}deg)`

}, 1000);