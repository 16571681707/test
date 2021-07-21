threads.start(function(){
    while(true){
        弹窗()
    }
})
xuanfu()
app.launchApp("支付宝")
toastLog("打开app，等待8～12s")
随机等待(8,12)
toastLog("如果app没有打开，请手动打开。。")
sleep(1500)
签到()
返回首页()
机密挖矿()
toastLog("任务完成，请检查任务完成情况。。")
sleep(2000)
engines.stopAll()

function 签到() {
    wait("我的")
    toastLog("即将开始执行")
    点击不可点击文本("我的")
    随机等待(2,3)
    点击不可点击文本("支付宝会员")
    wait("每日签到")
    console.log("进入签到页面")
    随机等待(3,5)
    if(text("每日签到").findOnce()){
        console.log("签到 +1")
        点击不可点击文本("每日签到")
        随机等待(4,5)
    }
    if(text("全部领取").findOnce()){
        console.log("领取积分")
        点击不可点击文本("全部领取")
        随机等待(1,2)
    }
    wait("逛15秒赚积分")
    sleep(900)
    if(text("逛15秒赚积分").findOnce()){
        sleep(900)
        点击不可点击文本("逛15秒赚积分")
        console.log("等待15s")
        sleep(16300)
    }
}

function 返回首页(){
    while(!text("我的").findOnce()){
        back()
        sleep(900)
        if(text("我的").findOnce()) {
            console.log("回到首页")
            点击不可点击文本("首页")
            随机等待(2,3)
            break
        }
    }
}
function 机密挖矿() {
    点击不可点击id("com.alipay.android.phone.openplatform:id/home_title_search_hint")
    sleep(1500)
    setText("挖矿")
    sleep(1000)
    点击不可点击文本("搜索")
    随机等待(3,5)
    点击不可点击文本("机蜜天天挖矿领现金")
    随机等待(5,8)
    wait("规则")
    sleep(1000)
    if(textContains("挖矿").findOnce()){
        console.log("点击挖矿")
        textContains("挖矿").click()
        sleep(1500)
    }
    点击不可点击文本("立即领取")
}

function 弹窗(){
    点击文本("忽略")
    点击文本("取消")
}




new java.lang.Thread(function() {
    //耗时间的代码放这里
    }).start();
    
    
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