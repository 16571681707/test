



threads.start(function() {
    while(true) {
        关闭广告()
    }
});


var times = random(10,15) 
while(true) {
    翻页()
    等待时间(times)
    if(id("com.lechuan.mdwz:id/a3v").findOnce() ) {
        点击不可点击id("com.lechuan.mdwz:id/a3v")
        等待时间(10)
    }
    if(text("立即领取").findOnce()) {
        点击不可点击文本("立即领取")
        等待时间(5)
    }
}







//翻页  
function 翻页() {
    var suiji = parseInt(random(15,30))
    var left = device.width  - suiji
    var right = device.height / 5 * 4 + suiji
    click(left, right)
    console.log("看了一页")
}



//广告

function 关闭广告() {
    if(text("关闭").findOnce()) {
        点击不可点击文本("关闭")
        等待时间(6)
    }
    let 广告1 = className("android.widget.RelativeLayout").depth(8).drawingOrder(6).indexInParent(2).findOnce()
    if(广告1) {
        click(273,77)
        等待时间(6)
    }
}

//滑动
function 向下滑动() {
    sleep(2000)
    var width = device.width
    var height = device.height
    var suiji = parseInt(Math.random() * 160)
    var end = parseInt(Math.random() * 560)
    swipe(width / 2, height - 200, width / 2 - suiji, end, 7000)
    sleep(3000)
}



//等待时间
function 等待时间(number) {
    var maxtime = parseInt(Math.random() * number )
    var lasttime = maxtime * 1000
    sleep(lasttime)
}

//等待出现模块
function wait(Name) {
    text(Name).waitFor()
    sleep(1000)
}

//点击文本
function 点击文本(str) {
    if (text(str).findOnce()) {
        text(str).click()
        sleep(500)
    }
}

//点击不可点击id
function 点击不可点击id(str) {
    var strname = id(str).findOnce().bounds()
    click(strname.centerX(), strname.centerY())
}
//点击不可点击文本
function 点击不可点击文本(str) {
    var strname = text(str).findOnce().bounds()
    click(strname.centerX(), strname.centerY())
}

//取消升级 右上角关闭按钮 id = "b6r"
function 取消升级() {
    if (text("版本升级").findOne()) {
        点击不可点击id("b6r")
    } else {
        return;
    }
}

//看完视频关闭按钮
function 看完视频关闭() {
    text("关闭").click()
    sleep(1000)
    back();
}

