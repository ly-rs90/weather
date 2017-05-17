/**
 * Created by lenovo on 2017/5/17.
 */
define(['models/overall_data'], function (d) {
    var ui = {
        rows: [
            {
                view: 'template', template: '金华气象台&nbsp;#t#发布的生活指数预报',
                autoheight: 1,
                data: [{t: '2017/5/19 10:10:21'}]
            },
            {
                view: 'dataview',
                scroll: false,
                xCount: 3,
                type: {
                    template: "<div style='color:#007acc;font-size:20px'>#index#&nbsp;&nbsp;<span style='font-size:14px;color:#777'>#lev#</span></div>" +
                        "<div style='color: #333'>#content#</div>",
                    height: '100',
                    width: 'auto'
                },
                data: d.$data
            }
        ]
    };
    return {
        $ui: ui,
        $oninit: function (v) {
            v.adjust();
        }
    };
});