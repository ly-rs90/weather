/**
 * Created by lenovo on 2017/5/18.
 */
define(function () {
    var drawChart = function (e, o) {
        if (e){
            e.setOption(o);
        }
    };
    return {
        $drawChart: drawChart
    };
});