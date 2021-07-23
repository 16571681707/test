
//通用版本

threads.start(function() {
    while(true) {
        关闭广告()
    }
})
xuanfu()
判断时间()
threads.start(function() {
    var stoptimes = 30 //定义挂机时间（分）
    var stop = stoptimes * 1000 * 60 //将定义的时间转换成分钟
    toastLog("挂机时间为：" + stoptimes + "分钟")
    setTimeout(function() {
        console.log("时间到，即将停止。。。")
        sleep(2500)
        查询矿石()
        engines.stopAll();
    }, stop);
})

var time = 0
var delay = 0
var number = 0
var kuangshi = 0
var shuaxin = 0
var w = device.width
var h = device.height
检测app("乐挖","https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxc9b89f1e7faecbf6&redirect_uri=https%3A%2F%2Fwww.tianfengxinxi.com%2Fwechat%2Finviting%3Finvite_code%3D19489F&response_type=code&scope=snsapi_userinfo&state=1cc546c1228e029016cb7dbdef0ee088&connect_redirect=1#wechat_redirect",520)
app.launchApp("乐挖")
wait("红包收益")
while(true) {
    if(text("可领取").findOnce()) {
        sleep(random(1000,1500))
        console.log("点击矿石")
        点击不可点击文本("可领取")
        time = random(4,7) 
        console.log("等待："+ time + "s")
        delay = time * 1000
        shuaxin = 0
        sleep(delay)
    }
    if(text("领取10矿石").findOnce()) {
        sleep(random(1000,1500))
        console.log("领取10矿石")
        点击不可点击文本("领取10矿石")
        time = random(4,7) 
        kuangshi = kuangshi + 10
        console.log("等待："+ time + "s")
        delay = time * 1000
        sleep(delay)
    }
    if(text("领取5矿石").findOnce()) {
        sleep(random(1000,1500))
        console.log("领取5矿石")
        点击不可点击文本("领取5矿石")
        time = random(4,7) 
        kuangshi = kuangshi + 10
        console.log("等待："+ time + "s")
        delay = time * 1000
        sleep(delay)
    }
    if(text("领取30矿石").findOnce()) {
        sleep(random(1000,1500))
        console.log("领取30矿石")
        点击不可点击文本("领取30矿石")
        time = random(4,7) 
        kuangshi = kuangshi + 30
        console.log("等待："+ time + "s")
        delay = time * 1000
        sleep(delay)
    }
    if(!text("可领取").findOnce()) {
        sleep(random(1000,1500))
        console.log("没找到可领取，等待。。。。")
        sleep(random(3000,4000))
        number = number + 1
    }
    if(className("android.widget.TextView").depth(7).drawingOrder(2).indexInParent(0).findOnce()){
        console.log("做任务界面，返回,,,,")
        sleep(2500)
        // sleep(1500)
        console.log("返回，，，")
        back()
        sleep(1500)
        刷新界面()
    }
    if(text("领取").findOnce()) {
        sleep(random(1000,1500))
        console.log("点击领取")
        点击不可点击文本("领取")
        time = random(2,6) 
        console.log("等待："+ time + "s")
        delay = time * 1000
        sleep(delay)
    }
    if(number > 3 && text("红包收益").findOnce()) {
        number = 0
        sleep(1500)
        click(w / 4 * 3 - 100 , h - 100)  // 荣耀“任务”
        sleep(2500)
        if(text("立即签到").findOnce()) {
            sleep(1500)
            console.log("---签到---")
            点击不可点击文本("立即签到")
            sleep(2500) 
            while(true){
                if(text("朕知道了").findOnce()){
                    sleep(2500)
                    点击不可点击文本("朕知道了")
                    sleep(3500)
                }
                var 广告 = className("android.widget.ImageView").depth(5).drawingOrder(2).indexInParent(1).findOnce()
                if(广告) {
                    sleep(random(1000,1500))
                    广告.click()
                    console.log("关闭广告")
                    sleep(random(1000,1500))
                    break
                }
            }
        }
        console.log("重新刷新")
        刷新界面()
        // 查询矿石()
        shuaxin = shuaxin + 1
    }
    if(text("返回").findOnce()) {
        sleep(random(1000,1500))
        console.log("看文章界面，等待返回。。。。")
        sleep(random(3000,4000))
        back()
        sleep(1500)
        刷新界面()
    }
    if(id("com.cn.android.Le.to.dig:id/dy_back_iv").findOnce() && !textContains("矿石").findOnce()) {
        sleep(1500)
        console.log("游戏界面，等待返回，，，")
        点击不可点击id("com.cn.android.Le.to.dig:id/dy_back_iv")
        sleep(random(3000,4000))
        刷新界面()
    }
    if(text("确定离开").findOnce()) {
        sleep(random(1000,1500))
        console.log("看文章返回。。。。")
        点击不可点击文本("确定离开")
        sleep(500)
        刷新界面()
    }
    if(text("购物赚矿石").findOnce() && text("购物教程").findOnce()) {
        sleep(random(1000,1500))
        console.log("购物界面，返回。。。。")
        back()
        sleep(500)
        while(text("购物赚矿石").findOnce() && text("购物教程").findOnce()){
            back()
        }
        刷新界面()
    }
    if(text("购物赚矿石").findOnce() && desc("平台用户信息安全由").findOnce()) {
        sleep(random(1000,1500))
        console.log("购物界面，返回。。。。")
        back()
        sleep(500)
        while(text("购物赚矿石").findOnce() && desc("平台用户信息安全由").findOnce()){
            back()
        }
        刷新界面()
    }
    if(textContains("第一章").findOnce()) {
        sleep(random(1000,1500))
        console.log("看小说界面，返回。。。。")
        back()
        sleep(500)
        while(textContains("第一章").findOnce()){
            back()
            sleep(1500)
        }
        刷新界面()
    }
    if(text("矿石20 ").findOnce()) {
        sleep(random(1000,1500))
        console.log("矿石20界面，返回。。。。")
        back()
        sleep(500)
        while(text("矿石20").findOnce() || text("矿石20 ").findOnce()){
            back()
            sleep(1500)
        }
        刷新界面()
    }
    if(text("百亿补贴").findOnce()  && text("购物教程").findOnce()) {
        sleep(random(1000,1500))
        console.log("百亿补贴界面，返回。。。。")
        back()
        sleep(500)
        while((text("百亿补贴").findOnce()  && text("购物教程").findOnce()) ){
            back()
        }
        刷新界面()
    }
    if(className("android.view.View").depth(14).drawingOrder(0).indexInParent(2).findOnce()){
        console.log("看广告，等待广告结束...")
        // 点击不可点击文本("NRC3IDUxtUE1UrViNXP9HbyROAFcnByxbBYX+AAAAABJRU5ErkJggg==")
        sleep(random(1000,2500))
    }
    var 广告 = className("android.widget.ImageView").depth(5).drawingOrder(2).indexInParent(1).findOnce()
    if(广告) {
        sleep(random(1000,1500))
        广告.click()
        console.log("关闭广告")
        sleep(random(1000,1500))
    }
    var 广告1 = className("android.widget.ImageView").depth(1).drawingOrder(2).indexInParent(1).findOnce()
    if(广告1) {
        sleep(random(1000,1500))
        广告1.click()
        console.log("关闭广告")
        sleep(random(1000,1500))
    }

    if(id("com.cn.android.Le.to.dig:id/iv_close_img").findOnce() && !textContains("矿石").findOnce()) {
        sleep(1500)
        console.log("关闭按钮")
        点击不可点击id("com.cn.android.Le.to.dig:id/iv_close_img")
        sleep(random(3000,4000))
        刷新界面()
    }
    if(shuaxin > 5) {
        toastLog("长时间未找到可领取，请稍后再试。。。")
        sleep(random(3500,4500))
        查询矿石()
        锁屏()
    }
    while(text("购物教程").findOnce()) {
        back()
        console.log("发现购物教程，返回。。。")
        sleep(1500)
    }
}

