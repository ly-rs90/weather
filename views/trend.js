/**
 * Created by lenovo on 2017/5/17.
 */
define(['models/trend_data', 'models/common'], function (d, c) {
    var ui = {
        rows: [
            {view: 'template', template: '<div style="color:#333;font-size:20px">长期趋势预报</div>', autoheight: 1},
            {view: 'template', template: '', css: 'chart', id: 'trend:chart1'},
            {view: 'template', template: '', css: 'chart', id: 'trend:chart2'}
        ]
    };
    var e1 = undefined;
    var e2 = undefined;
    return {
        $ui: ui,
        $oninit: function (v) {
            v.adjust();
            c.$selectItem('weather:list', 'trend');
            e1 = echarts.init($$('trend:chart1').getNode());
            e2 = echarts.init($$('trend:chart2').getNode());
            c.$drawChart(e1, d.$option1);
            c.$drawChart(e2, d.$option2);
        },
        $ondestroy: function () {
            if (e1){
                e1.dispose();
                e1 = undefined;
            }
            if (e2){
                e2.dispose();
                e2 = undefined;
            }
        }
    };
});