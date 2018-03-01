/**
 * Created by lenovo on 2017/5/17.
 */
define(['models/home_data', 'models/common'], function (d, c) {
    var ui = {
        cols: [
            {view: 'template', template: '', id: 'home:map'},
            {
                gravity: 0.3,
                rows: [
                    {height: 2},
                    {view: 'template', template: '3小时天气预报', height: 32, css: 'template-header'},
                    {
                        view: 'template', id: 'home:weather-3',
                        template: '<div id="weather_3">#content#</div><div id="weather_3_2"></div>', gravity: 0.8,
                        data: [{content: ''}], css: 'template-panel'
                    },
                    {view: 'template', template: '48小时天气预报', height: 32, css: 'template-header'},
                    {
                        view: 'template', id: 'home:weather-48',
                        template: '<div id="weather_48">#content#</div><div id="weather_48_2"></div>',
                        css: 'template-panel',
                        data: [{content: ''}]
                    }
                ]
            }
        ]
    };
    var e = undefined;
    var y = -1;
    var step = 0;
    var t = undefined;
    function scroll() {
        var template = document.getElementById('weather_48');
        var tHeight = template.offsetHeight;
        $$('home:weather-48').scrollTo(0, step);
        var pos = $$('home:weather-48').getScrollState();
        var posX = pos.x;
        var posY = pos.y;
        if (posY !== y){
            y = posY;
        }
        if (posY === tHeight + 15){
            step = 0;
        }
        step += 1;
    }
    return {
        $ui: ui,
        $oninit: function (v) {
            v.adjust();
            c.$selectItem('weather:list', 'home');
            e = echarts.init($$('home:map').getNode());

            c.$drawChart(e, d.$option);
            $$('home:weather-48').define('data', [{content: "<p style='font-weight: bold;color:#2f77cc'>金华市气象台发布的天气预报</p>" +
                "<p>发布时间：2018年01月24日06时。冷空气消息：受北方冷空气不断扩散南下影响，24日起我市将转入持续低温阴雨雪天气，其中25夜里至26日阴有中到大雪，山区大到暴雪，25～29日我市平原地区最低气温0～2℃，山区-1～-3℃，希有关各方面注意防范。天气预报：今天白天阴有时有小雨，夜里到明天白天阴有小雨，北部山区有雨夹雪或雪；明天夜里阴有雨夹雪或雪，山区有雪，雨雪量中等。风的预报：偏东风2～3级；降水概率：今天白天降水概率70%，今天夜里降水概率80%；气温预报：今天白天最高温度4～5℃，明天早晨最低温度2～3℃；</p>"}]);
            $$('home:weather-48').refresh();
            var temp = document.getElementById('weather_48');
            var temp2 = document.getElementById('weather_48_2');
            if ($$('home:weather-48').$height < temp.offsetHeight){
                temp2.innerHTML = temp.innerHTML;
            }else{
                temp2.innerHTML = '';
            }
            t = setInterval(scroll, 100);
            window.onresize = function () {
                e.resize();
                if ($$('home:weather-48').$height < temp.offsetHeight){
                    temp2.innerHTML = temp.innerHTML;
                }else{
                    temp2.innerHTML = '';
                }
            };

            d.$getHome().then(function (value) {
                var v = value.json();
                $$('home:weather-3').define('data', [{content: v.all}]);
            });
        },
        $ondestroy: function () {
            if (e){
                e.dispose();
                e = undefined;
            }
            if (t){
                clearInterval(t);
            }
        }
    };
});