function 查询矿石() {
    sleep(3500)
    console.log("已领取矿石：" + kuangshi)
    sleep(1500)
}

function 锁屏() {
    sleep(1000);
    console.log("即将熄灭屏幕")
    toast("即将熄灭屏幕")
    sleep(2500)
    app.launchApp("一键锁屏")
    engines.stopAll();
}
function 刷新界面(){

    console.log("即将刷新")
    sleep(1500)
    click(w / 4 * 3 - 100 , h - 100)  // 荣耀“任务”
    sleep(2500)
    console.log("重新刷新")
    sleep(1500)
    console.log("点击首页")
    click(w / 4  - 100 , h - 100)  // 荣耀“首页”
    sleep(1500)
}


function 检测app(name,url,str){
    var appname = getPackageName(name)
    if(appname == null){
        toastLog("未安装该应用")
        sleep(1500)
        var download = confirm("是否去安装"+ name +"?")
        if(download){
            app.openUrl(url)
            toastLog("正在去下载。。。")
            sleep(1500)
            toastLog("支持作者记得填下邀请码哦！")
            setClip(str)
            sleep(2000)
            toastLog("邀请码已复制到剪切板")
            sleep(1500)
        }
    } else {
        toastLog("正在打开" + appname )
        sleep(500)
    }
}









function 判断时间() {
    var time = new Date()
    var hour = time.getHours()
    var screenlight = 1
    toast("设置手机亮度调节模式为: 手动" )
    等待时间(5)
    device.setBrightnessMode(0)
    if(hour < 22) {
        screenlight = 15
    } else {
        screenlight = 15
    }
    console.log("设置屏幕亮度为：" + screenlight)
    toast("设置手机亮度为:" + screenlight)
    sleep(1500)
    device.setBrightness(screenlight)
}


