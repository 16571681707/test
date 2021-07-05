
xuanfu()
定时()
var rongcuo = 0
while(true){
    翻页()
    rongcuo = rongcuo + 1
    //6次换个地方点击
    if(rongcuo % 6 == 0){
        容错翻页()
    }
}


function 定时() {
    
    var mm = 18;  //设置分钟数
    var y = mm * 1000 * 60;  //将分钟转变为毫秒
    console.log("开始" + mm + "分钟阅读")
    sleep(1500)
    setTimeout(function() {
        console.log("-----结束------")
        sleep(1000);
        //结束震动
        sleep(500)
        device.vibrate(2000);
        sleep(4000);
        device.vibrate(2000);
        sleep(1000);
        engines.stopAll();
    }, y);
}


function 翻页() {
    var suiji = parseInt(random(15,30))
    var left = device.width  - suiji
    var right = device.height / 11 +  suiji
    click(left, right)
    console.log("看了一页")
    sleep(random(5500,6900))
}
function 容错翻页() {
    var suiji = parseInt(random(15,30))
    var left = suiji
    var right = device.height / 11 +  suiji

    click(left, right)
    console.log("容错点击")
    sleep(random(5500,6900))
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