


var appname = getPackageName(rawInput("请输入要打开的app名字", "番茄小说"))


if(appname == null){
    toastLog("未找到该应用，请检查应用名称是否准确")
    sleep(2000)
    exit()
}else {
    var looktime = parseInt(rawInput("请输入挂机时长", "45"))
    var times = looktime * 60 *1000 //转换成毫秒
    threads.start(function(){
        xuanfu()
        toastLog("即将开始"+looktime+"分钟阅读")
        setTimeout(function(){
            toastLog("即将结束。。")
            sleep(2000)
            engines.stopAll()
        },times)
    })
    打开app(appname)
//gesture(1000, [0, 0], [500, 500], [500, 1000])  为模拟一个从(0, 0)到(500, 500)到(500, 100)的手势操作，时长为1秒。
    while(true){
        var width = device.width
        var height = device.height
        var time = random(300,600) // 获取随机时长
        var startX = random(width/5 * 4,width) // 获取随机初始坐标
        var startY = random(height / 3 , height / 3 * 2)
        // var transitonX = random(width/3,width/2)  //获取中间坐标
        // var transitonY = random(height / 3 , height / 3 * 2)
        var stopX = random(width / 5 * 4,width/6 * 5)  //获取终点坐标
        var stopY = random(height / 3 , height / 3 * 2)
        // console.log([startX,startY])
        // console.log([transitonX,transitonY])
        // console.log([stopX,stopY])
        gesture(time,[startX,startY],[stopX,stopY])
        console.log("看了一页")
        sleep(random(2000,2500))
    }
}



function 打开app(str){
    app.launch(str)
    sleep(2000)
    toastLog("打开app，随机等待8～12s")
    sleep(random(8000,12000))
    toastLog("如未打开app，请手动打开")
    sleep(2000)
}

function xuanfu() {
    var window = floaty.window(
        <frame padding="1">
            <vertical  >
                <horizontal>
                    <button id="begin" text="日志" w="35" h="50" style="Widget.AppCompat.Button.Colored" textSize="12sp" />
                    <button id="end" text="结束" w="35" h="50" textSize="12sp" />
                    <button id="times" text="计时" w="35" h="50" textSize="12sp" />
                </horizontal>
                <com.stardust.autojs.core.console.ConsoleView h="150" w="180" id="console" bg="#80000000" />
            </vertical>
        </frame>

    );
    //开始计时
    var before = new Date();

    window.end.setVisibility(8)
    window.times.setVisibility(8)
    window.console.setConsole(runtime.console);
    window.setPosition(0, device.height / 5 * 3);
    window.console.attr("visibility", "gone");
    window.begin.click(() => {
        window.begin.text() == "显示日志"
        if (window.begin.text() == "显示日志") {
            window.begin.setText("隐藏日志")
            window.console.attr("visibility", "visible");
            window.end.setVisibility(0)
            window.times.setVisibility(0)
        } else {
            window.begin.setText("显示日志")
            window.console.attr("visibility", "gone");
            window.end.setVisibility(8)
            window.times.setVisibility(8)
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
