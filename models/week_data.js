/**
 * Created by lenovo on 2017/5/19.
 */
define(function () {
    function getWeek() {
        return webix.ajax().post('/week');
    }
    return {
        $getWeek: getWeek
    };
});