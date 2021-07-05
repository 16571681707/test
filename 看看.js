var times = 0

while(times < 35) {
    sleep(1500)
    times = times + 1
    向下滑动()
    back()
    sleep(4000)
    
    console.log(times)
}


function 向下滑动() {
    sleep(2000)
    var width = device.width
    var height = device.height
    var suiji = parseInt(Math.random() * 160)
    var end = parseInt(Math.random() * 560)
    swipe(width / 2, height - 200, width / 2 - suiji, end, 7000)
    sleep(3000)
}