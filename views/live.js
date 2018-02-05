/**
 * Created by lenovo on 2017/5/17.
 */
define(['models/live_data', 'models/common'], function (d, c) {
    var ui = {
        rows: [
            {height: 2},
            {
                gravity: 3.2, minHeight: 385,
                cols: [
                    {
                        rows: [
                            {template: '历史上今天', autoheight: 1, width: 300, css: 'template-header'},
                            {
                                css: 'template-panel',
                                minHeight: 150,
                                template: "<div id='history_container'>" +
                                "<div><div>平均温度：#tmp_avg#</div><div>#time_avg#</div></div>" +
                                "<div><div>最高温度：#tmp_max#</div><div>#time_max#</div></div>" +
                                "<div><div>最低温度：#tmp_min#</div><div>#time_min#</div></div>" +
                                "<div><div>最大雨量：#water#</div><div>#time_water#</div></div>" +
                                "</div>",
                                data: [
                                    {
                                        tmp_avg: '5.1℃', tmp_max: '18℃', tmp_min: '-6.4℃', water: '15.3mm',
                                        time_avg: '1953年—2016年', time_max: '1979年01月08日', time_min: '1963年01月08日',
                                        time_water: '1989年01月08日'
                                    }
                                ]
                            },
                            {}
                        ]
                    },
                    {width: 5},
                    {
                        rows: [
                            {template: '天气实况', autoheight: 1, css: 'template-header'},
                            {
                                id: 'live:temp',
                                template: "<div id='live_container'>" +
                                "<div id='map'></div>" +
                                "<div id='live_area_container'>" +
                                    "<div id='live_area'>金华</div>" +
                                    "<div>" +
                                        "<div style='width:50%;float:left;text-align: center'>" +
                                            "<p style='margin: 5px'>温度</p>" +
                                            "<img src='static/images/tmpr/0-15.png' style='width:47px;height:110px'>" +
                                            "<span style='display:inline-block;position:relative;top:-55px'>1.5℃</span>" +
                                        "</div>" +
                                        "<div style='width:50%;float:right;text-align: center'>" +
                                            "<p style='margin: 5px'>风速</p>" +
                                            "<img src='static/images/wind/ESE.png' style='display: block;margin: 0 auto'>" +
                                            "<span style='display:inline-block;position:relative;top:-65px'>4.8m/s</span>" +
                                        "</div>" +
                                    "</div>" +
                                    "<div style='flex:1;display:flex;align-items:center;justify-content:center'>" +
                                        "<table class='live-table'>" +
                                            "<tr><td>气压</td><td>1018.7hPa</td></tr>" +
                                            "<tr><td>能见度</td><td>6193m</td></tr>" +
                                            "<tr><td>小时雨量</td><td>0.1mm</td></tr>" +
                                            "<tr><td>相对湿度</td><td>95%</td></tr>" +
                                            "<tr><td colspan='2'>监测时间：2018年01月25日09时</td></tr>" +
                                        "</table>" +
                                    "</div>" +
                                "</div>" +
                                "</div>",
                                data: [{area: '金华'}]
                            },
                            {
                                cols: [
                                    {
                                        width: 360,
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
                                        template: '最新整点实况气温：3.8℃&nbsp;最高：3.9℃&nbsp;最低：1.5℃', height: 39, borderless: 1
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {height: 5},
            {
                // 图
                view: 'template', template: '', id: 'live:chart', gravity: 2
            }
        ]
    };
    var e = undefined;
    var e_map;
    return {
        $ui: ui,
        $oninit: function (v) {
            v.adjust();
            c.$selectItem('weather:list', 'live');
            e_map = echarts.init(document.getElementById('map'));
            e = echarts.init($$('live:chart').getNode());
            c.$drawChart(e_map, d.$option_map);
            c.$drawChart(e, d.$option_temp);
            window.onresize = function () {
                e.resize();
                e_map.resize();
            };
            e_map.on('click', function (p) {
                var area = document.getElementById('live_area');
                area.innerText = p.name;
            });
        },
        $ondestroy: function () {
            if (e){
                e.dispose();
                e = undefined;
            }
            if (e_map){
                e_map.dispose();
                e_map = undefined;
            }
        }
    };
});