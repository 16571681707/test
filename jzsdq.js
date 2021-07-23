




xuanfu()
检测app("金猪生大钱","https://a.app.qq.com/o/simple.jsp?pkgname=com.liziyuedong.goldpig",79552894)

app.launchApp("金猪生大钱")
toastLog("打开app，等待8～12s")
随机等待(8,12)
toastLog("如果app没有打开，请手动打开。。")
sleep(1500)
threads.start(
    function(){
        while(true){
            关闭广告()
        }
    }
)

while(true){
    if(id("com.liziyuedong.goldpig:id/iv_item_pig_status").findOnce()){
        sleep(800)
        console.log("收取金币")
        id("com.liziyuedong.goldpig:id/iv_item_pig_status").click()
        随机等待(2,3)
    }  //收取金币
    if(text("金币翻倍").findOnce()){
        sleep(1500)
        console.log("金币翻倍")
        while(text("金币翻倍").findOnce()){
            点击文本("金币翻倍")
            sleep(2500)
        }
        if(id("com.liziyuedong.goldpig:id/tv_pop_tips_content").findOnce()){
            console.log("观看视频频繁")
            sleep(2500)
        } else {
            随机等待(35,40)
        }
    } else {
        随机等待(4,6)
    }
    
    if(text("点击关闭").findOnce()){
        sleep(900)
        点击文本("点击关闭")
        随机等待(2,3)
    }
    随机等待(2,5)
    if(text("可领取").findOnce()){
        sleep(900)
        console.log("点击可领取")
        while(text("可领取").findOnce()){
            点击不可点击文本("可领取")
            sleep(2500)
        }
        随机等待(2,3)
        if(text("红包翻倍").findOnce() || text("财神翻倍").findOnce()){
            if(text("红包翻倍").findOnce()){
                sleep(800)
                console.log("红包翻倍")
                while(text("红包翻倍").findOnce()){
                    点击文本("红包翻倍")
                    sleep(2500)
                }
            }
            if(text("财神翻倍").findOnce()){
                sleep(800)
                console.log("财神翻倍")
                while(text("财神翻倍").findOnce()){
                    点击文本("财神翻倍")
                    sleep(2500)
                }
            }
            if(id("com.liziyuedong.goldpig:id/tv_pop_tips_content").findOnce()){
                console.log("观看视频频繁")
                sleep(2500)
            } else {
                随机等待(12,15)
            }
        }
        点击文本("回到首页")
    }
}

















function 关闭广告(){
    var 广告1 = className("android.view.View").depth(9).drawingOrder(0).indexInParent(2).findOnce()
    if(广告1){
        console.log("关闭广告1")
        sleep(900)
        广告1.click()
        随机等待(2,3)
    }
    var 广告2 = className("android.widget.ImageView").depth(5).drawingOrder(2).indexInParent(1).findOnce()
    if(广告2){
        console.log("关闭广告2")
        sleep(900)
        广告2.click()
        随机等待(2,3)
    }
    var 广告3 = className("android.widget.ImageView").depth(6).drawingOrder(7).indexInParent(5).findOnce()
    if(广告3){
        console.log("关闭广告3")
        sleep(900)
        广告3.click()
        随机等待(2,3)
    }
    var 广告4 = className("android.widget.ImageView").depth(6).drawingOrder(5).indexInParent(2).findOnce()
    if(广告4){
        console.log("关闭广告4")
        sleep(900)
        广告4.click()
        随机等待(2,3)
    }
    var 广告5 = className("android.widget.ImageView").depth(6).drawingOrder(5).indexInParent(1).findOnce()
    if(广告5){
        console.log("关闭广告5")
        sleep(900)
        广告5.click()
        随机等待(2,3)
    }
    var 广告6 = className("android.widget.Image").depth(9).drawingOrder(0).indexInParent(1).findOnce()
    if(广告6){
        console.log("关闭广告6")
        sleep(900)
        广告6.click()
        随机等待(2,3)
    }
    点击不可点击id("com.liziyuedong.goldpig:id/tt_video_ad_close")
    点击不可点击id("com.liziyuedong.goldpig:id/tt_insert_dislike_icon_img")
    点击不可点击id("com.liziyuedong.goldpig:id/tt_bu_close")
    点击文本("参与互动，赢取奖励")
    点击文本("继续任务")
    点击文本("无法关闭")
}


function 关闭应用(str) {
    // sleep(5000)
    openAppSetting(getPackageName(str)); //关闭应用的名字
    sleep(5000)

    while(true) {
        if(text("强行停止").findOnce()) {
            text("强行停止").click()
            sleep(1500)
            if(text("确定").findOnce()){
                text("确定").click() //点击强行关闭后弹出的确认框
                sleep(1500)
                console.log("关闭应用")
                break
            }
            if(text("强行停止").findOnce()) {
                text("强行停止").click()
                sleep(1500)
                console.log("关闭应用")
                break
            }
        }
    }
}



function 锁屏() {
    sleep(1000);
    console.log("即将熄灭屏幕")
    toast("即将熄灭屏幕")
    sleep(2500)
    app.launchApp("一键锁屏")
    engines.stopAll();
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
            exit()
        }
    } else {
        toastLog("正在打开" + appname )
        sleep(500)
    }
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
    window.setPosition(0, device.height / 5 * 4);
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
//稍向下滑动
function 稍向下滑动() {
    sleep(2000)
    var width = device.width
    var height = device.height
    var suiji = parseInt(Math.random() * 160)
    var end = parseInt(Math.random() * 560)
    var time = random(2000,4500)
    swipe(width / 2, height - 100, width / 2 - suiji, height - 600, time)
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

//滑动看视频
function 滑动看视频() {
    sleep(2000)
    var width = device.width
    var height = device.height
    var suiji = parseInt(Math.random() * 160)
    var end = parseInt(random(50,100))
    var times = random(1500,2500)
    swipe(width / 2, height / 2 + 100, width / 2 - suiji, end, times)
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
    if (id(str).findOnce()) {
    var strname = id(str).findOnce().bounds()
    click(strname.centerX(), strname.centerY())
    }
}
//点击不可点击文本
function 点击不可点击文本(str) {
    if (text(str).findOnce()) {
    var strname = text(str).findOnce().bounds()
    click(strname.centerX(), strname.centerY())
    }
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


function 随机等待(min, max){
    var suijishu = random(min, max)
    var time = suijishu * 1000
    console.log("随机等待"+ min + "~" + max + "s")
    sleep(time)
}
