define(['models/common'], function (c) {
    var ui = {
        rows: [
            {height: 2},
            {
                view: 'template', scroll: 'y', id: '48h_weather', css: 'weather-48h',
                template: "<p class='h-week'>一周天气预报</p><div style='padding-left: 5px'>#content#</div><p class='h-week'>金华各县市区一周天气预报</p><div id='week_weather_container'>" +
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
                    content: "<p>金华市气象台2018年01月23日10时发布的一周趋势预报：</p>" +
                        "<p>---------------------------------------------------------------------</p>" +
                        "<p>天气趋势预报：预计未来七天冷空气和暖湿气流均较活跃，多阴雨天气，气温下降，其中24日夜里起多低温雨雪天气。</p>" +
                        "<p>具体分日预报：</p>" +
                        "<p>01月24日（星期三）：白天阴有时有小雨，夜里阴有雨，北部山区有雨夹雪，温度4～7℃，偏东风2～3级</p>" +
                        "<p>01月25日（星期四）：白天阴有时有小雨，夜里转雨夹雪或雪，山区有雪，雨雪量中等，温度4～7℃，偏东风2～3级</p>" +
                        "<p>01月26日（星期五）：阴有中到大雪，山区有大到暴雪，温度1～3℃，偏东风1～2级</p>" +
                        "<p>01月27日（星期六）：阴有小到中雨，温度2～4℃，偏东风1～2级</p>" +
                        "<p>01月28日（星期天）：白天阴有小到中雨，夜里转小雨夹雪或雪，温度2～4℃，偏东风2～3级</p>" +
                        "<p>01月29日（星期一）：雨雪止转阴到多云，温度0～4℃，偏东风2～3级</p>" +
                        "<p>01月30日（星期二）：多云到晴，温度-2～4℃，偏东风1～2级</p>" +
                        "<p>---------------------------------------------------------------------</p>" +
                        "<p>预报：徐亚钦 签发：张行才</p>"
                }]
            }
        ]
    };
    return {
        $ui: ui,
        $oninit: function (v) {
            v.adjust();
            c.$selectItem('weather:list', 'week_weather');
        }
    };
});