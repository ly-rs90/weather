/**
 * Created by lenovo on 2017/5/17.
 */
define(function () {
    var ui = {
        rows: [
            {view: 'template', template: '<div style="color:#333;font-size:20px">长期趋势预报</div>', autoheight: 1},
            {view: 'template', template: '长期趋势预报'}
        ]
    };
    return {
        $ui: ui,
        $oninit: function (v) {
            v.adjust();
        }
    };
});