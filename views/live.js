/**
 * Created by lenovo on 2017/5/17.
 */
define(['models/live_data', 'models/common'], function (d, c) {
    var ui = {
        rows: [
            {height: 5},
            {
                height: 260,
                cols: [
                    {
                        id: 'live:weather',
                        width: 350,
                        view: 'template',
                        template: function (obj) {
                            var div_time = "<div style='font-size:12px;height:40px;line-height:40px'>" + obj.time + "&nbsp;天气实况</div>";
                            var div_temp = "<div style='height:100px'>" +
                                    "<div style='line-height:100px;font-size:100px;color:#dc5d09;width:49%;text-align:right;float:left' class='webix_icon fa-thermometer-2'>" +
                                    "</div>" +
                                    "<div style='width:49%;height:100px;float:right;margin-left:2%;font-size:50px;line-height:124px;color:#3189cc'>" +
                                        obj.temp + "<sup style='font-size:20px'>℃</sup><sub style='font-size:17px;margin-left:-16px;position:absolute;margin-top:17px'>晴</sub>" +
                                    "</div>" +
                                "</div>";

                            var div_water_wind = "<div style='height:50px'>" +
                                    "<div style='width:50%;float:left;text-align:center;line-height:50px'>" +
                                        "<span class='webix_icon fa-tint' style='color:#2064cc'></span> 相对湿度：" + obj.water +
                                    "</div>" +
                                    "<div style='width:50%;float:right;text-align:center;line-height:50px'>" +
                                        "<span class='webix_icon fa-compass' style='color:#ccc912'></span>" + obj.wind +
                                    "</div>" +
                                "</div>";

                            var div_air_pm = "<div style='height:50px'>" +
                                    "<div style='width:50%;float:left;text-align:center;line-height:50px'>" +
                                        "<span class='webix_icon fa-star' style='color:#2acc0e'></span> 空气质量：" + obj.air +
                                    "</div>" +
                                    "<div style='width:50%;float:right;text-align:center;line-height:50px'>" +
                                        "<span class='webix_icon fa-warning' style='color:#cc2606'></span>PM：" + obj.pm +
                                    "</div>" +
                                "</div>";

                            return div_time + div_temp + div_water_wind + div_air_pm;
                        },
                        data: [
                            {time: '14:25', temp: 33, water: '53%', wind: '南风 0.2m/s', air: '65良', pm: 4.2}
                        ]
                    },
                    {width: 5},
                    {template: '今日天气概况:<p>今日天气以高温为主。</p>'},
                    {width: 5},
                    {template: '注意事项:<p>不宜外出，以防中暑。</p>'}
                ]
            },
            {height: 5},
            {
                view: 'segmented', id: 'live:seg', value: 'temp', inputWidth: 300, css: 'white-bg live_seg',
                options: [
                    {id: 'temp', value: '温度'},
                    {id: 'wind', value: '风速'},
                    {id: 'pm', value: 'PM值'}
                ],
                on: {
                    'onAfterTabClick': function (id) {
                        if ('temp' === id){
                            c.$drawChart(e, d.$option_temp);
                        }else if ('wind' === id){
                            c.$drawChart(e, d.$option_wind);
                        }else{
                            c.$drawChart(e, d.$option_pm);
                        }
                    }
                }
            },
            {
                // 图
                view: 'template', template: '', css: 'template_no_top', id: 'live:chart'
            }
        ]
    };
    var e = undefined;
    return {
        $ui: ui,
        $oninit: function (v) {
            v.adjust();
            c.$selectItem('weather:list', 'live');

            e = echarts.init($$('live:chart').getNode());
            c.$drawChart(e, d.$option_temp);
        },
        $ondestroy: function () {
            if (e){
                e.dispose();
                e = undefined;
            }
        }
    };
});