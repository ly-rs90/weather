/**
 * Created by lenovo on 2017/5/17.
 */
define(function () {
    var ui = {
        rows: [
            {view: 'template', template: '未来9天天气预报'}
        ]
    };
    return {
        $ui: ui,
        $oninit: function (v) {
            v.adjust();
        }
    };
});