/**
 * Created by lenovo on 2017/5/19.
 */
define(function () {
    function getOverAll() {
        return webix.ajax().post('/overall')
    }
    return {
        $getOverAll: getOverAll
    };
});