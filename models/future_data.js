/**
 * Created by lenovo on 2017/7/24.
 */
define(function () {
    function getFuture() {
        return webix.ajax().post('/future');
    }
    return {
        $getFuture: getFuture
    };
});