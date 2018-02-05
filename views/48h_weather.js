define(['models/common'], function (c) {
    var ui = {
        rows: [
            {height: 2},
            {
                view: 'template', scroll: 'y', id: '48h_weather', css: 'weather-48h',
                template: "<p class='h-48'>48小时天气预报</p><div style='padding-left: 5px'>#content#</div><p class='h-48'>金华各县市区48小时天气预报</p><div id='weather_container'>" +
                    "<table class='table-48'>" +
                        "<thead>" +
                            "<tr><td colspan='4'>浦江 [2018年01月23日16时发布]</td></tr>" +
                            "<tr><td>预报时段</td><td colspan='2'>天气</td><td>温度</td></tr>" +
                        "</thead>" +
                        "<tbody>" +
                            "<tr><td>今天夜里</td><td><img src='static/images/weather_icon/中雨_n.gif'></td><td>小fdgad雨</td><td rowspan='2'>2.0-6.0℃</td></tr>" +
                            "<tr><td>明天白天</td><td><img src='static/images/weather_icon/大雨.gif'></td><td>小雨</td></tr>" +
                            "<tr><td>明天夜里</td><td><img src='static/images/weather_icon/中雪_n.gif'></td><td>小雨</td><td rowspan='2'>2.0-5.0℃</td></tr>" +
                            "<tr><td>后天白天</td><td><img src='static/images/weather_icon/大雪.gif'></td><td>小雨</td></tr>" +
                        "</tbody>" +
                    "</table>" +
                    "<table class='table-48'>" +
                        "<thead>" +
                            "<tr><td colspan='4'>兰溪 [2018年01月23日16时发布]</td></tr>" +
                            "<tr><td>预报时段</td><td colspan='2'>天气</td><td>温度</td></tr>" +
                        "</thead>" +
                        "<tbody>" +
                            "<tr><td>今天夜里</td><td><img src='static/images/weather_icon/中雨_n.gif'></td><td>小fdgad雨</td><td rowspan='2'>2.0-6.0℃</td></tr>" +
                            "<tr><td>明天白天</td><td><img src='static/images/weather_icon/大雨.gif'></td><td>小雨</td></tr>" +
                            "<tr><td>明天夜里</td><td><img src='static/images/weather_icon/中雪_n.gif'></td><td>小雨</td><td rowspan='2'>2.0-5.0℃</td></tr>" +
                            "<tr><td>后天白天</td><td><img src='static/images/weather_icon/大雪.gif'></td><td>小雨</td></tr>" +
                        "</tbody>" +
                    "</table>" +
                    "<table class='table-48'>" +
                        "<thead>" +
                            "<tr><td colspan='4'>金东 [2018年01月23日16时发布]</td></tr>" +
                            "<tr><td>预报时段</td><td colspan='2'>天气</td><td>温度</td></tr>" +
                        "</thead>" +
                        "<tbody>" +
                            "<tr><td>今天夜里</td><td><img src='static/images/weather_icon/中雨_n.gif'></td><td>小fdgad雨</td><td rowspan='2'>2.0-6.0℃</td></tr>" +
                            "<tr><td>明天白天</td><td><img src='static/images/weather_icon/大雨.gif'></td><td>小雨</td></tr>" +
                            "<tr><td>明天夜里</td><td><img src='static/images/weather_icon/中雪_n.gif'></td><td>小雨</td><td rowspan='2'>2.0-5.0℃</td></tr>" +
                            "<tr><td>后天白天</td><td><img src='static/images/weather_icon/大雪.gif'></td><td>小雨</td></tr>" +
                        "</tbody>" +
                    "</table>" +
                    "<table class='table-48'>" +
                        "<thead>" +
                            "<tr><td colspan='4'>婺城 [2018年01月23日16时发布]</td></tr>" +
                            "<tr><td>预报时段</td><td colspan='2'>天气</td><td>温度</td></tr>" +
                        "</thead>" +
                        "<tbody>" +
                            "<tr><td>今天夜里</td><td><img src='static/images/weather_icon/中雨_n.gif'></td><td>小fdgad雨</td><td rowspan='2'>2.0-6.0℃</td></tr>" +
                            "<tr><td>明天白天</td><td><img src='static/images/weather_icon/大雨.gif'></td><td>小雨</td></tr>" +
                            "<tr><td>明天夜里</td><td><img src='static/images/weather_icon/中雪_n.gif'></td><td>小雨</td><td rowspan='2'>2.0-5.0℃</td></tr>" +
                            "<tr><td>后天白天</td><td><img src='static/images/weather_icon/大雪.gif'></td><td>小雨</td></tr>" +
                        "</tbody>" +
                    "</table>" +
                    "<table class='table-48'>" +
                        "<thead>" +
                            "<tr><td colspan='4'>义乌 [2018年01月23日16时发布]</td></tr>" +
                            "<tr><td>预报时段</td><td colspan='2'>天气</td><td>温度</td></tr>" +
                        "</thead>" +
                        "<tbody>" +
                            "<tr><td>今天夜里</td><td><img src='static/images/weather_icon/中雨_n.gif'></td><td>小fdgad雨</td><td rowspan='2'>2.0-6.0℃</td></tr>" +
                            "<tr><td>明天白天</td><td><img src='static/images/weather_icon/大雨.gif'></td><td>小雨</td></tr>" +
                            "<tr><td>明天夜里</td><td><img src='static/images/weather_icon/中雪_n.gif'></td><td>小雨</td><td rowspan='2'>2.0-5.0℃</td></tr>" +
                            "<tr><td>后天白天</td><td><img src='static/images/weather_icon/大雪.gif'></td><td>小雨</td></tr>" +
                        "</tbody>" +
                    "</table>" +
                    "<table class='table-48'>" +
                        "<thead>" +
                            "<tr><td colspan='4'>东阳 [2018年01月23日16时发布]</td></tr>" +
                            "<tr><td>预报时段</td><td colspan='2'>天气</td><td>温度</td></tr>" +
                        "</thead>" +
                        "<tbody>" +
                            "<tr><td>今天夜里</td><td><img src='static/images/weather_icon/中雨_n.gif'></td><td>小fdgad雨</td><td rowspan='2'>2.0-6.0℃</td></tr>" +
                            "<tr><td>明天白天</td><td><img src='static/images/weather_icon/大雨.gif'></td><td>小雨</td></tr>" +
                            "<tr><td>明天夜里</td><td><img src='static/images/weather_icon/中雪_n.gif'></td><td>小雨</td><td rowspan='2'>2.0-5.0℃</td></tr>" +
                            "<tr><td>后天白天</td><td><img src='static/images/weather_icon/大雪.gif'></td><td>小雨</td></tr>" +
                        "</tbody>" +
                    "</table>" +
                    "<table class='table-48'>" +
                        "<thead>" +
                            "<tr><td colspan='4'>磐安 [2018年01月23日16时发布]</td></tr>" +
                            "<tr><td>预报时段</td><td colspan='2'>天气</td><td>温度</td></tr>" +
                        "</thead>" +
                        "<tbody>" +
                            "<tr><td>今天夜里</td><td><img src='static/images/weather_icon/中雨_n.gif'></td><td>小fdgad雨</td><td rowspan='2'>2.0-6.0℃</td></tr>" +
                            "<tr><td>明天白天</td><td><img src='static/images/weather_icon/大雨.gif'></td><td>小雨</td></tr>" +
                            "<tr><td>明天夜里</td><td><img src='static/images/weather_icon/中雪_n.gif'></td><td>小雨</td><td rowspan='2'>2.0-5.0℃</td></tr>" +
                            "<tr><td>后天白天</td><td><img src='static/images/weather_icon/大雪.gif'></td><td>小雨</td></tr>" +
                        "</tbody>" +
                    "</table>" +
                    "<table class='table-48'>" +
                        "<thead>" +
                            "<tr><td colspan='4'>武义 [2018年01月23日16时发布]</td></tr>" +
                            "<tr><td>预报时段</td><td colspan='2'>天气</td><td>温度</td></tr>" +
                        "</thead>" +
                        "<tbody>" +
                            "<tr><td>今天夜里</td><td><img src='static/images/weather_icon/中雨_n.gif'></td><td>小fdgad雨</td><td rowspan='2'>2.0-6.0℃</td></tr>" +
                            "<tr><td>明天白天</td><td><img src='static/images/weather_icon/大雨.gif'></td><td>小雨</td></tr>" +
                            "<tr><td>明天夜里</td><td><img src='static/images/weather_icon/中雪_n.gif'></td><td>小雨</td><td rowspan='2'>2.0-5.0℃</td></tr>" +
                            "<tr><td>后天白天</td><td><img src='static/images/weather_icon/大雪.gif'></td><td>小雨</td></tr>" +
                        "</tbody>" +
                    "</table>" +
                    "<table class='table-48'>" +
                        "<thead>" +
                            "<tr><td colspan='4'>永康 [2018年01月23日16时发布]</td></tr>" +
                            "<tr><td>预报时段</td><td colspan='2'>天气</td><td>温度</td></tr>" +
                        "</thead>" +
                        "<tbody>" +
                            "<tr><td>今天夜里</td><td><img src='static/images/weather_icon/中雨_n.gif'></td><td>小fdgad雨</td><td rowspan='2'>2.0-6.0℃</td></tr>" +
                            "<tr><td>明天白天</td><td><img src='static/images/weather_icon/大雨.gif'></td><td>小雨</td></tr>" +
                            "<tr><td>明天夜里</td><td><img src='static/images/weather_icon/中雪_n.gif'></td><td>小雨</td><td rowspan='2'>2.0-5.0℃</td></tr>" +
                            "<tr><td>后天白天</td><td><img src='static/images/weather_icon/大雪.gif'></td><td>小雨</td></tr>" +
                        "</tbody>" +
                    "</table>" +
                "</div>",
                data: [{
                    content: "<p>金华市气象台发布的天气预报</p>" +
                        "<p>---------------------------------------------------------------------</p>" +
                        "<p>发布时间：2018年01月23日16时</p>" +
                        "<p>冷空气消息：受北方冷空气不断扩散南下影响，24日起我市将转入持续低温阴雨雪天气，其中25夜里至26日阴有中到大雪，山区大到暴雪，25～29日我市平原地区最低气温0～2℃，山区-1～-3℃，希有关各方面注意防范。</p>" +
                        "<p>天气预报：今天傍晚到夜里阴转阴有时有小雨；明天白天阴有时有小雨，夜里阴有小雨，北部山区有雨夹雪；后天白天阴有小雨，夜里转雨夹雪或雪，山区有雪，雨雪量中等。</p>" +
                        "<p>风的预报：偏东风2～3级；</p>" +
                        "<p>降水概率：今天夜里降水概率60%，明天白天降水概率60%；</p>" +
                        "<p>气温预报：明天早晨最低温度4～5℃，明天白天最高温度6～7℃；</p>" +
                        "<p>---------------------------------------------------------------------</p>" +
                        "<p>预报员代号：41号</p>"
                }]
            }
        ]
    };
    return {
        $ui: ui,
        $oninit: function (v) {
            v.adjust();
            c.$selectItem('weather:list', '48h_weather');
        }
    };
});