function 关闭广告() {
    if(id("tt_video_ad_close").findOnce()) {
        点击不可点击id("tt_video_ad_close")
        console.log("关闭广告")
        等待时间(6)
        等待时间(random(5,10))
    }
    if(text("浏览页面25s 领取奖励").findOnce()) {
        向下滑动()
        等待时间(random(5,10))
    }
    if(text("继续试玩").findOnce()) {
        点击文本("继续试玩")
        等待时间(6)
        console.log("滑动广告")
        向下滑动()
        等待时间(random(5,10))
    }
    // if(id("com.cootek.crazyreader:id/a_d").findOnce()) {
    //     点击不可点击id("com.cootek.crazyreader:id/a_d")
    //     等待时间(5)
    // }
    // let 广告1 = className("android.widget.ImageView").depth(5).drawingOrder(2).indexInParent(1).findOnce()
    // if(广告1) {
    //     广告1.click()
    //     console.log("关闭广告1")
    //     等待时间(5)
    // }
    // if(id("bll").findOnce()) {
    //     点击不可点击id("bll")
    //     等待时间(50)
    // }
    // if(text("看小视频翻倍奖励").findOnce()) {
    //     点击不可点击文本("看小视频翻倍奖励")
    //     等待时间(50)
    // }
    // if(text("你的专属推荐").findOnce()) {
    //     click(device.height / 5   + suiji, left)
    // } 
}


//悬浮窗
    //=====================================================
    function xuanfu() {
        var window = floaty.window(
            <frame padding="1">
                <vertical  >
                    <horizontal>
                        <button id="action" text="点击" w="35" h="50" style="Widget.AppCompat.Button.Colored" textSize="12sp" />
                        <button id="begin" text="日志" w="35" h="50" textSize="12sp" />
                        <button id="end" text="结束" w="35" h="50" textSize="12sp" />
                        <button id="times" text="计时" w="35" h="50" textSize="12sp" />
                    </horizontal>
    
                    <com.stardust.autojs.core.console.ConsoleView h="150" w="180" id="console" bg="#80000000" />
    
    
                </vertical>
            </frame>
    
        );
    
        window.console.setConsole(runtime.console);
        window.setPosition(0, device.height / 5 * 3);
        // window.console.findViewById(org.autojs.autojs.R.id.input_container).setVisibility(android.view.View.GONE);
        window.console.attr("visibility", "gone");
        
        //开始计时
        var before = new Date();
    
        //日志和结束按钮不显示
        window.begin.setVisibility(8)
        window.end.setVisibility(8)
        window.times.setVisibility(8)
        // window.console.setTouchable(false);
    
        var x = 0, y = 0;
        var windowX, windowY;
        var downTime;
        window.action.setOnTouchListener(function (view, event) {
            switch (event.getAction()) {
                case event.ACTION_DOWN:
                    x = event.getRawX();
                    y = event.getRawY();
                    windowX = window.getX();
                    windowY = window.getY();
                    downTime = new Date().getTime();
                    return true;
                case event.ACTION_MOVE:
                    //移动手指时调整悬浮窗位置
                    window.setPosition(windowX + (event.getRawX() - x),
                        windowY + (event.getRawY() - y));
                    return true;
                case event.ACTION_UP:
                    //手指弹起时如果偏移很小则判断为点击
                    if (Math.abs(event.getRawY() - y) < 5 && Math.abs(event.getRawX() - x) < 5) {
                        onClick();
                    }
                    return true;
            }
            return true;
        });
    
        function onClick(str, sec) {
    
            if (window.end.visibility == 8) {
                window.console.setVisibility(0)
                window.end.setVisibility(0)
                window.times.setVisibility(0)
            } else {
                window.console.setVisibility(8)
                window.end.setVisibility(8)
                window.times.setVisibility(8)
            }
        }
    
        var timerId;
    
        function 显示状态信息(str, sec) {
            try {
                clearTimeout(timerId);
            }
            catch (error) {
                toastLog("error");
            }
            ui.run(() => {
                window.action.setText(str);
            });
            timerId = setTimeout(function () {
                ui.run(() => {
                    window.action.setText("");
                });
            }, sec * 1000);
        }
    
    
        window.begin.click(() => {
            window.begin.text() == "显示日志"
            if (window.begin.text() == "显示日志") {
                window.begin.setText("隐藏日志")
                window.console.attr("visibility", "visible");
            } else {
                window.begin.setText("显示日志")
                window.console.attr("visibility", "gone");
            }
        });
    
        window.end.click(() => {
            floaty.closeAll();
            engines.stopAll();
            exit();
        });
        window.times.click(() => {
            var now =new Date();
            var last = Math.floor((now - before) / 1000)
            if(last >= 60) {
                var minutes =  Math.floor(last / 60)
            } else {
                var minutes = 0
            }
            var seconds = last - minutes * 60
            if(minutes > 0 && seconds < 10){
                console.log("运行了：" + minutes + "分 " + "0" + seconds + "秒")
            } 
            if(minutes > 0 && seconds > 10){
                console.log("运行了：" + minutes + "分 "  + seconds + "秒")
            }
            if(minutes <= 0 && seconds < 10){
                console.log("运行了：" + "0" + seconds + "秒")
            } 
            if(minutes <= 0 && seconds > 10){
                console.log("运行了："  + seconds + "秒")
            } 
        });
    
    }
    //悬浮窗结束-----------

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

