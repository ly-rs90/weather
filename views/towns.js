define(['models/common', 'models/towns_data'],function (c, d) {
    var ui = {
        rows: [
            {height: 2},
            {
                cols: [
                    {view: 'template', template: '', id: 'towns:map', borderless: 1, gravity: 0.8},
                    {width: 10},
                    {
                        rows: [
                            {
                                view: 'tabbar', value: 'chart-48', multiview: true, optionWidth: 120, css: 'white-bg',
                                id: 'towns:tab1',
                                options: [
                                    {id: 'chart-48', value: '未来48小时'},
                                    {id: 'chart-week', value: '未来7天'}
                                ]
                            },
                            {
                                animate: {type: 'flip', subtype: 'horizontal'},
                                cells: [
                                    {view: 'template', template: '', borderless: 1, id: 'chart-48'},
                                    {view: 'template', template: '', borderless: 1, id: 'chart-week'}
                                ]
                            }
                        ]
                    }
                ]
            },
            {height: 5},
            {
                rows: [
                    {
                        view: 'tabbar', css: 'white-bg', optionWidth: 120, value: 'three_tb', multiview: true,
                        id: 'towns:tab2',
                        options: [
                            {id: 'three_tb', value: '逐3小时预报'},
                            {id: 'one_week_tb', value: '一周预报'}
                        ]
                    },
                    {
                        animate: {type: 'flip', subtype: 'vertical'},
                        cells: [
                            {
                                view: 'template', borderless: 1, id: 'three_tb',
                                template: "<table class='table-one-week'>" +
                                "<thead><tr><td>日期</td><td colspan='2'>02-27</td><td colspan='8'>02-28</td><td colspan='4'>03-01</td></tr></thead>" +
                                "<tbody>" +
                                "<tr>" +
                                "<td>时间</td>" +
                                "<td>20:00</td>" +
                                "<td>23:00</td>" +
                                "<td>02:00</td>" +
                                "<td>05:00</td>" +
                                "<td>08:00</td>" +
                                "<td>11:00</td>" +
                                "<td>14:00</td>" +
                                "<td>17:00</td>" +
                                "<td>20:00</td>" +
                                "<td>23:00</td>" +
                                "<td>02:00</td>" +
                                "<td>05:00</td>" +
                                "<td>08:00</td>" +
                                "<td>11:00</td>" +
                                "</tr>" +
                                "<tr>" +
                                "<td>天气状况</td>" +
                                "<td><img src='/static/images/weather_icon/晴.gif'></td>" +
                                "<td><img src='/static/images/weather_icon/晴.gif'></td>" +
                                "<td><img src='/static/images/weather_icon/晴.gif'></td>" +
                                "<td><img src='/static/images/weather_icon/晴.gif'></td>" +
                                "<td><img src='/static/images/weather_icon/晴.gif'></td>" +
                                "<td><img src='/static/images/weather_icon/晴.gif'></td>" +
                                "<td><img src='/static/images/weather_icon/晴.gif'></td>" +
                                "<td><img src='/static/images/weather_icon/晴.gif'></td>" +
                                "<td><img src='/static/images/weather_icon/晴.gif'></td>" +
                                "<td><img src='/static/images/weather_icon/晴.gif'></td>" +
                                "<td><img src='/static/images/weather_icon/晴.gif'></td>" +
                                "<td><img src='/static/images/weather_icon/晴.gif'></td>" +
                                "<td><img src='/static/images/weather_icon/晴.gif'></td>" +
                                "<td><img src='/static/images/weather_icon/晴.gif'></td>" +
                                "</tr>" +
                                "<tr>" +
                                "<td>温度(℃)</td>" +
                                "<td>14.9</td>" +
                                "<td>12.8</td>" +
                                "<td>14.8</td>" +
                                "<td>14.8</td>" +
                                "<td>14.8</td>" +
                                "<td>14.8</td>" +
                                "<td>14.8</td>" +
                                "<td>14.8</td>" +
                                "<td>13.8</td>" +
                                "<td>14.8</td>" +
                                "<td>14.8</td>" +
                                "<td>14.8</td>" +
                                "<td>14.8</td>" +
                                "<td>14.8</td>" +
                                "</tr>" +
                                "<tr>" +
                                "<td>降水(mm)</td>" +
                                "<td>0.0</td>" +
                                "<td>0.0</td>" +
                                "<td>0.0</td>" +
                                "<td>0.0</td>" +
                                "<td>0.0</td>" +
                                "<td>0.0</td>" +
                                "<td>0.0</td>" +
                                "<td>0.0</td>" +
                                "<td>0.0</td>" +
                                "<td>0.0</td>" +
                                "<td>0.0</td>" +
                                "<td>0.0</td>" +
                                "<td>0.0</td>" +
                                "<td>0.0</td>" +
                                "</tr>" +
                                "<tr>" +
                                "<td>相对湿度(%)</td>" +
                                "<td>72.3</td>" +
                                "<td>72.3</td>" +
                                "<td>72.3</td>" +
                                "<td>72.3</td>" +
                                "<td>72.3</td>" +
                                "<td>72.3</td>" +
                                "<td>72.3</td>" +
                                "<td>72.3</td>" +
                                "<td>72.3</td>" +
                                "<td>72.3</td>" +
                                "<td>72.3</td>" +
                                "<td>72.3</td>" +
                                "<td>72.3</td>" +
                                "<td>72.3</td>" +
                                "</tr>" +
                                "<tr>" +
                                "<td>云量(成)</td>" +
                                "<td></td>" +
                                "<td></td>" +
                                "<td></td>" +
                                "<td></td>" +
                                "<td></td>" +
                                "<td></td>" +
                                "<td></td>" +
                                "<td></td>" +
                                "<td></td>" +
                                "<td></td>" +
                                "<td></td>" +
                                "<td></td>" +
                                "<td></td>" +
                                "<td></td>" +
                                "</tr>" +
                                "<tr>" +
                                "<td>风速(m/s)</td>" +
                                "<td>10.2</td>" +
                                "<td>10.2</td>" +
                                "<td>10.2</td>" +
                                "<td>10.2</td>" +
                                "<td>10.2</td>" +
                                "<td>10.2</td>" +
                                "<td>10.2</td>" +
                                "<td>10.2</td>" +
                                "<td>10.2</td>" +
                                "<td>10.2</td>" +
                                "<td>10.2</td>" +
                                "<td>10.2</td>" +
                                "<td>10.2</td>" +
                                "<td>10.2</td>" +
                                "</tr>" +
                                "<tr>" +
                                "<td>风向</td>" +
                                "<td>东南</td>" +
                                "<td>东南</td>" +
                                "<td>东南</td>" +
                                "<td>东南</td>" +
                                "<td>东南</td>" +
                                "<td>东南</td>" +
                                "<td>东南</td>" +
                                "<td>东南</td>" +
                                "<td>东南</td>" +
                                "<td>东南</td>" +
                                "<td>东南</td>" +
                                "<td>东南</td>" +
                                "<td>东南</td>" +
                                "<td>东南</td>" +
                                "</tr>" +
                                "</tbody>" +
                                "</table>"
                            },
                            {
                                view: 'template', borderless: 1, id: 'one_week_tb',
                                template: "<table class='table-one-week'>" +
                                "<thead>" +
                                "<tr>" +
                                "<td>日期</td>" +
                                "<td>02-26</td>" +
                                "<td>02-27</td>" +
                                "<td>02-28</td>" +
                                "<td>03-01</td>" +
                                "<td>03-02</td>" +
                                "<td>03-03</td>" +
                                "<td>03-04</td>" +
                                "</tr>" +
                                "</thead>" +
                                "<tbody>" +
                                "<tr><td>天气状况</td><td><img src='/static/images/weather_icon/中雨.gif'></td><td><img src='/static/images/weather_icon/中雨.gif'></td><td><img src='/static/images/weather_icon/浮尘.gif'></td><td><img src='/static/images/weather_icon/晴.gif'></td><td><img src='/static/images/weather_icon/大雨.gif'></td><td><img src='/static/images/weather_icon/大暴雨.gif'></td><td><img src='/static/images/weather_icon/多云.gif'></td></tr>" +
                                "<tr><td>最高温度(℃)</td><td>-</td><td>18.1</td><td>18.1</td><td>14.9</td><td>21.4</td><td>23.1</td><td>12.4</td></tr>" +
                                "<tr><td>最低温度(℃)</td><td>-</td><td>11.9</td><td>11.8</td><td>10.2</td><td>15.6</td><td>20.2</td><td>10.4</td></tr>" +
                                "<tr><td>降水(mm)</td><td>-</td><td>0.0</td><td>0.0</td><td>0.3</td><td>0.7</td><td>0.0</td><td>3.3</td></tr>" +
                                "<tr><td>相对湿度(%)</td><td>70.3</td><td>79.2</td><td>82.5</td><td>72.8</td><td>60.7</td><td>65.3</td><td>55.5</td></tr>" +
                                "<tr><td>云量(成)</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>" +
                                "<tr><td>风速(m/s)</td><td>7.8</td><td>11.6</td><td>4.9</td><td>8.0</td><td>6.5</td><td>6.5</td><td></td></tr>" +
                                "<tr><td>风向</td><td>东东南</td><td>东南</td><td>西西南</td><td>东东北</td><td>东北</td><td>东南</td><td>东南</td></tr>" +
                                "</tbody>" +
                                "</table>"
                            }
                        ]
                    }
                ]
            }
        ]
    };
    var e1, e2, e3;
    var tab1Event, tab2Event;
    return {
        $ui: ui,
        $oninit: function (v) {
            v.adjust();
            c.$selectItem('weather:list', 'towns');
            e1 = echarts.init($$('towns:map').getNode());
            e1.setOption(d.$option_map);
            e2 = echarts.init($$('chart-48').getNode());
            e2.setOption(d.$option_48);
            e3 = echarts.init($$('chart-week').getNode());
            e3.setOption(d.$option_week);

            tab1Event = $$("towns:tab1").attachEvent("onChange", function(newv){
                if ('chart-48' === newv){
                    e2.resize();
                }
                else {
                    e3.resize();
                }
            });
            window.onresize = function () {
                e1.resize();
                e2.resize();
                e3.resize();
            }
        },
        $ondestroy: function () {
            if (e1){
                e1.dispose();
            }
            if (e2){
                e2.dispose();
            }
            if (e3){
                e3.dispose();
            }
            window.onresize = null;
            $$("towns:tab1").detachEvent(tab1Event);
        }
    };
});