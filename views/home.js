/**
 * Created by lenovo on 2017/5/17.
 */
define(['models/home_data', 'models/common'], function (d, c) {
    var ui = {
        cols: [
            {view: 'template', template: '', css: 'chart', id: 'home:map'},
            {
                gravity: 0.3,
                rows: [
                    {view: 'template', template: '强天气警报', height: 32},
                    {view: 'template', template: '#content#', gravity: 0.8, data: [{content: ''}]},
                    {view: 'template', template: '48小时天气预报', height: 32},
                    {view: 'template', id: 'home:weather', template: '#content#', data: [{content: ''}]}
                ]
            }
        ]
    };
    var e = undefined;
    var y = -1;
    var step = 0;
    var t = undefined;
    function scroll() {
        $$('home:weather').scrollTo(0, step);
        var pos = $$('home:weather').getScrollState();
        var posX = pos.x;
        var posY = pos.y;
        if (posY !== y){
            y = posY;
        }else{
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
            t = setInterval(scroll, 100);
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