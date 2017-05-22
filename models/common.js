/**
 * Created by lenovo on 2017/5/18.
 */
define(function () {
    var drawChart = function (e, o) {
        if (e){
            e.setOption(o);
        }
    };
    var selectItem = function (list_id, id) {
        $$(list_id).select(id);
    };
    return {
        $drawChart: drawChart,
        $selectItem: selectItem
    };
});