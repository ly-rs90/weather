define(['models/common', 'models/week_weather_data'], function (c, d) {
    var ui = {
        rows: [
            {height: 2},
            {
                view: 'template', scroll: 'y', id: 'week_weather', css: 'weather-48h',
                template: "<p class='h-week'>一周天气预报</p><div style='padding-left: 5px;min-height: 300px'>#content#</div><p class='h-week'>金华各县市区一周天气预报</p><div id='week_weather_container'>" +
                    "<table class='table-week'>" +
                        "<thead>" +
                            "<tr><td colspan='7'>浦江县[2018年01月24日06时发布]</td></tr>" +
                            "<tr><td>1月25日 星期四</td><td>1月26日 星期五</td><td>1月27日 星期六</td><td>1月28日 星期日</td><td>1月29日 星期一</td><td>1月30日 星期二</td><td>1月31日 星期三</td></tr>" +
                        "</thead>" +
                        "<tbody>" +
                            "<tr>" +
                                "<td><img src='static/images/weather_icon/小雨.gif'>&nbsp;<img src='static/images/weather_icon/雨夹雪_n.gif'><br>小雨转雨夹雪<br>1-6℃</td>" +
                                "<td><img src='static/images/weather_icon/小雨.gif'>&nbsp;<img src='static/images/weather_icon/雨夹雪_n.gif'><br>小雨转雨夹雪<br>-0.7-5℃</td>" +
                                "<td><img src='static/images/weather_icon/中雪-大雪.gif'>&nbsp;<img src='static/images/weather_icon/雨夹雪_n.gif'><br>中到大雪转雨夹雪<br>-1-3℃</td>" +
                                "<td><img src='static/images/weather_icon/中雨.gif'>&nbsp;<img src='static/images/weather_icon/中雨_n.gif'><br>小到中雨<br>0-4℃</td>" +
                                "<td><img src='static/images/weather_icon/中雨.gif'>&nbsp;<img src='static/images/weather_icon/小雪_n.gif'><br>小到中雨转小雪<br>-2-4℃</td>" +
                                "<td><img src='static/images/weather_icon/小雪.gif'>&nbsp;<img src='static/images/weather_icon/阴_n.gif'><br>小雪转阴<br>-4-4℃</td>" +
                                "<td><img src='static/images/weather_icon/多云.gif'>&nbsp;<img src='static/images/weather_icon/雨夹雪_n.gif'><br>多云转雨夹雪<br>-4-4℃</td>" +
                            "</tr>" +
                        "</tbody>" +
                    "</table>" +
                    "<table class='table-week'>" +
                        "<thead>" +
                            "<tr><td colspan='7'>兰溪市[2018年01月24日06时发布]</td></tr>" +
                            "<tr><td>1月25日 星期四</td><td>1月26日 星期五</td><td>1月27日 星期六</td><td>1月28日 星期日</td><td>1月29日 星期一</td><td>1月30日 星期二</td><td>1月31日 星期三</td></tr>" +
                        "</thead>" +
                        "<tbody>" +
                            "<tr>" +
                                "<td><img src='static/images/weather_icon/中雨.gif'>&nbsp;<img src='static/images/weather_icon/中雨_n.gif'><br>小雨转雨夹雪<br>1-6℃</td>" +
                                "<td><img src='static/images/weather_icon/中雨.gif'>&nbsp;<img src='static/images/weather_icon/中雨_n.gif'><br>小雨转雨夹雪<br>1-6℃</td>" +
                                "<td><img src='static/images/weather_icon/中雨.gif'>&nbsp;<img src='static/images/weather_icon/中雨_n.gif'><br>小雨转雨夹雪<br>1-6℃</td>" +
                                "<td><img src='static/images/weather_icon/中雨.gif'>&nbsp;<img src='static/images/weather_icon/中雨_n.gif'><br>小雨转雨夹雪<br>1-6℃</td>" +
                                "<td><img src='static/images/weather_icon/中雨.gif'>&nbsp;<img src='static/images/weather_icon/中雨_n.gif'><br>小雨转雨夹雪<br>1-6℃</td>" +
                                "<td><img src='static/images/weather_icon/中雨.gif'>&nbsp;<img src='static/images/weather_icon/中雨_n.gif'><br>小雨转雨夹雪<br>1-6℃</td>" +
                                "<td><img src='static/images/weather_icon/多云.gif'>&nbsp;<img src='static/images/weather_icon/中雨_n.gif'><br>小雨转雨夹雪<br>1-6℃</td>" +
                            "</tr>" +
                        "</tbody>" +
                    "</table>" +
                    "<table class='table-week'>" +
                        "<thead>" +
                            "<tr><td colspan='7'>婺城区[2018年01月24日06时发布]</td></tr>" +
                            "<tr><td>1月25日 星期四</td><td>1月26日 星期五</td><td>1月27日 星期六</td><td>1月28日 星期日</td><td>1月29日 星期一</td><td>1月30日 星期二</td><td>1月31日 星期三</td></tr>" +
                        "</thead>" +
                        "<tbody>" +
                            "<tr>" +
                                "<td><img src='static/images/weather_icon/中雨.gif'>&nbsp;<img src='static/images/weather_icon/中雨_n.gif'><br>小雨转雨夹雪<br>1-6℃</td>" +
                                "<td><img src='static/images/weather_icon/中雨.gif'>&nbsp;<img src='static/images/weather_icon/中雨_n.gif'><br>小雨转雨夹雪<br>1-6℃</td>" +
                                "<td><img src='static/images/weather_icon/中雨.gif'>&nbsp;<img src='static/images/weather_icon/中雨_n.gif'><br>小雨转雨夹雪<br>1-6℃</td>" +
                                "<td><img src='static/images/weather_icon/中雨.gif'>&nbsp;<img src='static/images/weather_icon/中雨_n.gif'><br>小雨转雨夹雪<br>1-6℃</td>" +
                                "<td><img src='static/images/weather_icon/中雨.gif'>&nbsp;<img src='static/images/weather_icon/中雨_n.gif'><br>小雨转雨夹雪<br>1-6℃</td>" +
                                "<td><img src='static/images/weather_icon/中雨.gif'>&nbsp;<img src='static/images/weather_icon/中雨_n.gif'><br>小雨转雨夹雪<br>1-6℃</td>" +
                                "<td><img src='static/images/weather_icon/多云.gif'>&nbsp;<img src='static/images/weather_icon/中雨_n.gif'><br>小雨转雨夹雪<br>1-6℃</td>" +
                            "</tr>" +
                        "</tbody>" +
                    "</table>" +
                    "<table class='table-week'>" +
                        "<thead>" +
                            "<tr><td colspan='7'>武义县[2018年01月24日06时发布]</td></tr>" +
                            "<tr><td>1月25日 星期四</td><td>1月26日 星期五</td><td>1月27日 星期六</td><td>1月28日 星期日</td><td>1月29日 星期一</td><td>1月30日 星期二</td><td>1月31日 星期三</td></tr>" +
                        "</thead>" +
                        "<tbody>" +
                            "<tr>" +
                                "<td><img src='static/images/weather_icon/中雨.gif'>&nbsp;<img src='static/images/weather_icon/中雨_n.gif'><br>小雨转雨夹雪<br>1-6℃</td>" +
                                "<td><img src='static/images/weather_icon/中雨.gif'>&nbsp;<img src='static/images/weather_icon/中雨_n.gif'><br>小雨转雨夹雪<br>1-6℃</td>" +
                                "<td><img src='static/images/weather_icon/中雨.gif'>&nbsp;<img src='static/images/weather_icon/中雨_n.gif'><br>小雨转雨夹雪<br>1-6℃</td>" +
                                "<td><img src='static/images/weather_icon/中雨.gif'>&nbsp;<img src='static/images/weather_icon/中雨_n.gif'><br>小雨转雨夹雪<br>1-6℃</td>" +
                                "<td><img src='static/images/weather_icon/中雨.gif'>&nbsp;<img src='static/images/weather_icon/中雨_n.gif'><br>小雨转雨夹雪<br>1-6℃</td>" +
                                "<td><img src='static/images/weather_icon/中雨.gif'>&nbsp;<img src='static/images/weather_icon/中雨_n.gif'><br>小雨转雨夹雪<br>1-6℃</td>" +
                                "<td><img src='static/images/weather_icon/多云.gif'>&nbsp;<img src='static/images/weather_icon/中雨_n.gif'><br>小雨转雨夹雪<br>1-6℃</td>" +
                            "</tr>" +
                        "</tbody>" +
                    "</table>" +
                    "<table class='table-week'>" +
                        "<thead>" +
                            "<tr><td colspan='7'>金东区[2018年01月24日06时发布]</td></tr>" +
                            "<tr><td>1月25日 星期四</td><td>1月26日 星期五</td><td>1月27日 星期六</td><td>1月28日 星期日</td><td>1月29日 星期一</td><td>1月30日 星期二</td><td>1月31日 星期三</td></tr>" +
                        "</thead>" +
                        "<tbody>" +
                            "<tr>" +
                                "<td><img src='static/images/weather_icon/中雨.gif'>&nbsp;<img src='static/images/weather_icon/中雨_n.gif'><br>小雨转雨夹雪<br>1-6℃</td>" +
                                "<td><img src='static/images/weather_icon/中雨.gif'>&nbsp;<img src='static/images/weather_icon/中雨_n.gif'><br>小雨转雨夹雪<br>1-6℃</td>" +
                                "<td><img src='static/images/weather_icon/中雨.gif'>&nbsp;<img src='static/images/weather_icon/中雨_n.gif'><br>小雨转雨夹雪<br>1-6℃</td>" +
                                "<td><img src='static/images/weather_icon/中雨.gif'>&nbsp;<img src='static/images/weather_icon/中雨_n.gif'><br>小雨转雨夹雪<br>1-6℃</td>" +
                                "<td><img src='static/images/weather_icon/中雨.gif'>&nbsp;<img src='static/images/weather_icon/中雨_n.gif'><br>小雨转雨夹雪<br>1-6℃</td>" +
                                "<td><img src='static/images/weather_icon/中雨.gif'>&nbsp;<img src='static/images/weather_icon/中雨_n.gif'><br>小雨转雨夹雪<br>1-6℃</td>" +
                                "<td><img src='static/images/weather_icon/多云.gif'>&nbsp;<img src='static/images/weather_icon/中雨_n.gif'><br>小雨转雨夹雪<br>1-6℃</td>" +
                            "</tr>" +
                        "</tbody>" +
                    "</table>" +
                    "<table class='table-week'>" +
                        "<thead>" +
                            "<tr><td colspan='7'>义乌市[2018年01月24日06时发布]</td></tr>" +
                            "<tr><td>1月25日 星期四</td><td>1月26日 星期五</td><td>1月27日 星期六</td><td>1月28日 星期日</td><td>1月29日 星期一</td><td>1月30日 星期二</td><td>1月31日 星期三</td></tr>" +
                        "</thead>" +
                        "<tbody>" +
                            "<tr>" +
                                "<td><img src='static/images/weather_icon/中雨.gif'>&nbsp;<img src='static/images/weather_icon/中雨_n.gif'><br>小雨转雨夹雪<br>1-6℃</td>" +
                                "<td><img src='static/images/weather_icon/中雨.gif'>&nbsp;<img src='static/images/weather_icon/中雨_n.gif'><br>小雨转雨夹雪<br>1-6℃</td>" +
                                "<td><img src='static/images/weather_icon/中雨.gif'>&nbsp;<img src='static/images/weather_icon/中雨_n.gif'><br>小雨转雨夹雪<br>1-6℃</td>" +
                                "<td><img src='static/images/weather_icon/中雨.gif'>&nbsp;<img src='static/images/weather_icon/中雨_n.gif'><br>小雨转雨夹雪<br>1-6℃</td>" +
                                "<td><img src='static/images/weather_icon/中雨.gif'>&nbsp;<img src='static/images/weather_icon/中雨_n.gif'><br>小雨转雨夹雪<br>1-6℃</td>" +
                                "<td><img src='static/images/weather_icon/中雨.gif'>&nbsp;<img src='static/images/weather_icon/中雨_n.gif'><br>小雨转雨夹雪<br>1-6℃</td>" +
                                "<td><img src='static/images/weather_icon/多云.gif'>&nbsp;<img src='static/images/weather_icon/中雨_n.gif'><br>小雨转雨夹雪<br>1-6℃</td>" +
                            "</tr>" +
                        "</tbody>" +
                    "</table>" +
                    "<table class='table-week'>" +
                        "<thead>" +
                            "<tr><td colspan='7'>永康市[2018年01月24日06时发布]</td></tr>" +
                            "<tr><td>1月25日 星期四</td><td>1月26日 星期五</td><td>1月27日 星期六</td><td>1月28日 星期日</td><td>1月29日 星期一</td><td>1月30日 星期二</td><td>1月31日 星期三</td></tr>" +
                        "</thead>" +
                        "<tbody>" +
                            "<tr>" +
                                "<td><img src='static/images/weather_icon/中雨.gif'>&nbsp;<img src='static/images/weather_icon/中雨_n.gif'><br>小雨转雨夹雪<br>1-6℃</td>" +
                                "<td><img src='static/images/weather_icon/中雨.gif'>&nbsp;<img src='static/images/weather_icon/中雨_n.gif'><br>小雨转雨夹雪<br>1-6℃</td>" +
                                "<td><img src='static/images/weather_icon/中雨.gif'>&nbsp;<img src='static/images/weather_icon/中雨_n.gif'><br>小雨转雨夹雪<br>1-6℃</td>" +
                                "<td><img src='static/images/weather_icon/中雨.gif'>&nbsp;<img src='static/images/weather_icon/中雨_n.gif'><br>小雨转雨夹雪<br>1-6℃</td>" +
                                "<td><img src='static/images/weather_icon/中雨.gif'>&nbsp;<img src='static/images/weather_icon/中雨_n.gif'><br>小雨转雨夹雪<br>1-6℃</td>" +
                                "<td><img src='static/images/weather_icon/中雨.gif'>&nbsp;<img src='static/images/weather_icon/中雨_n.gif'><br>小雨转雨夹雪<br>1-6℃</td>" +
                                "<td><img src='static/images/weather_icon/多云.gif'>&nbsp;<img src='static/images/weather_icon/中雨_n.gif'><br>小雨转雨夹雪<br>1-6℃</td>" +
                            "</tr>" +
                        "</tbody>" +
                    "</table>" +
                    "<table class='table-week'>" +
                        "<thead>" +
                            "<tr><td colspan='7'>东阳市[2018年01月24日06时发布]</td></tr>" +
                            "<tr><td>1月25日 星期四</td><td>1月26日 星期五</td><td>1月27日 星期六</td><td>1月28日 星期日</td><td>1月29日 星期一</td><td>1月30日 星期二</td><td>1月31日 星期三</td></tr>" +
                        "</thead>" +
                        "<tbody>" +
                            "<tr>" +
                                "<td><img src='static/images/weather_icon/中雨.gif'>&nbsp;<img src='static/images/weather_icon/中雨_n.gif'><br>小雨转雨夹雪<br>1-6℃</td>" +
                                "<td><img src='static/images/weather_icon/中雨.gif'>&nbsp;<img src='static/images/weather_icon/中雨_n.gif'><br>小雨转雨夹雪<br>1-6℃</td>" +
                                "<td><img src='static/images/weather_icon/中雨.gif'>&nbsp;<img src='static/images/weather_icon/中雨_n.gif'><br>小雨转雨夹雪<br>1-6℃</td>" +
                                "<td><img src='static/images/weather_icon/中雨.gif'>&nbsp;<img src='static/images/weather_icon/中雨_n.gif'><br>小雨转雨夹雪<br>1-6℃</td>" +
                                "<td><img src='static/images/weather_icon/中雨.gif'>&nbsp;<img src='static/images/weather_icon/中雨_n.gif'><br>小雨转雨夹雪<br>1-6℃</td>" +
                                "<td><img src='static/images/weather_icon/中雨.gif'>&nbsp;<img src='static/images/weather_icon/中雨_n.gif'><br>小雨转雨夹雪<br>1-6℃</td>" +
                                "<td><img src='static/images/weather_icon/多云.gif'>&nbsp;<img src='static/images/weather_icon/中雨_n.gif'><br>小雨转雨夹雪<br>1-6℃</td>" +
                            "</tr>" +
                        "</tbody>" +
                    "</table>" +
                    "<table class='table-week'>" +
                        "<thead>" +
                            "<tr><td colspan='7'>磐安县[2018年01月24日06时发布]</td></tr>" +
                            "<tr><td>1月25日 星期四</td><td>1月26日 星期五</td><td>1月27日 星期六</td><td>1月28日 星期日</td><td>1月29日 星期一</td><td>1月30日 星期二</td><td>1月31日 星期三</td></tr>" +
                        "</thead>" +
                        "<tbody>" +
                            "<tr>" +
                                "<td><img src='static/images/weather_icon/中雨.gif'>&nbsp;<img src='static/images/weather_icon/中雨_n.gif'><br>小雨转雨夹雪<br>1-6℃</td>" +
                                "<td><img src='static/images/weather_icon/中雨.gif'>&nbsp;<img src='static/images/weather_icon/中雨_n.gif'><br>小雨转雨夹雪<br>1-6℃</td>" +
                                "<td><img src='static/images/weather_icon/中雨.gif'>&nbsp;<img src='static/images/weather_icon/中雨_n.gif'><br>小雨转雨夹雪<br>1-6℃</td>" +
                                "<td><img src='static/images/weather_icon/中雨.gif'>&nbsp;<img src='static/images/weather_icon/中雨_n.gif'><br>小雨转雨夹雪<br>1-6℃</td>" +
                                "<td><img src='static/images/weather_icon/中雨.gif'>&nbsp;<img src='static/images/weather_icon/中雨_n.gif'><br>小雨转雨夹雪<br>1-6℃</td>" +
                                "<td><img src='static/images/weather_icon/中雨.gif'>&nbsp;<img src='static/images/weather_icon/中雨_n.gif'><br>小雨转雨夹雪<br>1-6℃</td>" +
                                "<td><img src='static/images/weather_icon/多云.gif'>&nbsp;<img src='static/images/weather_icon/中雨_n.gif'><br>小雨转雨夹雪<br>1-6℃</td>" +
                            "</tr>" +
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
            c.$selectItem('weather:list', 'week_weather');
            d.$getWeek().then(function (value) {
                var v = value.json();
                $$('week_weather').define('data', [{content: v.all}]);
            });
        }
    };
});