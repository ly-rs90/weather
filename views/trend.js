/**
 * Created by lenovo on 2017/5/17.
 */
define(['models/trend_data', 'models/common'], function (d, c) {
    var ui = {
        rows: [
            {
                view: 'template', id: 'trend:header', height: 38,
                template: "<div style='color:#333;font-size:20px'>#title#&nbsp;&nbsp;" +
                "<span style='font-size: 12px;color: #999'>&nbsp;#num#&nbsp;&nbsp;&nbsp;&nbsp;</span>" +
                "<span style='font-size: 12px;color: #999'>金华气象台发布于&nbsp;#time#</span></div>",
                data: [{title: '长期趋势预报', time: '', num: ''}]
            },
            {

            }
        ]
    };
    var e1 = undefined;
    var e2 = undefined;
    return {
        $ui: ui,
        $oninit: function (v) {
            v.adjust();
            c.$selectItem('weather:list', 'trend');
            d.$getTrend().then(function (data) {
                var temp = data.json();
                $$('trend:header').define('data', [temp[0]]);
                $$('trend:header').refresh();
            });
        }
    };
});