/**
 * Created by lenovo on 2017/5/17.
 */
define(function () {
    var ui = {
        rows: [
            {view: 'template', template: '重要气象情况汇报', autoheight: 1},
            {}
        ]
    };
    return {
        $ui: ui,
        $oninit: function (v) {
            v.adjust();
        }
    };
});