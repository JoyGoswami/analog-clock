function showTime(){
  let date = new Date()
  let hourTime = date.getHours()
  let minuteTime = date.getMinutes()
  let secondTime = date.getSeconds()


  let hourRotate = 30*hourTime + minuteTime/2
  let minuteRotate = 6*minuteTime
  let secondRotate = 6*secondTime

  hourHand.style.transform = `rotate(${hourRotate}deg)`
  minuteHand.style.transform = `rotate(${minuteRotate}deg)`
  secondHand.style.transform = `rotate(${secondRotate}deg)`

}

showTime()
setInterval(showTime, 1000)
