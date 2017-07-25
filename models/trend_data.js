/**
 * Created by lenovo on 2017/5/22.
 */
define(function () {
    function getTrend() {
        return webix.ajax().post('/trend');
    }
    return {
        $getTrend: getTrend
    };
});