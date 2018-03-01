define(['models/common', 'models/3h_weather_data'], function (c, data) {
    var ui = {
        rows: [
            {height: 2},
            {
                id: '3h_weather',
                scroll: 'y',
                css: 'weather-3h',
                template: "<p class='h-3'>3小时天气预报</p><div style='padding-left:5px;min-height: 200px'>#content#</div><p class='h-3'>金华各县市区3小时天气预报</p><div id='weather_container'>" +
                "<table class='weather-table'>" +
                "<thead><tr><td colspan='4'>浦江</td></tr></thead>" +
                "<tbody>" +
                "<tr><td>预报时段</td><td>天气</td><td>温度</td><td>风力</td></tr>" +
                "<tr><td>2018/1/9<br>08:00-11:00</td><td>晴。</td><td>-1~4℃</td><td>偏东风1～2级</td></tr>" +
                "</tbody>" +
                "</table>" +
                "<table class='weather-table'>" +
                "<thead><tr><td colspan='4'>兰溪</td></tr></thead>" +
                "<tbody>" +
                "<tr><td>预报时段</td><td>天气</td><td>温度</td><td>风力</td></tr>" +
                "<tr><td>2018/1/9<br>08:00-11:00</td><td>全市多云到晴</td><td>2～6℃</td><td>偏北风1～2级</td></tr>" +
                "</tbody>" +
                "</table>" +
                "<table class='weather-table'>" +
                "<thead><tr><td colspan='4'>婺城</td></tr></thead>" +
                "<tbody>" +
                "<tr><td>预报时段</td><td>天气</td><td>温度</td><td>风力</td></tr>" +
                "<tr><td>2018/1/9<br>08:00-11:00</td><td>晴到多云</td><td>2～6℃</td><td>偏西风1～2级</td></tr>" +
                "</tbody>" +
                "</table>" +
                "<table class='weather-table'>" +
                "<thead><tr><td colspan='4'>金东</td></tr></thead>" +
                "<tbody>" +
                "<tr><td>预报时段</td><td>天气</td><td>温度</td><td>风力</td></tr>" +
                "<tr><td>2018/1/9<br>08:00-11:00</td><td>晴到多云</td><td>2～6℃</td><td>偏西风1～2级</td></tr>" +
                "</tbody>" +
                "</table>" +
                "<table class='weather-table'>" +
                "<thead><tr><td colspan='4'>义乌</td></tr></thead>" +
                "<tbody>" +
                "<tr><td>预报时段</td><td>天气</td><td>温度</td><td>风力</td></tr>" +
                "<tr><td>2018/1/9<br>08:00-11:00</td><td>晴到多云</td><td>2～6℃</td><td>偏西风1～2级</td></tr>" +
                "</tbody>" +
                "</table>" +
                "<table class='weather-table'>" +
                "<thead><tr><td colspan='4'>东阳</td></tr></thead>" +
                "<tbody>" +
                "<tr><td>预报时段</td><td>天气</td><td>温度</td><td>风力</td></tr>" +
                "<tr><td>2018/1/9<br>08:00-11:00</td><td>晴到多云</td><td>2～6℃</td><td>偏西风1～2级</td></tr>" +
                "</tbody>" +
                "</table>" +
                "<table class='weather-table'>" +
                "<thead><tr><td colspan='4'>磐安</td></tr></thead>" +
                "<tbody>" +
                "<tr><td>预报时段</td><td>天气</td><td>温度</td><td>风力</td></tr>" +
                "<tr><td>2018/1/9<br>08:00-11:00</td><td>晴到多云</td><td>2～6℃</td><td>偏西风1～2级</td></tr>" +
                "</tbody>" +
                "</table>" +
                "<table class='weather-table'>" +
                "<thead><tr><td colspan='4'>武义</td></tr></thead>" +
                "<tbody>" +
                "<tr><td>预报时段</td><td>天气</td><td>温度</td><td>风力</td></tr>" +
                "<tr><td>2018/1/9<br>08:00-11:00</td><td>晴到多云</td><td>2～6℃</td><td>偏西风1～2级</td></tr>" +
                "</tbody>" +
                "</table>" +
                "<table class='weather-table'>" +
                "<thead><tr><td colspan='4'>永康</td></tr></thead>" +
                "<tbody>" +
                "<tr><td>预报时段</td><td>天气</td><td>温度</td><td>风力</td></tr>" +
                "<tr><td>2018/1/9<br>08:00-11:00</td><td>全市多云到晴。</td><td>2～6℃</td><td>偏西风1～2级</td></tr>" +
                "</tbody>" +
                "</table>" +
                "</div>",
                data: [{
                    content: ""
                }]
            }
        ]
    };
    return {
        $ui: ui,
        $oninit: function (v) {
            v.adjust();
            c.$selectItem('weather:list', '3h_weather');
            window.onresize = function () {
                $$('3h_weather').adjust();
                $$('3h_weather').resize();
            };
            data.$getThreeWeather().then(function (value) {
                var v = value.json();
                $$('3h_weather').define('data', [{content: v.all}]);
            });
        },
        $ondestroy: function () {
            window.onresize = null;
        }
    };
});