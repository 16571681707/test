
"ui";
ui.layout(
    <vertical padding="16">
        <checkbox id="all" text="全部"/>
        <checkbox id="gogogo" text="走路赚钱"/>
        <checkbox id="lucky" text="刮奖"/>
        <checkbox id="bushu" text="步数元宝领取"/>
        <text textSize="15sp">点击开始，将依次进行操作</text>
        <button id="ok" text="开始"/> 
    </vertical>

);

ui.ok.click(function() {

    threads.start(function() {
        xuanfu()
    })
    main()

});


function main() {
    threads.start(function() {
        if(ui.all.checked) {
            判断时间()
            打开应用()
            走路赚钱()
            关闭应用("点淘")
            sleep(2500)
            打开应用()
            刮刮乐()
            关闭应用("点淘")
            sleep(2500)
            打开应用()
            步数()
        }
        if(ui.gogogo.checked ){ 
            判断时间() 
            打开应用()
            走路赚钱()
        }
            
        if(ui.lucky.checked) {
            判断时间()
            打开应用()
            刮刮乐()
        }
        if(ui.bushu.checked) {
            判断时间()
            打开应用()
            步数()
        }
    })
}
function 步数() {
    if(text("去走路").findOnce()) {
        等待时间(5)
        点击不可点击文本("去走路")
        console.log("进入走路赚钱界面")
        wait("连续走")
        sleep(1500)
        if(text("出发").findOnce()) {
            sleep(1500)
            点击不可点击文本("出发")
            sleep(random(1500,2500))
        }
    }
    while(true) {
        if(text("领取").findOnce()) {
            text("领取").click()
            sleep(random(2000,3500))
            if(textContains("再得").findOnce()) {
                textContains("再得").click()
                sleep(random(2000,3500))
                while(true) {
                    if(!id("com.taobao.live:id/task_center_action").findOnce()) {
                        console.log("即将开始下一次任务")
                        sleep(random(2000,3500))
                        back()
                        sleep(random(2000,3500))
                        wait("规则")
                        break
                    }else {
                        sleep(random(2000,45000))
                        滑动看视频()
                    }
                }
                sleep(random(2000,3500))
            }
        } else {
            console.log("结束")
            break
        }
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
function 打开应用() {
    等待时间(5)
    app.launchApp("点淘")   //打开应用
    console.log("打开app 等待8～12s")
    sleep(random(8000,12000)) //打开应用等待8～12s
    if(text("视频").findOnce()) {
    click(device.width - 40, device.height - 10)
    console.log("点击 我的")
    id("com.taobao.live:id/personal_menu").waitFor()
    等待时间(5)
    // var 元宝中心 = className("android.widget.FrameLayout").depth(5).drawingOrder(2).indexInParent(2).findOnce()
    // var 元宝中心坐标 = 元宝中心.bounds()
    if(text("元宝中心").findOnce()) {
        点击不可点击文本("元宝中心")
        console.log("进入元宝中心")
        等待时间(8)
        wait("规则")
    }
    等待时间(5)
    sleep(random(2000,4500))
    sleep(random(2000,4500))
    }
    if(className("android.view.View").depth(10).drawingOrder(0).indexInParent(0).findOnce()){
        等待时间(5)
        className("android.view.View").depth(10).drawingOrder(0).indexInParent(0).click()
        console.log("关闭按钮")
        等待时间(5)
    }
    元宝数()
    孵化蛋()
    sleep(random(1500,3000))
    if(text("点击签到").findOnce()) {
        等待时间(5)
        点击不可点击文本("点击签到")
        console.log("签到")
        sleep(random(1500,3000))
    }
    稍向下滑动()
    sleep(random(1500,3000))
}


//孵化蛋 
function 孵化蛋() {
    if(text("TB1qYr6pmslXu8jSZFuXXXg7FXa-500-500").findOnce()) {
        等待时间(5)
        console.log("领取孵化蛋奖励")
        点击不可点击文本("TB1qYr6pmslXu8jSZFuXXXg7FXa-500-500")
        sleep(1500)
        wait("O1CN01LxFPWH1Mmy2hurJW4_!!6000000001478-2-tps-54-54.png?getAvatar_")
        sleep(1500)
        点击不可点击文本("O1CN01LxFPWH1Mmy2hurJW4_!!6000000001478-2-tps-54-54.png?getAvatar_") //关闭按钮
        sleep(1500)
    }
}

//记录元宝数量
function 元宝数() {
    //oppo 
    // var 元宝 = className("android.view.View").depth(13).drawingOrder(0).bounds(69,303,339,456).findOnce().getText()
    //魅蓝  
    // var 元宝 = className("android.view.View").depth(9).drawingOrder(0).bounds(46,182,226,284).findOnce().getText()  
    if(className("android.view.View").depth(13).drawingOrder(0).indexInParent(1).findOnce()) {
        var 元宝 = className("android.view.View").depth(13).drawingOrder(0).indexInParent(1).findOnce().getText()
    } 
    // else {
    //     var 元宝 = className("android.view.View").depth(13).drawingOrder(0).bounds(46,182,226,284).findOnce().getText()  
    // }
    var my_date = new Date()
    var path = "/storage/emulated/0/记录/点淘.txt"
    var year = my_date.getFullYear()
    var month = my_date.getMonth() + 1
    var day = my_date.getDay()
    var hours = my_date.getHours()
    var minute = my_date.getMinutes()
    var secoends = my_date.getSeconds()
    // xx年/xx月/xx日 xx时：xx分：xx秒
    var text = year + "年/" + month + "月/" + day + "日 " + hours + ":" + minute + ":" + secoends + " "+ " 共有元宝：" + 元宝 + "\n" 
    if(files.exists(path)) {
        files.append(path, text)
    } else {
        files.write(path, text)
    }
    console.log("元宝数已存放在" + path + "中")
}

//走路赚钱
var kanshipingcishu = 0 

function 走路赚钱() {
    var 去观看 = 1
    等待时间(5)
    if(text("去走路").findOnce()) {
        等待时间(5)
        点击不可点击文本("去走路")
        console.log("进入走路赚钱界面")
        等待时间(5)
    while(true) {
        //赚步数
        wait("赚步数")
         //领取能量饮料
         sleep(random(2000,4500))
         if(text("领取").findOnce()){
             等待时间(5)
             点击不可点击文本("领取")
             等待时间(5)
         }
        if(text("赚步数").findOnce()) {
            等待时间(5)
            点击不可点击文本("赚步数")
            sleep(random(2000,4500))
            if(text("去观看").findOnce()) {
                等待时间(5)
                点击不可点击文本("去观看")
                console.log("看视频赚步数")
                sleep(random(2000,4500))
                if(id("com.taobao.live:id/iv_comment").findOnce() || text("关注").findOnce()) {
                    while(true) {
                        sleep(random(2000,3500))
                        if(!id("com.taobao.live:id/task_center_action").findOnce()) {
                            console.log("即将开始下一次任务")
                            sleep(random(2000,3500))
                            back()
                            break
                        }else {
                            sleep(random(2000,45000))
                            滑动看视频()
                        }
                    }
                } else {
                    sleep(random(1500,2500))
                    //领取能量饮料
                    if(text("领取").findOnce()){
                        等待时间(5)
                        点击不可点击文本("领取")
                        sleep(random(1500,2500))
                        等待时间(5)
                    }
                    等待时间(5)
                    点击不可点击文本("赚步数")
                    等待时间(5)
                    点击不可点击文本("去观看")
                    等待时间(5)
                }

            }else {
                稍向下滑动()
                console.log("寻找观看任务")
                等待时间(3)
                去观看 = 去观看 + 1
                console.log(去观看)
                if(去观看 > 3) {
                    back()
                    break
                }
            }
        }
        }
    }
}




//刮刮乐
function 刮刮乐() {
    var cishu = 1
    if(text("去走路").findOnce()) {
        等待时间(5)
        点击不可点击文本("去走路")
        wait("规则")
        console.log("进入走路赚钱界面")
        等待时间(5)
        //领取能量饮料
        if(text("领取").findOnce()){
            等待时间(5)
            点击不可点击文本("领取")
            等待时间(5)
        }
        //赚步数
        wait("赚步数")
    }
    while(true) {

        if(className("android.view.View").depth(11).drawingOrder(0).indexInParent(5).findOnce()) {
            等待时间(3)
            className("android.view.View").depth(11).drawingOrder(0).indexInParent(5).click()
            等待时间(3)
        }
        //判断抽奖结束
        if(text("O1CN01s6B6cB1Dt4ntJPgDa_!!6000000000273-2-tps-302-66.png_360x10000.jpg_").findOnce()) {
            console.log("抽奖结束")
            等待时间(5)
        }
        //点击刮奖
        if(text("O1CN01LuA0cE1lVRIWrSoZR_!!6000000004824-2-tps-306-68.png_360x10000.jpg_").findOnce()) {
            等待时间(3)
            点击文本("O1CN01LuA0cE1lVRIWrSoZR_!!6000000004824-2-tps-306-68.png_360x10000.jpg_")
            等待时间(3) 
        }
        //遮罩层
        if(text("O1CN01LuA0cE1lVRIWrSoZR_!!6000000004824-2-tps-306-68.png_360x10000.jpg_").findOnce()){
            等待时间(3)
            wait("中奖记录")
            点击文本("O1CN01LuA0cE1lVRIWrSoZR_!!6000000004824-2-tps-306-68.png_360x10000.jpg_")
            等待时间(3) 
        }
        //刮奖
        if(text("O1CN01IHgDWI1wD5CICIKtl_!!6000000006273-2-tps-536-234.png_").findOnce()) {
            等待时间(3)
            gesture(2000,[183,895],[1080,895])   //oppo
            // gesture(2000,[114,598],[601,599])   //meizu
            console.log("--抽第" + cishu + "次奖----")
            cishu = cishu + 1
            等待时间(3)
            if(textContains("看直播").findOnce()) {
                sleep(1500)
                textContains("看直播").click()
                等待时间(3)
                while(true) {
                    if(!id("com.taobao.live:id/task_center_action").findOnce()) {
                        console.log("即将开始下一次任务")
                        sleep(random(2000,3500))
                        back()
                        等待时间(5)
                        if(text("继续做任务").findOnce()) {
                            等待时间(3)
                            点击文本("继续做任务")
                            等待时间(3)
                        } else {
                            break
                        }
                        // if(text("领取").findOnce()){
                        //     等待时间(5)
                        //     点击不可点击文本("领取")
                        //     等待时间(5)
                        // }
                    }else {
                        sleep(random(2000,45000))
                        滑动看视频()
                    }
            }
            } 
            if(text("继续刮奖").findOnce()) {
                等待时间(5)
                点击文本("继续刮奖")
                等待时间(5)
            }
            if(text("O1CN01s6B6cB1Dt4ntJPgDa_!!6000000000273-2-tps-302-66.png_360x10000.jpg_").findOnce()) {
                console.log("抽奖结束")
                等待时间(5)
                break
            }
        }
}
    

}



//领取奖励
function 领取奖励() {
    等待时间(5)
    点击文本("出发")
    等待时间(8)
    var 领取 = text("领取").find()
    for(var i = 0; i < 领取.size(); i++) {
        var 领取奖励 = 领取.get(i)
        等待时间(5)
        领取奖励.click()
        等待时间(5)
        if(textContains("看直播").findOnce()) {
            sleep(1500)
            textContains("看直播").click()
            等待时间(3)
            while(true) {
                if(!id("com.taobao.live:id/task_center_action").findOnce()) {
                    console.log("即将开始下一次任务")
                    sleep(random(2000,3500))
                    back()
                    等待时间(5)
                    if(text("继续做任务").findOnce()) {
                        等待时间(3)
                        点击文本("继续做任务")
                        等待时间(3)
                    } else {
                        break
                    }
            }
        }
    }}
}



function 关闭应用(str) {
    // sleep(5000)
    openAppSetting(getPackageName(str)); //关闭应用的名字
    sleep(5000)

    while(true) {
        if(text("强行停止").findOnce()) {
            text("强行停止").click()
            sleep(1500)
            text("确定").click() //点击强行关闭后弹出的确认框
            console.log("关闭应用")
            break
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
                </horizontal>

                <com.stardust.autojs.core.console.ConsoleView h="150" w="180" id="console" bg="#80000000" />


            </vertical>
        </frame>

    );

    window.console.setConsole(runtime.console);
    window.setPosition(0, device.height / 5 * 4);
    // window.console.findViewById(org.autojs.autojs.R.id.input_container).setVisibility(android.view.View.GONE);
    window.console.attr("visibility", "gone");


    //日志和结束按钮不显示
    window.begin.setVisibility(8)
    window.end.setVisibility(8)
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
        } else {
            window.console.setVisibility(8)
            window.end.setVisibility(8)
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

