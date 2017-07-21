/**
 * Created by lenovo on 2017/5/18.
 */
define(function () {
    function getMonth() {
        return webix.ajax().post('/month');
    }
    return {
        $getMonth: getMonth
    };
});