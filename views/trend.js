/**
 * Created by lenovo on 2017/5/17.
 */
define(function () {
    var ui = {
        rows: [
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